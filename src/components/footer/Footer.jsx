import React from 'react';
import "./footer.css";
import logo from  "../../images/logo.png";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="footer_copyright">
            <p className="footer_p">Copyright © 2022 Sipto-web <br />|| All rights reserved | Privacy ||</p>
          </div>
        </div>
        <div className="footer_brand_tag">
          <img src={logo} alt="Company-logo" className='logo_img' />
          <NavLink to='/' className= 'navLink'>
          <h2 className='brand_tag'>Sipto</h2>
          </NavLink>
        </div>
        <div className="footer_social">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-discord"></i>
        </div>
      </footer>
    </>
  )
}

export default Footer