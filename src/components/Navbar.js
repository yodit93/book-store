import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="title">Bookstore CMS</h1>
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/" className="nav-link">BOOKS</Link>
      </li>
      <li className="nav-item">
        <Link to="/categories" className="nav-link">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
