
const Task = (props) => {
  return (
       <>
        <li key={[props.id]} className= {props.status === 'completed' ? 'completed' : 'pending'}> 
                        <span>{props.id} - {props.name}</span>
                        <button className='btn'>Delete</button>
        </li>
       </>
  )
}

export default Task;
