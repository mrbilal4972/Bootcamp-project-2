import React, {useState} from 'react';

function Counter() {
  
const [count, setCount] = useState(0)
  
function increment(){
    setCount(prevState => prevState + 1)
}
function decrement(){
    setCount(0)
}

  return (
    <div>
      Step Count: {count}
      <br />
      <button onClick={increment}>I have taken a step</button>
      <button onClick={decrement}>Reset</button>
    </div>
  )
}

export default Counter;
