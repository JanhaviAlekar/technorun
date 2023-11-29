import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css'; // Import CSS module
import logo from '../../assets/2.png';
import { ReactComponent as Hamburger } from '../../assets/fast-food-burger-svgrepo-com.svg';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [navbarScroll, setNavbarScroll] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbarScroll(true)
    } else {
      setNavbarScroll(false)
    }
  }
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
  return (
    <>
      <nav className={navbarScroll ? `${styles.navbar} ${styles.active}` : `${styles.navbar}`}>
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

