import './ReceiptNote.css'


export default function ReceiptNote(props) {
  return (
  
    <div className='receiptItem'>

    <div className='gasDataFormat'>
      <p> {props.month}/{props.day}/{props.year}</p>
      <p> {props.gallons}g @ ${props.price}/g = ${props.total} </p>
    </div>
    
    <p> 
      {props.deleteButton}
    </p>

    </div> 
    
  )
}
