import { useState } from 'react'
import './ReceiptNote.css'
import EditModal from './EditModal'


export default function ReceiptNote(props) {

  const [ confirmModal, setConfirmModal ] = useState(false)
  const [ editModal, setEditModal ] = useState(false)

  const handleConfirm = ()  => {
    setConfirmModal(true)
  }

  const handleGoBack = () => {
    setConfirmModal(false)
  }

  const handleEditOpen = () => { 
    setEditModal(true) 
  }

  const handleEditClose = () => {
    setEditModal(false)
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
      ? <div style={{ display: 'inline-flex', marginLeft: '5px'}}> {props.deleteButton} <button className='goBackButton' onClick={handleGoBack}>go back</button> </div> 
      :  <button className='deleteSymbol' onClick={handleConfirm}>!</button>}
    </p>
    {editModal ? <EditModal closeFunction={handleEditClose} /> : ''}
    </div> 
    
  )
}
