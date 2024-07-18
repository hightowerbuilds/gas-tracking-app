import { useState } from 'react'
import './ReceiptNote.css'


export default function ReceiptNote(props) {

  const [ confirmModal, setConfirmModal ] = useState(false)

  const handleConfirm = ()  => {
    setConfirmModal(true)
  }

  const handleGoBack = () => {
    setConfirmModal(false)
  }
  return (
  
    <div className='receiptItem'>

    <div className='gasDataFormat'>
      <p> {props.month}/{props.day}/{props.year}</p>
      <p> {props.gallons}g @ ${props.price} = ${props.total} </p>
    </div>
    
    <p> 
      {
      confirmModal 
      ? <div style={{ display: 'inline-flex'}}> {props.deleteButton} <button onClick={handleGoBack}>go back</button> </div> 
      :  <button className='deleteSymbol' onClick={handleConfirm}>!</button>}
    </p>

    </div> 
    
  )
}
