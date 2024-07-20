import './ReceiptForm.css'
import supabase from '../utils/supabase'
import { useEffect, useState } from 'react'
import ReceiptNote from '../components/ReceiptNote'


export default function ReceiptForm() {
  
    const [priceState, setPriceState] = useState()
    const [gallonState, setGallonState] = useState()
    const [totalState, setTotalState] = useState()
    const [monthState, setMonthState] = useState('mm')
    const [yearState, setYearState] = useState(2024)
    const [dateState, setDateState] = useState('dd')
    const [listState, setListState] = useState('RECEIPT LIST')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [viewToggle, setViewToggle] = useState(false)

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
        setDateState('day')
        setMonthState('month')
        setYearState(2024)
        setPriceState(null)
        setGallonState(null)
        setTotalState(null)
      
      }
    
      const deleteReceipt = async (id) => {
        try {
          const { error } = await supabase.from('receipt_data').delete().eq('id', id);
          if (error) {
            throw error;
          }
          setListState(listState.filter((element) => element.id !== id));
        } catch (error) {
          console.error('Error deleting message', error.message);
        }
      }

      const handleViewToggle = () => {
        setViewToggle(true)
      }
    
      const handleCloseToggle = () => {
        setViewToggle(false)
      }
    
      const renderReceiptList = () => {
        return [...listState].map((element) => (
        
          <ReceiptNote 
          key={element.id}
          day={element.day} 
          month={element.month} 
          year={element.year} 
          price={element.price} 
          gallons={element.quantity}
          total={element.total}
          deleteButton={<><button className='deleteButton' onClick={() => deleteReceipt(element.id)}> confirm delete</button><button className='editButton'>edit receipt</button></>
        }
          />
        ))
      }
  
    return (
      <div>
        {console.log('im here')}
       
        <button onClick={handleViewToggle}></button>
        <div className='formListContainer'>
         
        <div className='formContainer'>
        <h4 className='receiptFormHeading'>Receipt Form</h4>
  
          <input 
          className='monthInput'
          type="number" 
          placeholder='MONTH (M)' 
          value={monthState}
          onChange={(e) => setMonthState(e.target.value)}
          />
    
          <br />
  
          <input 
          className='dayInput'
          type="number" 
          placeholder='DAY (D)' 
          value={dateState}
          onChange={(e) => setDateState(e.target.value)}
          />
        
          <br />
          <input 
          className='yearInput'
          type="number" 
          placeholder='YEAR (YY)' 
          value={yearState}
          onChange={(e) => setYearState(e.target.value)}
          />
          {monthState}/{dateState}/{yearState}
          <br />
          <br />
  
          <input 
          className='priceInput'
          type="text" 
          placeholder='PRICE PER GALLON'
          value={priceState}
          onChange={(e) => setPriceState(e.target.value)}
          />
         
          <br />
          <br />
          
          <input 
          className='quantityInput'
          type="text" 
          placeholder='GALLONS PURCHASED'
          value={gallonState}
          onChange={(e) => setGallonState(e.target.value)}
          />
        
          <br />
          <br />
  
          <input 
          className='totalInput'
          type="number" 
          placeholder='TOTAL'
          value={totalState}
          onChange={(e) => setTotalState(e.target.value)}
          />
        
          <br />
          <br />

          <button className='submitButton' onClick={handleSubmit}>submit form</button>
          </div>

          <div className='listContainer'>
            { 
            viewToggle 
            ? <><h4 className='receiptListHeading'>RECEIPTS</h4> {renderReceiptList()} <button className='handleCloseView' onClick={handleCloseToggle}>close toggle</button></> 
            : <button className='handleViewToggle' onClick={handleViewToggle}>OPEN RECEIPT LIST</button>
            }
          </div>

          

        </div>
      </div>
    )
}
