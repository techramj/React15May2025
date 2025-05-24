import './Task.css';

const Task = ({task, handleDelete}) => {
    return (
         <div className='task'>
          <li key={[task.id]}  className= {task.completed ? 'completed' : 'pending'}> 
                <span>{task.id} - {task.name}</span>
                <button className='btn' 
                onClick={()=>{handleDelete(task.id)}}>Delete</button>
          </li>
         </div>
    )
  }

export default Task
