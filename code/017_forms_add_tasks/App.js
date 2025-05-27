
import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {
  const[tasks, setTasks] = useState([
      {id:101, name:'React Js', completed:true},
          {id:102, name:'Angular Js', completed:true},
          {id:103, name:'Java', completed:false}
    ]);

  return (
    <div className="App">
      <Header/>
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
