import { useState,useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './navbar.module.css'; // Import CSS module
import logo from '../../assets/2.png';
import { ReactComponent as Hamburger } from '../../assets/fast-food-burger-svgrepo-com.svg';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const location = useLocation();
  useEffect(()=>{
    setShowNavbar(false);
  },[location.pathname]);

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
                <NavLink to="/" >Home</NavLink>
              </li>
              <li>
                <NavLink to="/tutorial">Register</NavLink>
              </li>
              <li>
                <NavLink to="/cash-price">Cash Price</NavLink>
              </li>
              <li>
                <NavLink to="/HotelsAndConnectivity">Hotels and connectivity</NavLink>
              </li>
              <li>
                <NavLink to="/ContactUs">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

