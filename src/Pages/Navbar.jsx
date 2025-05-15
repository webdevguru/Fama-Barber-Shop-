import { Link } from "react-router-dom"; // Only import once
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar-fixed-top">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/services">Services</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

export default Navbar;
