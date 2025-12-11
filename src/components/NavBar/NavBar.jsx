import React from 'react';
import './NavBar.css'; 

const Navbar = ({ logo, navItems, onToggleClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        {logo && (
          <img 
            src={logo.src} 
            alt={logo.alt} 
            className="navbar__logo" 
          />
        )}
        
        <button 
          className="navbar__toggle" 
          aria-label="Abrir menú" 
          onClick={onToggleClick}
        >
          &#9776;
        </button>
      </div>

      <ul className="navbar__menu">
        {navItems.map((item) => (
          <li className="navbar__item" key={item.href}>
            <a href={item.href} className="navbar__link">
              
              {item.iconSrc && (
                <span className="navbar__icon">
                  <img 
                    src={item.iconSrc} 
                    alt={item.iconAlt || ''}
                    className='navbar__icon' 
                  />
                </span>
              )}
              
              <span className="navbar__text">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;