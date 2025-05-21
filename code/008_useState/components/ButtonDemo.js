import { useState } from 'react';
import '../App.css';
//const a = 10; //don't declare the variable outside the function
export default function ButtonDemo() {
   let count = 0;
   let [cnt, setCnt] = useState(0);

   function increment(){
    count++;
    setCnt(cnt+1);
    console.log('increment the count',count);
   }

   function decrement(){
    count--;
    setCnt(cnt-1);
    console.log('decrement the count',count);
   }

   function reset(){
    count = 0;
    setCnt(0);
    console.log('reset the count',count);   
   }

   function incremnetBy2(){
    setCnt(x => x +1);
    setCnt(x => x+1);
    console.log('increment the count by 2');
   }
  return (
    <div className='box'>
      <h1>Button Demo</h1>
      <p>count : {count}</p>
      <p>cnt: {cnt}</p>
      <button onClick={increment} className='btn' >Increment</button>
      <button onClick={decrement} className='btn'>Decrement</button>
      <button onClick={reset} className='btn'>Reset</button> 
      <br/>
      <button onClick={incremnetBy2} className='btn'>Increment By 2</button>    
    </div>
  )
}
