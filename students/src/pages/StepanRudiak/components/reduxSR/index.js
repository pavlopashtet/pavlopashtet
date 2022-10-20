import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StepanActions} from "../../../../redux/action/StepanActions";

const ReduxSr = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.Stepan);
  const inputRef = React.createRef();

  const incrementFn = () => dispatch(StepanActions.increment())
  const decrementFn = () => dispatch(StepanActions.decrement())
  const incrementByValFn = () => dispatch(StepanActions.incrementByVal(+inputRef.current.value))
  const decrementByValFn = () => dispatch(StepanActions.decrementByVal(+inputRef.current.value))
  return (
    <div>
      <div>{state.counter}</div>
      <div>
        <input ref={inputRef} type="number" placeholder={'type a number you want to add or subtract'} defaultValue={10}/>
      </div>
      <div>hello</div>
      <div>
        <button onClick={incrementFn}>increment</button>
        <button onClick={decrementFn}>decrement</button>
        <button onClick={incrementByValFn}>increment by</button>
        <button onClick={decrementByValFn}>decrement by</button>
      </div>
    </div>
  );
};

export default ReduxSr;