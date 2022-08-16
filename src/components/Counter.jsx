import React from 'react';
import { increaseAsync, decreaseAsync } from '../modules/counter';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const number = useSelector(state => state.counterReducer.number)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={() => dispatch(increaseAsync())}> + 1 </button>
        <button onClick={() => dispatch(decreaseAsync())}> - 1 </button>

      </div>
    </div>
  );
};

export default Counter;