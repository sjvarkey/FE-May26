import React from 'react'
import { useState, useEffect } from 'react';


function Counter() {
  const [count, setCount] = useState(0);

  function increment(){
    setCount(count+1);
  }

  function decrement(){
    if(count > 0){
    setCount(count-1);
    }
  }
  
  useEffect(() => {
    
    console.log("use effect runs")
    document.title = `You clicked ${count} times`

  });


  return (
    <div>
      <button onClick={increment}> Increment </button>
      <h1> {count} </h1>
      <button onClick={decrement}> Decrement </button>
      

    </div>
  )
}

export default Counter