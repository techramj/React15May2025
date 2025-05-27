import React, { useState } from 'react'
import Task from './Task';
import './TaskList.css';

const TaskList = ({tasks, setTasks}) => {
  

  const[show, setShow] = useState(true);

  function handleDelete(id){
    setTasks(tasks.filter((task) => task.id !== id));
  }

  console.log('tasks=',tasks);

  return (
    <section className='tasklist'>
      <ul>
        <div className='header'>
          <h1>TaskList</h1>
          <button className="trigger" onClick={()=> setShow(!show)}>{show?'Hide' :'Show'}</button>
        </div>
        {show && tasks.map((task) => (
          <Task key = {task.id} task={task} handleDelete ={handleDelete} />
        ))}
      </ul>
    </section>
  )
}

export default TaskList;
