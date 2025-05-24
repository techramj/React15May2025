import React, { useState } from 'react'
import Banner from './Banner';
import Button from './Button';
import Message from './Message';

const ButtonBanner = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='box'>
     <h3>Button Banner</h3>
      <Banner count={count}/>
      <Button count={count}  setCount = {setCount}/>
      <Message count={count} />

    </div>
  )
}

export default ButtonBanner;
