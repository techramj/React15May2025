
import logo from "../assets/seed.png";
import { Link, NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/" className='logo'>
          <img src={logo} alt="Logo" />
          <span>React Router</span>
        </Link>
        <nav className="navigation">
          <NavLink to="/" className="link" end>Home</NavLink>
          <NavLink to="/products" className="link">Products</NavLink>
          <NavLink to="/contact" className="link">Contact</NavLink>
        </nav>
      </header>
    </div>
  )
}

export default Header
