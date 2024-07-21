import './EditModal.css'

export default function EditModal(props) {
  return (
    <div className='modalLayerOne'>
      

        <div className='modalLayerTwo'>
        <input type="text" />
          <button onClick={props.closeButton}>close modal</button>
        </div>
    </div>
  )
}
