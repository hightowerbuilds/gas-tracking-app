import { useEffect, useState } from 'react'
import './App.css'
import ReceiptNote from './components/ReceiptNote'
import supabase from './utils/supabase'


export default function App() {


  const [priceState, setPriceState] = useState()
  const [gallonState, setGallonState] = useState()
  const [totalState, setTotalState] = useState()
  const [monthState, setMonthState] = useState()
  const [yearState, setYearState] = useState()
  const [dateState, setDateState] = useState()
  const [listState, setListState] = useState('RECEIPT LIST')
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const { data } = await supabase.from('receipt_data').select('*')
    setListState(data)
  }

  async function createMessage(tableName, data){

    try {
      const { error } = await supabase.from(tableName).insert([data]);
      if (error) throw error;
      setIsLoading(false)
      console.log('success');
    } catch (error) {
      setError('error')
      console.log('error')
    }
  }

  const rowData = {
    day: dateState,
    month: monthState,
    year: yearState,
    price: priceState,
    quantity: gallonState,
    total: totalState
  }

  const handleSubmit = async () => {
    await createMessage('receipt_data', rowData);
    getData();
    setDateState()
    setMonthState()
    setYearState(24)
    setPriceState(0.00)
    setGallonState(0.00)
    setTotalState(0.00)
  
  }

  const deleteReceipt = async (id) => {
    try {
      const {error} = await supabase.from('receipt_data').delete().eq('id', id);
      if (error) throw error;
      setListState(listState.filter((element) => element.id !== id));
    } catch (error) {
      console.error('Error deleting message', error.message);
    }
  }


  const renderReceiptList = () => {
    return [...listState].map((element) => (
      <>
      <ReceiptNote 
      key={element.id}
      day={element.day} 
      month={element.month} 
      year={element.year} 
      price={element.price} 
      gallons={element.quantity}
      total={element.total}
      id={element.id}
      />
      <button onClick={() => deleteReceipt(element.id)} >delete</button>
      </>
    
    ))
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
        <br />
        <br />
        <button onClick={handleSubmit}>submit form button</button>


        </div>

        <div className='listContainer'>
       
     <h4 style={{fontFamily: 'monospace', fontSize: 20}}>RECEIPT DATUMS</h4>
        {console.log(listState)}
       {renderReceiptList()}
        </div>
      </div>

     
    </div>
  )
}
