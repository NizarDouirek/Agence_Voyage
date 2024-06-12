import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Hotel = () => {

  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://form.jotform.com/jsform/241625749353563';
    
    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{backgroundColor:"black"}}>
      
      <div >
      <nav className="py-md-4 py-3 d-lg-flex">
          <div id="logo">
            <h1 className="mt-md-0 mt-2">
              <a href="index.html">
                <span className="fa fa-map-signs"></span> Luxury Voyage
              </a>
            </h1>
          </div>
 
          <ul className="menu ml-auto mt-2" style={{marginLeft:"200px"}}>
            <li className="">
              <a href="index.html">Home</a>
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
        {/* JotForm form will be injected here */}
        <div id="jotform-container"></div>
      </div>
      
    </div>
  );
};

export default Hotel;
