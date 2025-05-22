import React, { useState } from 'react';
import '../App.css';
import Task from './Task';

const TaskList = () => {

    let [tasks,setTasks] = useState([
        {id:101, name:'React Js', status:'pending'},
        {id:102, name:'Angular Js', status:'completed'},
        {id:103, name:'Java', status:'completed'},
    ]);

    const [show, setShow] = useState(false);

    const handleDelete = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
        console.log('deleted task', id);
      
    }
    
    let a = 10;

  return (
    <div className='box'>
      <h1>Task List</h1>
      <ul>
        <button className='toggle' onClick={()=>setShow(!show)}>{show?'Hide':'Show'}</button>
        {
            show && tasks.map((task)=> (
               <Task task={task}  handleDelete={handleDelete} a={a} />
            ))
        }
      </ul>
    </div>
  )
}

export default TaskList;
