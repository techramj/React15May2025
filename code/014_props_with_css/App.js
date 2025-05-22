
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskList from "./components/TaskList";


function App() {
  return (
    <>
      <Header/>
      <div>
        <TaskList/>
        <Card type="success"/>
        <Card type="warning"/>
        <Card type="alert"/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
