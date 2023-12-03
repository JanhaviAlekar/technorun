import React from 'react'
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <>
         <footer className="footer">
        
        <div className="footer__addr">
          <h1 className="footer__logo">Technorun</h1>
              
          <NavLink to="/ContactUs">Contact Us</NavLink>
          
          <address>
            5534 Somewhere In. The World 22193-10212<br/>
                
            <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
          </address>
        </div>
        
        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>
      
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
            <h2 className="nav__title">Legal</h2>
            
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
            <h2 className="nav__title">Legal</h2>
            
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
          
          <div className="legal__links">
            <span>Made with <span className="heart">♥</span> remotely from Anywhere</span>
          </div>
        </div>
      </footer>
        </>
    )
}
export default Footer