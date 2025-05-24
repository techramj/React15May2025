
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
import TaskList from './components/TaskList';


function App() {
  return (
    <div>
      <Header/>
      <main>
        <h1 className='h1'>TODO List</h1>
         <TaskList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
