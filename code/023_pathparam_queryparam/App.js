
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Contact from './components/Contact';
import Footer from './components/Footer';
import  { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Page from './components/PageNotFound';
import Admin from './components/Admin';

function App() {
  const user = "admin";
  return (
    <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="products" element={<ProductList />} />
              <Route path="products/:id" element={<ProductDetails />} />
              <Route path="contact" element={<Contact />} />
              <Route path="admin" element= {user ==='admin'?<Admin />: <Navigate to="/" />}/>
              <Route path = "*" element= {<Page />}  />
            </Routes>
          </main>
          <Footer/>
    </div>
  );
}

export default App;
