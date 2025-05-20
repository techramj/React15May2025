import '../App.css';
//const a = 10; //don't declare the variable outside the function
export default function ButtonDemo() {
   let count = 0;

   function increment(){
    count++;
    console.log('increment the count',count);
   }

   function decrement(){
    count--;
    console.log('decrement the count',count);
   }

   function reset(){
    count = 0;
    console.log('reset the count',count);   
   }
  return (
    <div className='box'>
      <h1>Button Demo</h1>
      <p>count : {count}</p>
      <button onClick={increment} className='btn' >Increment</button>
      <button onClick={decrement} className='btn'>Decrement</button>
      <button onClick={reset} className='btn'>Reset</button>   
    </div>
  )
}
