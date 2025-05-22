import React, { useState } from 'react';
import '../App.css';
import Task from './Task';

const TaskList = () => {

    let [tasks,setTasks] = useState([
        {id:101, name:'React Js', status:'pending'},
        {id:102, name:'Angular Js', status:'completed'},
        {id:103, name:'Java', status:'completed'},
    ]);

    const handleDelete = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
        console.log('deleted task', id);
      
    }

  return (
    <div className='box'>
      <h1>Task List</h1>
      <ul>
        {
            tasks.map((task)=> (
               <Task id={task.id} name={task.name} status={task.status} />
            ))
        }
      </ul>
    </div>
  )
}

export default TaskList;
