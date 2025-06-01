import {Link} from 'react-router-dom';
import Logo from '../assets/seed.png' 
import "./Header.css";

export const Header = () => {

  return (
    <header>
      <Link to="/" className='logo'>
        <img src={Logo} alt="Logo" />
        <span>Shopping Mart</span>
      </Link>
      <nav className="navigation">
        <Link to="/" className="link">Home</Link>
        <Link to="/cart" className="link">Cart</Link>
      </nav>

      <Link to="/cart" className="items">
        <span>Cart: 2</span>
      </Link>
      
    </header>
  )
}

