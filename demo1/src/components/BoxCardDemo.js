import React from 'react'
import BoxCard from './BoxCard'

const BoxCardDemo = () => {
  return (
    <div>
        <BoxCard type='success' >
            <p className='title'>Lorem ipsum dolor sit amet.</p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corrupti sit vero ea voluptate quo saepe odio eaque modi. Numquam optio in enim architecto asperiores eligendi deserunt velit dignissimos iusto!</p>
        </BoxCard>

        <BoxCard type='warning' >
            <p className='title'>Lorem ipsum dolor sit amet.</p>
            <p className="description">Thhis is the warning message!</p>
        </BoxCard>

        <BoxCard type='alert' >
            <p className='title'>Lorem ipsum dolor sit amet.</p>
            <p className="description">This is alert message. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corrupti sit vero ea voluptate quo saepe odio eaque modi. Numquam optio in enim architecto asperiores eligendi deserunt velit dignissimos iusto!</p>
        </BoxCard>
      
    </div>
  )
}

export default BoxCardDemo
