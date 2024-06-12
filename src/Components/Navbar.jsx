// src/Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Importation des styles
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <header>
      <div className="container">
        <nav className="py-md-4 py-3 d-lg-flex">
          <div id="logo">
            <h1 className="mt-md-0 mt-2">
              <a href="index.html">
                <span className="fa fa-map-signs"></span> Luxury Voyage
              </a>
            </h1>
          </div>
 
          <ul className="menu ml-auto mt-1" style={{marginLeft:"300px"}}>
            <li className="">
            <Link to="/home">Home</Link>
            </li>
            <li className="">
            <Link to="/about">About</Link>
            </li>
            <li className="active">
            <Link to="/header">Service</Link>
            </li>
            <li className="">
              <a href="/package">Packages</a>
            </li>
            <li className="">
            <Link to="/contact">Contact</Link>
            </li>
            <li className="booking">
            <Link to="/book">Book</Link>
            </li>
          </ul>
        </nav>
      </div>
      </header>

      
      <section class="banner_inner" id="home">
	<div class="banner_inner_overlay">
	</div>
    </section>
    </div>
   
    
);
}
    export default Navbar;