import Logo from '../assests/images/todo.jpeg';
import './Header.css';

const Header = () => {
  return (
    <header>
        <img src={Logo} alt="Logo" />
        <a href='/'>Home</a>
    </header>
  )
}

export default Header
