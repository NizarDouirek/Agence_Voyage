import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./home.css";
import about from "../Home/about.jpg";
import p1 from "../Package/p1.jpg";
import p2 from "../Package/p2.jpg";
import p3 from "../Package/p3.jpg";
import p4 from "../Package/p4.jpg";
import japan from '../Package/japan.jpg'; // Importation de l'image Japan
import singapore from '../Package/singapore.jpg'; // Importation de l'image Singapore
import malaysia from '../Package/malaysia.jpg'; // Importation de l'image Malaysia
import china from '../Package/china.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { IonIcon } from '@ionic/react';
 // Importation du composant IonIcon
import { happyOutline, boatOutline, airplaneOutline, giftOutline,calendarOutline,mapOutline   } from 'ionicons/icons';

const Home = () => {
  return (
    <> 
    
    <header>
	<div class="container">
		
		<nav class="py-md-4 py-3 d-lg-flex">
			<div id="logo">
				<h1 class="mt-md-0 mt-2"> <a href="index.html"><span class="fa fa-map-signs"></span> Luxury Voyage</a></h1>
			</div>
			<label for="drop" class="toggle"><span class="fa fa-bars"></span></label>
			
			<ul class="menu ml-auto mt-1">
				
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
		
	</div>
</header>

<section class="banner_w3lspvt" id="home">
	<div class="csslider infinity" id="slider1">
		<ul>
			<li>
				<div class="banner-top">
					<div class="overlay">
						<div class="container">
							<div class="w3layouts-banner-info">
								<h3 class="text-wh">Never let your memories be greater than your dreams.</h3>
								<h4 class="text-wh">Embrace the thrill of exploration and the joy of discovery </h4>
								<div class="buttons mt-4">
									<a href="about" class="btn mr-2">About Us</a>
									<a href="book" class="btn" >Book a Tour</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</li>
	
			
		</ul>
	</div>
</section>

<section class="about py-5">
	<div class="container py-lg-5 py-sm-4">
		<div class="row">
			<div class="col-lg-6 about-left">
				<h3 class="mt-lg-3">We will take you to the Top destination in the world, <strong>Explore with us!</strong></h3>
				<p class="mt-4">Nous vous emmènerons vers les destinations les plus prisées au monde,
					 explorez avec nous ! Préparez-vous à découvrir des paysages à couper le souffle,
					  des cultures fascinantes et des expériences inoubliables.
					   Que vous souhaitiez vous détendre sur des plages de sable blanc,
					    partir à l'aventure dans des jungles luxuriantes ou explorer des villes dynamiques, 
						nous sommes là pour vous guider à travers les merveilles de notre planète.
						 Rejoignez-nous dans cette aventure épique et laissez-nous vous montrer les trésors cachés de notre monde.</p>
			</div>
			<div class="col-lg-6 about-right text-lg-right mt-lg-0 mt-5">
				<img src={about} alt="" class="img-fluid abt-image" />
			</div>
		</div>
		<div class="row mt-5 text-center">
			<div class="col-lg-3 col-6">
				<div class="counter">
				 <span class="fa fa-smile-o"><IonIcon icon={happyOutline} /></span>
					<div class="timer count-title count-number">1000+</div>
					<p class="count-text text-uppercase">happy customers</p>
				</div>
			</div>
			<div class="col-lg-3 col-6">
				<div class="counter">
					<span class="fa fa-ship"><IonIcon icon={boatOutline} /> </span>
					<div class="timer count-title count-number">2271</div>
					<p class="count-text text-uppercase">Tours & Travels </p>
				</div>
			</div>
			<div class="col-lg-3 col-6 mt-lg-0 mt-5">
				<div class="counter">
					<span class="fa fa-users"><IonIcon icon={airplaneOutline} /></span>
					<div class="timer count-title count-number">200</div>
					<p class="count-text text-uppercase">destinations</p>
				</div>
			</div>
			<div class="col-lg-3 col-6 mt-lg-0 mt-5">
				<div class="counter">
					<span class="fa fa-gift"><IonIcon icon={giftOutline} /></span>
					<div class="timer count-title count-number">20+<span>years</span></div>
					<p class="count-text text-uppercase">experience</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="book py-5">
	<div class="container py-lg-5 py-sm-3">
		<h2 class="heading text-capitalize text-center"> How To Plan Your Trip</h2>
		<div class="row mt-5 text-center">
			<div class="col-lg-4 col-sm-6">
				<div class="grid-info">
					<div class="icon">
						<span class="fa fa-map-signs"><IonIcon icon={mapOutline} /></span>
					</div>
					<h4>Pick Destination</h4>
					<p class="mt-3">Find your perfect getaway. Explore vibrant cities, serene beaches, or thrilling adventures. Discover the world with us.</p>
				</div>
			</div>
			<div class="col-lg-4 col-sm-6 mt-sm-0 mt-5">
				<div class="grid-info">
					<div class="icon">
						<span class="fa fa-calendar"><IonIcon icon={calendarOutline} /></span>
					</div>
					<h4>Select Date</h4>
					<p class="mt-3">Pick your ideal date. Enjoy flexibility and convenience. Plan your trip effortlessly.</p>
				</div>
			</div>
			<div class="col-lg-4 col-sm-6 mt-lg-0 mt-5">
				<div class="grid-info">
					<div class="icon">
						<span class="fa fa-gift"><IonIcon icon={giftOutline} /></span>
					</div>
					<h4>Enjoy the Trip</h4>
					<p class="mt-3">Pick your ideal date. Enjoy flexibility and convenience. Plan your trip effortlessly.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="packages pt-5">
	<div class="container py-lg-4 py-sm-3">
		<h2 class="heading text-capitalize text-center"> Discover our tour packages</h2>
		<p class="text mt-2 mb-5 text-center">Select your preferred date. Embark on an unforgettable journey and enjoy every moment of the trip.</p>
		<div class="row">
			
			<div class="col-lg-3 col-sm-6 mb-5">
				<Link to="/book" className="package-link">
				<div class="image-tour position-relative">
					<img src={p1} alt="" class="img-fluid" />
					<p><span class="fa fa-tags"></span> <span>20$</span></p>
				</div>
				<div class="package-info">
					<h6 class="mt-1"><span class="fa fa-map-marker mr-2"></span>Paris, France.</h6>
					<h5 class="my-2">Sodales vel mauris</h5>
					<p class="">Vestibulum tellus neque, et velit mauris at, augue.</p>
					<ul class="listing mt-3">
						<li><span class="fa fa-clock-o mr-2"></span>Duration : <span>10 Days</span></li>
					</ul>
				</div> 
				</Link>
			</div>
			<div class="col-lg-3 col-sm-6 mb-5"><Link to="/book" className="package-link">
				<div class="image-tour position-relative">
					<img src={p2} alt="" class="img-fluid" />
					<p><span class="fa fa-tags"></span> <span>20$</span></p>
				</div>
				<div class="package-info">
					<h6 class="mt-1"><span class="fa fa-map-marker mr-2"></span>Los Angles, USA.</h6>
					<h5 class="my-2">Sodales vel mauris</h5>
					<p class="">Vestibulum tellus neque, et velit mauris at, augue.</p>
					<ul class="listing mt-3">
						<li><span class="fa fa-clock-o mr-2"></span>Duration : <span>10 Days</span></li>
					</ul>
				</div></Link>
			</div>
			<div class="col-lg-3 col-sm-6 mb-5"><Link to="/book" className="package-link">
				<div class="image-tour position-relative">
					<img src={p3} alt="" class="img-fluid" />
					<p><span class="fa fa-tags"></span> <span>20$</span></p>
				</div>
				<div class="package-info">
					<h6 class="mt-1"><span class="fa fa-map-marker mr-2"></span>Agra, India.</h6>
					<h5 class="my-2">Sodales vel mauris</h5>
					<p class="">Vestibulum tellus neque, et velit mauris at, augue.</p>
					<ul class="listing mt-3">
						<li><span class="fa fa-clock-o mr-2"></span>Duration : <span>10 Days</span></li>
					</ul>
				</div></Link>
			</div>
			<div class="col-lg-3 col-sm-6 mb-5"><Link to="/book" className="package-link">
				<div class="image-tour position-relative">
					<img src={p4} alt="" class="img-fluid" />
					<p><span class="fa fa-tags"></span> <span>20$</span></p>
				</div>
				<div class="package-info">
					<h6 class="mt-1"><span class="fa fa-map-marker mr-2"></span>Paris, France.</h6>
					<h5 class="my-2">Sodales vel mauris</h5>
					<p class="">Vestibulum tellus neque, et velit mauris at, augue.</p>
					<ul class="listing mt-3">
						<li><span class="fa fa-clock-o mr-2"></span>Duration : <span>10 Days</span></li>
					</ul>
				</div></Link>
			</div>
			<div class="view-package text-center mt-4">
			<a href="package">View All Packages</a>
		</div>
			
		</div>
	</div>
</section>

<section class="text-content">
	<div class="overlay-inner py-5">
		<div class="container py-md-3">
			<div class="test-info">
				<h4 class="tittle">Enjoy The Trip</h4>
				<p class="mt-3">Enjoy every moment of your journey. Savor new experiences, embrace the adventure, and create lasting memories. Discover the beauty of the world and let each destination inspire you. Whether you're exploring bustling cities or serene landscapes, let your travels bring joy and excitement to your life</p>
				<div class="text-left mt-4">
						<a href="booking.html">Book Now</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="destinations py-5" id="destinations">
	<div class="container py-xl-5 py-lg-3">
		<h3 class="heading text-capitalize text-center"> Popular Destinations</h3>
		<p class="text mt-2 mb-5 text-center">Discover our popular destinations. From bustling cities to serene beaches, there's something for everyone. Start your adventure today!</p>
		<div class="row inner-sec-w3layouts-w3pvt-lauinfo">
			<div class="col-md-3 col-sm-6 col-6 destinations-grids text-center">
				<h4 class="destination mb-3">China</h4>
				<div class="image-position position-relative">
					<img src={china} class="img-fluid" alt=""/>
					<div class="rating">
						<ul>
							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>
							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>
							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>
							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>
						</ul>
					</div>
				</div>
				<div class="destinations-info">
					<div class="caption mb-lg-3">
						<h4>China</h4>
						<a href="http://localhost:3000/Book/">Book Now</a>
					</div>
				</div>
			</div>
			<div class="col-md-3 col-sm-6 col-6 destinations-grids text-center">
				<h4 class="destination mb-3">Malaysia</h4>
				<div class="image-position position-relative">
					<img src={malaysia} class="img-fluid" alt=""/>
					<div class="rating">
						<ul>
							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>
							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>
							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>
							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>
							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>
						</ul>
					</div>
				</div>
				<div class="destinations-info">
					<div class="caption mb-lg-3">
						<h4>Malaysia</h4>
						<a href="http://localhost:3000/Book/">Book Now</a>
					</div>
				</div>
			</div>
			<div class="col-md-3 col-sm-6 col-6 destinations-grids text-center mt-md-0 mt-4">
				<h4 class="destination mb-3">Japan</h4>
				<div class="image-position position-relative">
					<img src={japan} class="img-fluid" alt=""/>
					<div class="rating">
						<ul>
							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>
							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>
							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>
							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>
							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>
						</ul>
					</div>
				</div>
				<div class="destinations-info">
					<div class="caption mb-lg-3">
						<h4>Japan</h4>
						<a href="http://localhost:3000/Book/">Book Now</a>
					</div>
				</div>
			</div>
			<div class="col-md-3 col-sm-6 col-6 destinations-grids text-center mt-md-0 mt-4">
				<h4 class="destination mb-3">Singapore</h4>
				<div class="image-position position-relative">
					<img src={singapore} class="img-fluid" alt=""/>
					<div class="rating">
						<ul>
							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>
							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>
							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>
							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>
							<li><span class="fa fa-star"><FontAwesomeIcon icon={faStar} /></span></li>
						</ul>
					</div>
				</div>
				<div class="destinations-info">
					<div class="caption mb-lg-3">
						<h4>Singapore</h4>
						<a href="http://localhost:3000/Book/">Book Now</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<Footer/>
    </>
   
  );
};

export default Home;