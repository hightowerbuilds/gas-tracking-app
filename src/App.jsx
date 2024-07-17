import { useEffect, useState } from 'react'
import './App.css'
import ReceiptNote from './components/ReceiptNote'
import supabase from './utils/supabase'


export default function App() {


  const [priceState, setPriceState] = useState(3.69)
  const [gallonState, setGallonState] = useState(14)
  const [totalState, setTotalState] = useState(0.00)
  const [monthState, setMonthState] = useState(7)
  const [yearState, setYearState] = useState(24)
  const [dateState, setDateState] = useState(16)
  const [listState, setListState] = useState('list-text')
  const [error, setError] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const { data } = await supabase.from('receipt-data').select()
    setListState(data)
  }





{/**
  What needs to happen here? 

  - we need the button to add all of this data into the table on Supabase
  - then form must be refreshed
  - the data must appear in the list section of the app using an entry component
      that is mapped onto the page. this 'mapping' onto the page needs to 
      account for future features like averages, totals per month, etc
  - what else...

  */}



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

        <button>submit form button</button>


        </div>

        <div className='listContainer'>
       
     <h4 style={{fontFamily: 'monospace', fontSize: 20}}>RECEIPT DATUMS</h4>
        {console.log(listState)}
        <ReceiptNote 
        day={listState[0].day} 
        month={listState[0].month} 
        year={listState[0].year} 
        price={listState[0].price} 
        gallons={listState[0].quantity}
        total={listState[0].total}
        />
        </div>
      </div>

     
    </div>
  )
}
