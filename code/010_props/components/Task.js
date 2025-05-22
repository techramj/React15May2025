
const Task = (props) => {
  return (
       <>
        <li key={[props.task.id]} className= {props.task.status === 'completed' ? 'completed' : 'pending'}> 
              <span>{props.task.id} - {props.task.name}</span>
              <button className='btn' 
              onClick={()=>{props.handleDelete(props.task.id)}}>Delete</button>
        </li>
       </>
  )
}

export default Task;
