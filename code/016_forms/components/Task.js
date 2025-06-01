import React from 'react';
import './Task.css';

const Task = ({task, handleDelete}) => {
  return (
    <div className='task'>
      <li className={task.completed ?'completed' :'incomplete'} >
        <span>{task.id} - {task.name}</span>
        <button className='delete' onClick={() => handleDelete(task.id)}>Delete</button>
      </li>
    </div>
  )
}

export default Task;
