import { useState } from 'react'
import './App.css'



export default function App() {



  const [dateState, setDateState] = useState(69)
  const [priceState, setPriceState] = useState(3.69)
  const [gallonState, setGallonState] = useState(14)



  return (
    <div>
      <h2 className='titleHeading'>gas spending</h2>

        <div className='formListContainer'>
        <div className='formContainer'>
        
         
        FORM
        <br />
        <input 
        type="number" 
        placeholder='DATE' 
        value={dateState}
        onChange={(e) => setDateState(e.target.value)}
        />
        {dateState}{/*  MAY NEED TO SEPARATE INTO Mont Date Year */}
        <br />
        <input 
        type="text" 
        placeholder='PRICE PER GALLON'
        value={priceState}
        onChange={(e) => setPriceState(e.target.value)}
        />
        {priceState}
        <br />
        <input 
        type="text" 
        placeholder='GALLONS PURCHASED'
        value={gallonState}
        onChange={(e) => setGallonState(e.target.value)}
        />
        {gallonState}
        <br />
        <button>submit form button</button>


        </div>

        <div className='listContainer'>
       
        LIST

        </div>
      </div>

     
    </div>
  )
}
