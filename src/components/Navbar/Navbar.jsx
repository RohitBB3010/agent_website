import './Navbar.css';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" />
        <div className="title">
          <span id="insurance">Insurance</span>
          <span id="adda">Adda</span>
        </div>
      </div>

      <div className="hamburger" onClick={handleToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`navbar-right ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#categories" onClick={closeMenu}>Plans</a></li>
        <li><a href="#testimonials" onClick={closeMenu}>Testimonials</a></li>
        <li><a href="#faqs" onClick={closeMenu}>FAQs</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
      </ul>
    </div>
  );
}
