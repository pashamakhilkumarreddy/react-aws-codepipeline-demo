import React, { useReducer } from 'react';
import CounterStyles from '../../styles/Counter';

const Counter = () => {
  const initialState = { count: 0 };
  const countReducer = (state, action) => {
    switch (action.type) {
    case 'increment':
      return { count: state.count + action.value };
    case 'decrement':
      return { count: state.count + action.value };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
    }
  };
  const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
      <CounterStyles.CounterValue data-testid='counter-val'>
        Count:&nbsp;
        {state.count}
      </CounterStyles.CounterValue>
      <CounterStyles.ButtonRow>
        <CounterStyles.Button onClick={() => dispatch({ type: 'decrement', value: -2 })}>-2</CounterStyles.Button>
        <CounterStyles.Button onClick={() => dispatch({ type: 'decrement', value: -1 })}>-1</CounterStyles.Button>
        <CounterStyles.Button positive onClick={() => dispatch({ type: 'decrement', value: 1 })}>+1</CounterStyles.Button>
        <CounterStyles.Button positive onClick={() => dispatch({ type: 'decrement', value: 2 })}>+2</CounterStyles.Button>
      </CounterStyles.ButtonRow>
      <CounterStyles.ButtonRow>
        <CounterStyles.Button onClick={() => dispatch({ type: 'reset' })}>RESET</CounterStyles.Button>
      </CounterStyles.ButtonRow>
    </div>
  );
};

export default Counter;
