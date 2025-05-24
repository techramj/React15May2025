
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';


function App() {
  const pSytles = {
     color: 'green',
     border: '2px solid red',
     borderRadius: '10px',
     padding: '10px',
     margin: '10px',
     fontSize: '30px',
  }
  return (
    <div>
      <Header/>
      <main>
          <h1>Welcome to the Style Demo</h1>
          <p style= {{color:'blue', fontSize:'10px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At est fugiat soluta quaerat commodi quae ipsum, error minus odio consectetur voluptas perspiciatis doloribus culpa quisquam voluptate optio laborum nobis quod.</p>

          <p style= {pSytles}>Lorem ipsum dolor sit amet.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
