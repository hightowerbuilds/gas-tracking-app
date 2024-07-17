import { useState } from 'react'
import './App.css'
import ReceiptNote from './ReceiptNote'



export default function App() {


  const [priceState, setPriceState] = useState(3.69)
  const [gallonState, setGallonState] = useState(14)
  const [totalState, setTotalState] = useState(0.00)
  const [monthState, setMonthState] = useState(7)
  const [yearState, setYearState] = useState(24)
  const [dateState, setDateState] = useState(16)

  const [listState, setListState] = useState('list-text')

  const buttonHandler = () => {
    setListState()
  }

  return (
    <div>
      <h2 className='titleHeading'>gas spending</h2>

        <div className='formListContainer'>
        <div className='formContainer'>
        
         
       <h4 style={{fontFamily: 'monospace', fontSize: 20}}>Receipt Form</h4>
        <br />

        <input 
        type="number" 
        placeholder='MONTH (M)' 
        value={monthState}
        onChange={(e) => setMonthState(e.target.value)}
        />
  
        <br />

        <input 
        type="number" 
        placeholder='DAY (D)' 
        value={dateState}
        onChange={(e) => setDateState(e.target.value)}
        />
      
        <br />
        <input 
        type="number" 
        placeholder='YEAR (YY)' 
        value={yearState}
        onChange={(e) => setYearState(e.target.value)}
        />
        {monthState}/{dateState}/20{yearState}
        <br />
        <br />

        <input 
        type="text" 
        placeholder='PRICE PER GALLON'
        value={priceState}
        onChange={(e) => setPriceState(e.target.value)}
        />
        ${priceState}
        <br />
        <br />
        
        <input 
        type="text" 
        placeholder='GALLONS PURCHASED'
        value={gallonState}
        onChange={(e) => setGallonState(e.target.value)}
        />
        {gallonState} gallons
        <br />
        <br />

        <input 
        type="number" 
        placeholder='TOTAL'
        value={totalState}
        onChange={(e) => {setTotalState(e.target.value)}}
        />
        ${totalState}

        <button onClick={buttonHandler}>submit form button</button>


        </div>

        <div className='listContainer'>
       
     <h4 style={{fontFamily: 'monospace', fontSize: 20}}>RECEIPT DATUMS</h4>
        {listState}
        <ReceiptNote day={dateState} month={monthState} year={yearState} price={priceState} gallons={gallonState}/>

        </div>
      </div>

     
    </div>
  )
}
