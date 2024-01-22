import React, { useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCheckboxChange = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='menubody'>
      <label>
        <input type="checkbox" checked={menuOpen} onChange={handleCheckboxChange} />
        <span className="menu">
          <span className="hamburger"></span>
        </span>
          <ul>
            <li>
              <Link to={'/'} onClick={handleCheckboxChange}>Home</Link>
            </li>
            <li>
                <Link to={'/about'} onClick={handleCheckboxChange}>About</Link>
            </li>
            <li>
                <Link to={'/project'} onClick={handleCheckboxChange}>Projects</Link>
            </li>
            <li>
              <Link to={'/experiences'} onClick={handleCheckboxChange}>Experiences</Link>
            </li>
            <li>
              <Link to={'/contact'} onClick={handleCheckboxChange}>Contact</Link>
            </li>
          </ul>
      </label>
    </div>
  );
};

export default Menu;
