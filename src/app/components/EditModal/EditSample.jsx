import { changeText } from './editModalSlice.js'
import { useSelector, useDispatch } from 'react-redux';


export default function EditSample() {

    const newText = useSelector((state) => state.editModal.value)
    const dispatch = useDispatch()

  return (
    <div>

        {console.log(newText)}
        <button onClick={() => dispatch(changeText())} >push it</button>

    </div>
  )
}
