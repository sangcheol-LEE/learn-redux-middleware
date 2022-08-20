import React from 'react';
import { increaseThunk, decreaseThunk } from '../modules/counter';
import { useSelector, useDispatch } from 'react-redux';

const CounterContainer = () => {
  const dispatch = useDispatch()
  const number = useSelector(state => state.counterReducer.number)
  return (
    <div>
      <h1>number : {number}</h1>
      <div>
        <button onClick={() => dispatch(increaseThunk())}>+ 1</button>
        <button onClick={() => dispatch(decreaseThunk())}>- 1</button>
      </div>
    </div>
  );
};
export default CounterContainer;