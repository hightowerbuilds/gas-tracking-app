import './ReceiptNote.css'

export default function ReceiptNote(props) {
  return (
    <div className='receiptContainer'>
       
    <p className='receiptItem'>
    {props.month}/{props.day}/{props.year}  ${props.price}/gal  {props.gallons}gal purchased
    </p> 
       
    </div>
  )
}
