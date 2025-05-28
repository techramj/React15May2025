
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Contact from './components/Contact';
import Footer from './components/Footer';
import  { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/1000" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
    </div>
  );
}

export default App;
