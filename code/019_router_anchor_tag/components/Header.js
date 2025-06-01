import logo from "../assets/seed.png"

const Header = () => {
  return (
    <div>
      <header>
        <a href="/" className='logo'>
          <img src={logo} alt="Logo" />
          <span>React Router</span>
        </a>
        <nav className="navigation">
          <a href="/" className="link">Home</a>
          <a href="/products" className="link">Products</a>
          <a href="/contact" className="link">Contact</a>
        </nav>
      </header>
    </div>
  )
}

export default Header
