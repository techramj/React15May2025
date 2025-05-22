import React from 'react'

const Message = ({count}) => {
  //let count= props.count;

  function getClassName(){
    if(count < 10){
        return 'box';
    }else if(count >= 10 && count<20){
        return 'box success';
    }else if(count >= 20 && count<30){
        return 'box warning';
    }else{
      return 'box alert';
    }
  }
  return (
    <div className= {getClassName()}>
        <h3>Message</h3>
        {count < 10 && <p>Not eligible for any Button</p>}
        {count >= 10 && count<20 && <p>eligible for Silver Button</p>}
        {count >= 20 && count<30 && <p>eligible for Golden Button</p>}
        {count >= 30  && <p>eligible for Plantinum Button</p> }
    </div>
  )
}

export default Message;
