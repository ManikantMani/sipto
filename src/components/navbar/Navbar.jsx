import React from 'react';
import "./navbar.css";
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg"   >
        <div className="container-fluid">
          <div className="navbar-brand nav_logo">
            <img src={logo} alt="logo" className='logo_img' />
            <h2 className="logo_name"><NavLink to='/'className= "navLink">Sipto</NavLink></h2>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to='/' aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/token'>Token</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/vaulet'>Vaulet</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/status'>Crypto-Status</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"to='/docs'>Docs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/contact'>Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
