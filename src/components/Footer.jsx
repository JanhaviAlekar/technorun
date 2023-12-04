import React from 'react'
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <>
         <footer className="footer">
        
        <div className="footer__addr">
          <h1 className="footer__logo">Technorun</h1>
        </div>
        
        <ul className="footer__nav">
          <li className="nav__item">
            <h2><NavLink to="/Register" className="footer__btn reg-link" >Register</NavLink></h2> 
      
            <ul className="nav__ul">
              <li>
              </li>
      
              <li>
              </li>
                  
              <li>
              </li>
            </ul>
          </li>
          
          <li className="nav__item">
          <h2><NavLink to="/cash-price" className="footer__btn reg-link" >Cash-Prizes</NavLink></h2> 
            
            <ul className="nav__ul">
              <li>
              </li>
              
              <li>
              </li>
              
              <li>
              </li>
            </ul>
          </li>
          
          <li className="nav__item">
          <h2><NavLink to="/ContactUs" className="footer__btn reg-link" >Contact Us</NavLink></h2> 

            
            <ul className="nav__ul">
              <li>
              </li>
              
              <li>
              </li>
              
              <li>
              </li>
            </ul>
          </li>
        </ul>
        
        <div className="legal">
          <p>&copy; 2023 Technorun. All rights reserved.</p>
          

        </div>
      </footer>
        </>
    )
}
export default Footer