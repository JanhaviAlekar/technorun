import { useState } from 'react';
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
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;

