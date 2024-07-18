import './ReceiptNote.css'


export default function ReceiptNote(props) {
  return (
    <div className='receiptContainer'>
    <p className='receiptItem'>
    {props.month}/{props.day}/{props.year}  ${props.price}/g  {props.gallons}g/pur ${props.total}spent 

    <p style={{ marginLeft: '5px'}}> 
      <button>edit</button>
      {props.deleteButton}
    </p>
   
    </p> 
       
    </div>
  )
}
