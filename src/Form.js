import React from 'react'
import {Link} from 'react-router-dom';


function Form({form, handleChance}){
    return(
        <div>
         <form>
        <input type="text" name='isim' value={form.isim} onChange={handleChance} placeholder='isim soyisim giriniz' ></input>
        <select name="sehir" value={form.sehir} onChange={handleChance}>
          <option value="">Lütfen şehir seçiniz</option>
          <option value="Kilis">Kilis</option>
          <option value="Ankara">Ankara</option>
          <option value="İstanbul">İstanbul</option>
        </select>
        <input type="date" name="dogum" value={form.dogum} onChange={handleChance}/>
        <input type="color" name="renk" value={form.renk} onChange={handleChance}/>
        <textarea cols="20" rows="5" name="adres" placeholder='Adresinizi giriniz' onChange={handleChance}></textarea> 
        <Link to="/bilgiler"><button>Gönder</button></Link>
      </form>
        </div>
    )
}
export default Form