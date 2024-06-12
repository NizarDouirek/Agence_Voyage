// src/Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import p1 from './p1.jpg';
import japanImage from './japan.jpg'; // Importation de l'image Japan
import singapore from './singapore.jpg'; // Importation de l'image Singapore
import malaysia from './malaysia.jpg'; // Importation de l'image Malaysia
import china from './china.jpg'; // Importation de l'image China
import './styles.css'; // Importation des styles
import Navbar  from './Navbar';
import Footer from './Footer';

function Header() {
  return (
    <div>
       <Navbar/>





    <section class="services pt-5">
	<div class="container py-lg-5 py-sm-3">
		<h2 class="heading text-capitalize text-center mb-lg-5 mb-4"> Our Services</h2>
		<div class="row">
			<div class="col-lg-3 main-title-text">
				<h4 class="my-lg-4 mb-4">The journey of a thousand miles begins with a single step.</h4>
				<img src={p1} alt="" class="img-fluid" />
			</div>
			<div class="col-lg-9 mt-lg-0 mt-5">
				<div class="row">
					<div class="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center mb-5">
						<div class="ser-fashion-grid">
							<div class="about-icon mb-md-4 mb-3">
								<span class="fa fa-building" aria-hidden="true"></span>
							</div>
							<div class="ser-sevice-grid">
							  <h4 class="pb-3">Accomodation</h4>
							  <p>Comfortable stays, scenic views, unforgettable experiences. Relax and recharge in our handpicked accommodations. Book your dream getaway now!</p>
							</div>
					  </div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center mb-5">
						<div class="ser-fashion-grid">
							<div class="about-icon mb-md-4 mb-3">
								<span class="fa fa-free-code-camp" aria-hidden="true"></span>
							</div>
							<div class="ser-sevice-grid">
								<h4 class="pb-3">Winter Tours</h4>
							  <p>Dive into snowy realms, ski down powdery slopes, sled through frosty forests. Experience the magic of winter with us. Join now!</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center mb-5">
						<div class="ser-fashion-grid">
							<div class="about-icon mb-md-4 mb-3">
								<span class="fa fa-users" aria-hidden="true"></span>
							</div>
							<div class="ser-sevice-grid">
								<h4 class="pb-3">Exp Agents</h4>
							  <p> Expert guidance, personalized service. Let our experienced agents plan your perfect trip. Book now for a seamless adventure</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center mb-5">
						<div class="ser-fashion-grid">
							<div class="about-icon mb-md-4 mb-3">
								<span class="fa fa-money" aria-hidden="true"></span>
							</div>
							<div class="ser-sevice-grid">
								<h4 class="pb-3">Low Prices</h4>
							  <p>Affordable adventures await. Explore without breaking the bank. Book your budget-friendly trip today!</p>
							</div>
					  </div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center mb-5">
						<div class="ser-fashion-grid">
							<div class="about-icon mb-md-4 mb-3">
								<span class="fa fa-binoculars" aria-hidden="true"></span>
							</div>
							<div class="ser-sevice-grid">
								<h4 class="pb-3">Easy Booking</h4>
							  <p>Seamlessly reserve your adventure with just a few clicks. Start your journey now!</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center mb-5">
						<div class="ser-fashion-grid">
							<div class="about-icon mb-md-4 mb-3">
								<span class="fa fa-camera" aria-hidden="true"></span>
							</div>
							<div class="ser-sevice-grid">
								<h4 class="pb-3">Best Packages</h4>
							  <p>Explore our top-rated deals for unforgettable experiences. Book now for the ultimate adventure!</p>
							</div>
					  </div>
					</div>
				</div>
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
				<div class=" mt-4">
						<a href="http://localhost:3000/book">Book Now</a>
				</div>
			</div>
		</div>
	</div>
</section>





<section class="trav-grids py-5" id="desti">
	<div class="container py-xl-5 py-lg-3">
		<h3 class="heading text-capitalize text-center mb-lg-5 mb-4">Tourism Places</h3>
		<div class="row">
			<div class="col-lg-6 mt-4">
				<div class="grids-tem-one">
					<div class="row">
						<div class="col-sm-5 grids-img-left" >
							<img src={japanImage}alt="" class="img-fluid"/>
						</div>
						<div class="col-sm-7 right-cont">
							<h4 class="mb-2 let mt-sm-0 mt-2 tm-clr">Japan</h4>
							<ul class="d-flex">
								<li><span class="fa fa-star"></span></li>
								<li><span class="fa fa-star"></span></li>
								<li><span class="fa fa-star"></span></li>
								<li><span class="fa fa-star"></span></li>
								<li><span class="fa fa-star"></span></li>
							</ul>
							<p class="mt-3">Sed ut perspiciatis unde omnis istes natus error sit volup tatem accusani tium doloremque laudantium.</p>
							<p class="duration mt-2"><span class="fa fa-clock-o mr-2"></span><strong>Duration</strong> : 2 Days, 3hrs</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-6 mt-4">
				<div class="grids-tem-one">
					<div class="row">
						<div class="col-sm-5 grids-img-left">
							<img src={singapore} alt="" class="img-fluid"/>
						</div>
						<div class="col-sm-7 right-cont">
							<h4 class="mb-2 let mt-sm-0 mt-2 tm-clr">Singapore</h4>
							<ul class="d-flex">
								<li><span class="fa fa-star"></span></li>
								<li><span class="fa fa-star"></span></li>
								<li><span class="fa fa-star"></span></li>
								<li><span class="fa fa-star"></span></li>
								<li><span class="fa fa-star"></span></li>
							</ul>
							<p class="mt-3">Sed ut perspiciatis unde omnis istes natus error sit volup tatem accusani tium doloremque laudantium.</p>
							<p class="duration mt-2"><span class="fa fa-clock-o mr-2"></span><strong>Duration</strong> : 2 Days, 3hrs</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row pt-lg-3">
			<div class="col-lg-6 mt-4">
				<div class="grids-tem-one">
					<div class="row">
						<div class="col-sm-5 grids-img-left">
							<img src={malaysia} alt="" class="img-fluid"/>
						</div>
						<div class="col-sm-7 right-cont">
							<h4 class="mb-2 let mt-sm-0 mt-2 tm-clr">Malaysia</h4>
							<ul class="d-flex">
								<li><span class="fa fa-star"></span></li>
								<li><span class="fa fa-star"></span></li>
								<li><span class="fa fa-star"></span></li>
								<li><span class="fa fa-star"></span></li>
								<li><span class="fa fa-star"></span></li>
							</ul>
							<p class="mt-3">Sed ut perspiciatis unde omnis istes natus error sit volup tatem accusani tium doloremque laudantium.</p>
							<p class="duration mt-2"><span class="fa fa-clock-o mr-2"></span><strong>Duration</strong> : 2 Days, 3hrs</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-6 mt-4">
				<div class="grids-tem-one">
					<div class="row">
						<div class="col-sm-5 grids-img-left">
							<img src={china} alt="" class="img-fluid"/>
						</div>
						<div class="col-sm-7 right-cont">
							<h4 class="mb-2 mt-sm-0 mt-2 let tm-clr">China</h4>
							<ul class="d-flex">
								<li><span class="fa fa-star"></span></li>
								<li><span class="fa fa-star"></span></li>
								<li><span class="fa fa-star"></span></li>
								<li><span class="fa fa-star"></span></li>
								<li><span class="fa fa-star"></span></li>
							</ul>
							<p class="mt-3">Sed ut perspiciatis unde omnis istes natus error sit volup tatem accusani tium doloremque laudantium.</p>
							<p class="duration mt-2"><span class="fa fa-clock-o mr-2"></span><strong>Duration</strong> : 2 Days, 3hrs</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


<Footer/>




    </div>
   
    
  );
}

export default Header;
