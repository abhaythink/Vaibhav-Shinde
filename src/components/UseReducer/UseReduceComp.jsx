import { useReducer, useState } from "react";

const UseReduceComp = () => {
    const reducer = (state, action) => {
    console.log(state,action);
    if(action.type==='INCREMENT'){
        return state+1;
    }
   else if(action.type==='DECREMENT'){
        return state-1;
    }
    else if(action.type==='RESET'){
        return 0;
    }
    
  };
  const [count, dispatch] = useReducer(reducer, 0);
  

  return (
    <>
      <h1>useReducer </h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
};
export default UseReduceComp;
