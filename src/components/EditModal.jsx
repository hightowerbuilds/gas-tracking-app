import './EditModal.css'
import supabase from '../utils/supabase'

export default function EditModal(props) {
  return (
    <div className='modalLayerOne'>
      

        <div className='modalLayerTwo'>

            <div className='modalLayerTwoInputs'>

            <input className='modalInput' type="text"/>
            <input className='modalInput' type="text" />
            <input className='modalInput' type="text" />
            <input className='modalInput' type="text" name="" id="" />
            <input className='modalInput' type="text"/>
            <input className='modalInput' type="text" />
            <input className='modalInput' type="text" />
            <input className='modalInput' type="text" name="" id="" />

            </div>
       
          <button className='modalEditCloseButton' onClick={props.closeButton}>close modal</button>
        </div>
    </div>
  )
}
