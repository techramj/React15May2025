
import { useState } from 'react';
import './AddTask.css';

const AddTask = () => {
    const [taskValue, setTaskValue] = useState('');
    function handleChange(event){
        //console.log(event);
        setTaskValue(event.target.value);
    }

    console.log("calling AddTask component");
  return (
    <section className='addtask'>
      <form> 
        {/* <label htmlFor="task">Task Name</label> */}
        <input  type='text' name="task" id="task" placeholder='Task Name' autoComplete='false' 
        onChange={(event) => handleChange(event)}
        />
        <button type='submit'>Add Task</button>
      </form>
      {taskValue} 
    </section>
    
  )
}

export default AddTask
