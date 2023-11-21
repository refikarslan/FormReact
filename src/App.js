import './App.css';
import { useState } from 'react';
import { Switch,Route} from 'react-router-dom';
import Bilgiler from './Bilgiler';
import Form from './Form';


function App() {
 
  const[form, setForm]= useState({isim:'', sehir:'', dogum:'',renk:'',adres:''});
 
  const handleChance=(event)=>{
    setForm({...form,[event.target.name]:event.target.value})

  }


  return (
    <div className="App">
      <h2>Bigilerinizi Giriniz</h2>
    
      <Switch>
        <Route path='/' exact><Form form={form} handleChance={handleChance}/></Route>
        <Route path='/bilgiler'><Bilgiler form={form}/></Route>

      </Switch>
    </div>
  );
}
export default App;
