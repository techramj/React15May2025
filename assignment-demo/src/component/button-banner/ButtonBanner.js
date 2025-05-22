import React from 'react'
import Banner from './Banner';
import Button from './Button';
import Message from './Message';

const ButtonBanner = () => {
  return (
    <div className='box'>
        <h3>Button Banner</h3>
      <Banner/>
      <Button />
      <Message />
    </div>
  )
}

export default ButtonBanner;
