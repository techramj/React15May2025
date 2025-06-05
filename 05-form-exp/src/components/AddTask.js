
import { useRef, useState } from 'react';
import './AddTask.css';

const AddTask = ({tasks, setTasks}) => {
    //const [taskValue, setTaskValue] = useState(''); //initial value of task input
    //const [status, setStatus] = useState(false);

    const taskRef = useRef('');
    const statusRef = useRef(false);

    // function handleChange(event){
    //     //console.log(event);
    //     //setTaskValue(event.target.value);
    //     console.log("task=",taskRef.current.value)
    // }

    function handleReset(){
        //setTaskValue('');
        taskRef.current.value = '';
        //setStatus(false);
        statusRef.current.value = false;
    }

    function handleSubmit(event){
        event.preventDefault(); //prevent the default form submission behavior
        /*
        let taskName = taskValue.trim();
        let id = Math.floor(Math.random() * 1000); //generate a random id
        let completed = Boolean(status);
        const task = {id:id, name:taskName, completed:completed};
        console.log(task);
        setTasks([ task,...tasks]); //update the tasks state with the new task
        */

        let taskName = taskRef.current.value.trim();
        let id = Math.floor(Math.random() * 1000); //generate a random id
        let completed = Boolean(statusRef.current.value);
        const task = {id:id, name:taskName, completed:completed};
        console.log(task);
        let updatedTaskList = [ task,...tasks]; //create a new array with the new task at the beginning
        localStorage.setItem("tasklist", JSON.stringify(updatedTaskList)); //save the updated task list to local storage
        setTasks(updatedTaskList); //update the tasks state with the new task
        handleReset();
    }

    console.log("calling AddTask component");
  return (
    <section className='addtask'>
      <form onSubmit={(event) => handleSubmit(event)}>   
        <input  type='text' name="task" id="task" placeholder='Task Name' autoComplete='false' 
        ref = {taskRef}
        />
        <select ref={statusRef} >
            <option value='false'>Pending</option>
            <option value='true'>Completed</option>
        </select>
        <button type='submit'>Add Task</button>
        <button type='button' onClick={handleReset}>Reset</button>
      </form>
      {taskRef.current.value}  {statusRef.current.value ? 'Completed' : 'Pending'}  
    </section>
    
  )
}

export default AddTask;
