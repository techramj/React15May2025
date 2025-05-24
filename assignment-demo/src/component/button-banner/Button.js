
const Button = (props) => {
    

    function handleClick(){
        props.setCount(count => count +1);
    }

  return (
    <div className='box'>
        <h3>Button</h3>
        <button className='btn' onClick={handleClick} >Click Me</button>
        <p>Button Clicked {props.count} time(s). </p>
    </div>
  )
}

export default Button;
