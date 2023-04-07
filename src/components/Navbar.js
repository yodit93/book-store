import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="bookstore-cms">Bookstore CMS</h1>
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/" className="nav-link books">BOOKS</Link>
      </li>
      <li className="nav-item">
        <Link to="/categories" className="nav-link categories">CATEGORIES</Link>
      </li>
    </ul>
    <div className="Oval">
      <div className="Mask">
        <CgProfile />
      </div>
    </div>
  </nav>
);

export default Navbar;
