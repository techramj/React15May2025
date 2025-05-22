/*
props => {task:{}, handleDelete:()=>{}}
*/
const Task = ({task, handleDelete}) => {
  return (
       <>
        <li key={[task.id]} className= {task.status === 'completed' ? 'completed' : 'pending'}> 
              <span>{task.id} - {task.name}</span>
              <button className='btn' 
              onClick={()=>{handleDelete(task.id)}}>Delete</button>
        </li>
       </>
  )
}

export default Task;
