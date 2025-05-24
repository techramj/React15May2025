import React from 'react'

const Banner = (props) => {
  return (
    <div className='box'>
      <h3>Banner</h3>
      <p>The button click {props.count} time(n)</p>
    </div>
  )
}

export default Banner;
