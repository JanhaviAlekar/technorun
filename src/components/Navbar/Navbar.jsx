import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./navbar.module.css"; // Import CSS module
import logo from "../../assets/2.png";
import { ReactComponent as Hamburger } from "../../assets/fast-food-burger-svgrepo-com.svg";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setShowNavbar(false);
  }, [location.pathname]);
  useEffect(() => {
    setActiveLink(location.pathname); // Update active link based on the current path
  }, [location.pathname]);
  return (
    <>
      <nav className={styles.navbar}>
        <div className="grad-bar" />
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          </div>

          <div className={styles["menu-icon"]} onClick={handleShowNavbar}>
            <Hamburger className="ham" />
          </div>
          <div
            className={`${styles["nav-elements"]} ${
              showNavbar ? styles.active : ""
            }`}
          >
            <ul>
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName={styles.active}
                  className={activeLink === "/" ? styles.active : ""}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tutorial"
                  activeClassName={styles.active}
                  className={activeLink === "/tutorial" ? styles.active : ""}
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cash-price"
                  activeClassName={styles.active}
                  className={activeLink === "/cash-price" ? styles.active : ""}
                >
                  Cash Price
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/AboutUs"
                  activeClassName={styles.active}
                  className={activeLink === "/AboutUs" ? styles.active : ""}
                >
                 About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
