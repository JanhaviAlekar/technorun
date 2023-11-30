import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css'; // Import CSS module
import logo from '../../assets/2.png';
import { ReactComponent as Hamburger } from '../../assets/fast-food-burger-svgrepo-com.svg';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className='grad-bar' />
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          </div>
          
          <div className={styles['menu-icon']} onClick={handleShowNavbar}>
            <Hamburger className='ham' />
          </div>
          <div className={`${styles['nav-elements']} ${showNavbar ? styles.active : ''}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/cash-price">Cash Price</NavLink>
              </li>
              <li>
                <NavLink to="/hotelAndConnectivity">Hotels and connectivity</NavLink>
              </li>
              <li>
                <NavLink to="/aboutUs">About Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;

