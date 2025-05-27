
import { useState } from 'react';
import './AddTask.css';

const AddTask = ({tasks, setTasks}) => {
    const [taskValue, setTaskValue] = useState(''); //initial value of task input
    const [status, setStatus] = useState(false);

    function handleChange(event){
        //console.log(event);
        setTaskValue(event.target.value);
    }

    function handleReset(){
        setTaskValue('');
        setStatus(false);
    }

    function handleSubmit(event){
        event.preventDefault(); //prevent the default form submission behavior
        let taskName = taskValue.trim();
        let id = Math.floor(Math.random() * 1000); //generate a random id
        let completed = Boolean(status);
        const task = {id:id, name:taskName, completed:completed};
        console.log(task);
        setTasks([ task,...tasks]); //update the tasks state with the new task

        
        handleReset();
    }

    console.log("calling AddTask component");
  return (
    <section className='addtask'>
      <form onSubmit={(event) => handleSubmit(event)}>   
        {/* <label htmlFor="task">Task Name</label> */}
        <input  type='text' name="task" id="task" placeholder='Task Name' autoComplete='false' 
        onChange={(event) => handleChange(event)}
        value={taskValue}
        />
        <select value={status} onChange={(event) => setStatus(event.target.value === 'true')}>
            <option value='false'>Pending</option>
            <option value='true'>Completed</option>
        </select>
        <button type='submit'>Add Task</button>
        <button type='button' onClick={handleReset}>Reset</button>
      </form>
      {taskValue}  {status ? 'Completed' : 'Pending'}
    </section>
    
  )
}

export default AddTask;
