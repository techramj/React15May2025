
import logo from "../assets/seed.png";
import { Link} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/" className='logo'>
          <img src={logo} alt="Logo" />
          <span>React Router</span>
        </Link>
        <nav className="navigation">
          <Link to="/" className="link">Home</Link>
          <Link to="/products" className="link">Products</Link>
          <Link to="/contact" className="link">Contact</Link>
        </nav>
      </header>
    </div>
  )
}

export default Header
