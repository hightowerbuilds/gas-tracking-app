
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{
    
      position: 'absolute',
      left: '5%',
      bottom: '5%'
    }}>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
    </div>
  );
}
