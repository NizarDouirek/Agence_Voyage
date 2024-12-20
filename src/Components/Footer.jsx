import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Importation des styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div><footer >
    <section class="footer footer_w3layouts_section_1its py-5">
        <div class="container py-lg-4 py-3">
            <div class="row footer-top">
                <div class="col-lg-3 col-sm-6 footer-grid_section_1its_w3">
                    <div class="footer-title">
                        <h3>Address</h3>
                    </div>
                    <div class="footer-text">
                        <p>Location : 1234 lock, Maarif, Casablanca, Morroco</p>
                        <p>Phone : +212 634894364</p>
                        <p>Email : <a href=""><span class="__cf_email__" >luxuryvoyage@gmail.com</span></a></p>
                        <p>Fax : +12 534894364</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 footer-grid_section mt-sm-0 mt-4">
                    <div class="footer-title">
                        <h3>About Us</h3>
                    </div>
                    <div class="footer-text">
                        <p>Join us on the following platform for travel tips, special offers, and much more: </p>
                    </div>
                    <ul class="social_section_1info">
                        <li class="mb-2 facebook"><a href="#"><span class="fa fa-facebook"><FontAwesomeIcon icon={faFacebook} /></span></a></li>
                        <li class="mb-2 twitter"><a href="#"><span class="fa fa-twitter">  <FontAwesomeIcon icon={faTwitter} /></span></a></li>
                        <li class="google"><a href="#"><span class="fa fa-google-plus"><FontAwesomeIcon icon={faGoogle} /></span></a></li>
                        <li class="linkedin"><a href="#"><span class="fa fa-linkedin"><FontAwesomeIcon icon={faLinkedin} /></span></a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-sm-6 mt-lg-0 mt-4 footer-grid_section_1its_w3">
                    <div class="footer-title">
                        <h3>Travel Places</h3>
                    </div>
                    <div class="row">
                        <ul class="col-6 links">
                            <li><a href="#choose" class="scroll">New Zealand </a></li>
                            <li><a href="#overview" class="scroll">Paris, France </a></li>
                            <li><a href="#pricing" class="scroll">Los Angles</a></li>
                            <li><a href="#faq" class="scroll"> Darlington</a></li>
                            <li><a href="#testimonials" class="scroll">Canada </a></li>
                            <li><a href="#contact" class="scroll"> South Africa </a></li>
                        </ul>
                        <ul class="col-6 links">
                            <li><a href="#">Spain </a></li>
                            <li><a href="#">Turkey </a></li>
                            <li><a href="#faq" class="scroll">Europe </a></li>
                            <li><a href="#">Italy </a></li>
                            <li><a href="#">Sweden </a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mt-lg-0 mt-4 footer-grid_section_1its_w3">
                    <div class="footer-title">
                        <h3>Newsletter</h3>
                    </div>
                    <div class="footer-text">
                        <p>By subscribing to our mailing list you will always get latest news and updates from us.</p>
                        <form action="#" method="post">
                            <input type="email" name="Email" placeholder="Enter your email..." required=""/>
                            <button class="btn1"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                            <div class="clearfix"> </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </footer>
    
    <div class="copyright py-3 text-center" style={{backgroundColor:"#222"}}>
        <p>© 2024 Luxury Voyage. All Rights Reserved | Design by <a href="" target="=_blank" style={{color:'#aaa'  }}> LUXURY VOYAGE </a></p>
    </div>
        </div>
       
        
      );
    }
    
    export default Footer;