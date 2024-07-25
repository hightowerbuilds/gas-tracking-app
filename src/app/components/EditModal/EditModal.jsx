import './EditModal.css'
import supabase from '../../../utils/supabase'
import { useEffect, useState } from 'react'
import { changeText } from './editModalSlice.js'
import { useSelector, useDispatch } from 'react-redux';

export default function EditModal(props) {

    const newText = useSelector((state) => state.editModal.value)
    const dispatch = useDispatch()
    const [listState, setListState] = useState('RECEIPT LIST')

    useEffect(() => {
        getData()
      }, [])
    
      const getData = async () => {
        const { data } = await supabase.from('receipt_data').select('*')
        setListState(data)
      }
    

  return (
    <div className='modalLayerOne'>
      

        <div className='modalLayerTwo'>
            
            <div className='modalLayerTwoInputs'>
               {console.log(props.test)}
            <p>
            <h4>edit receipt #{listState[0].id}</h4><br />

            day........<input className='modalInput' type="text" placeholder={listState[0].day}/> <br />
            month...   <input className='modalInput' type="text" placeholder={listState[0].month}/> <br />
            year...... <input className='modalInput' type="text" placeholder={listState[0].year}/> <br />
            price..... <input className='modalInput' type="text" placeholder={listState[0].price}/> <br />
            quantity   <input className='modalInput' type="text" placeholder={listState[0].quantity}/> <br />
            total......<input className='modalInput' type="text" placeholder={listState[0].total}/> <br /> <br />
                <button>save edit and close modal</button> <br />
                <button className='modalEditCloseButton' onClick={props.closeButton}>go back</button>
            </p>
      
            </div>
            {console.log(newText)}
            <button onClick={() => dispatch(changeText())} >push it</button>
         
        </div>
    </div>
  )
}
