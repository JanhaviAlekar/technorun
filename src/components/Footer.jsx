import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Technorun</h1>
          <h2>Contact us :- +918010117421</h2>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2>
              <NavLink to="/tutorial" className="footer__btn">
                Register
              </NavLink>
            </h2>
          </li>

          <li className="nav__item">
            <h2>
              <NavLink to="/cash-price" className="footer__btn ">
                <span>Cash-Prizes</span>
              </NavLink>
            </h2>

            <ul className="nav__ul">
              <li></li>

              <li></li>

              <li></li>
            </ul>
          </li>

          <li className="nav__item">
            <h2>
              <NavLink to="/ContactUs" className="footer__btn ]">
                Contact Us
              </NavLink>
            </h2>

            <ul className="nav__ul">
              <li></li>

              <li></li>

              <li></li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p> &nbsp; &nbsp;&nbsp;&nbsp;&copy; 2023 Technorun. All rights reserved.</p>
          <p>Designed and developed by Blue <span className="logo-blue">PAPER</span>.media</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
