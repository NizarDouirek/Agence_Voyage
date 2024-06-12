import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import about from "../About/about.jpeg";
import te1 from "../About/te1.jpg";
import te2 from "../About/te2.jpg";
import te3 from "../About/te3.jpg";
import "./styleAbout.css";
import { IonIcon } from '@ionic/react';
 // Importation du composant IonIcon
import { happyOutline, boatOutline, airplaneOutline, giftOutline } from 'ionicons/icons';


function About(){
    return(
    <div>
        <Navbar/>
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








<section class="choose" id="choose">
	<div class="overlay-all py-5">
		<div class="container py-lg-5 py-sm-4">
			<h2 class="heading text-capitalize text-center mb-lg-5 mb-4"> Why Choose Us</h2>
			<div class="edu-exp-grids">
				<div class="tab-main">
					<input id="tab1" type="radio" name="tabs" class="w3pvt-sm" checked/>
					<label for="tab1" >We Offer</label>
					<input id="tab2" type="radio" class="w3pvt-sm" name="tabs" />
					<label for="tab2"style={{marginLeft:"5px"}}>We provide</label>
					<section id="content1">
						<div class="row text-center">
							<div class="col-lg-4 col-md-6 inner-w3pvt-wrap">
								<div class="inner-sec-grid">
									<span class="fa fa-gift"><IonIcon icon={giftOutline} /></span>
									<h4 class="mt-md-4 mt-2">Winter Tours</h4>
									<p class="mt-3">Winter Tours: Dive into snowy realms, ski down powdery slopes, sled through frosty forests. Experience the magic of winter with us. Join now!</p>
								</div>
							</div>
							<div class="col-lg-4 col-md-6 inner-w3pvt-wrap">
								<div class="inner-sec-grid">
									<span class="fa fa-gift"><IonIcon icon={giftOutline} /></span>
									<h4 class="mt-md-4 mt-2">Accomodation</h4>
									<p class="mt-3">Accommodation: Comfortable stays, scenic views, unforgettable experiences. Relax and recharge in our handpicked accommodations. Book your dream getaway now!</p>
								</div>
							</div>
							<div class="col-lg-4 col-md-6 inner-w3pvt-wrap">
								<div class="inner-sec-grid">
									<span class="fa fa-gift"><IonIcon icon={giftOutline} /></span>
									<h4 class="mt-md-4 mt-2">Low Prices</h4>
									<p class="mt-3">Low Prices: Affordable adventures await. Explore without breaking the bank. Book your budget-friendly trip today!</p>
								</div>
							</div>
						</div>
					</section>
					<section id="content2">
						<div class="row text-center">
							<div class="col-lg-4 col-md-6 inner-w3pvt-wrap">
								<div class="inner-sec-grid">
									<span class="fa fa-gift"><IonIcon icon={giftOutline} /></span>
									<h4 class="mt-md-4 mt-2">Less Crowd</h4>
									<p class="mt-3">Less Crowd: Escape the crowds, find serenity. Discover hidden gems with us. Book now for a tranquil experience!</p>
								</div>
							</div>
							<div class="col-lg-4 col-md-6 inner-w3pvt-wrap">
								<div class="inner-sec-grid">
									<span class="fa fa-gift"><IonIcon icon={giftOutline} /></span>
									<h4 class="mt-md-4 mt-2">Exp Agents</h4>
									<p class="mt-3">Exp Agents: Expert guidance, personalized service. Let our experienced agents plan your perfect trip. Book now for a seamless adventure!</p>
								</div>
							</div>
							<div class="col-lg-4 inner-w3pvt-wrap">
								<div class="inner-sec-grid">
									<span class="fa fa-gift"><IonIcon icon={giftOutline} /></span>
									<h4 class="mt-md-4 mt-2">Easy Trip</h4>
									<p class="mt-3">Easy Trip: Hassle-free travel, seamless experience. Let us handle the details. Book now for a stress-free journey!</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
</section>





<section class="testimonials py-5" id="testi">
	<div class="container py-lg-5 py-md-3">
			<h3 class="heading text-capitalize text-center mb-lg-5 mb-4"> What Our Customers Say</h3>
		<div class="row pt-xl-4">
			<div class="col-md-4 test-grid px-lg-4">
				<div class="testi-info text-center">
					<p class="text-li">"Une expérience incroyable ! Notre voyage aux Maldives avec cette agence a dépassé toutes nos attentes. Des guides compétents, un hébergement de qualité et des souvenirs inoubliables. Je recommande vivement !"</p>
					<div class="test-img text-center mt-4">
						<img src={te1} class="img-fluid" alt="user-image"/>
					</div>
					<h3 class="mt-md-4 mt-3">Yousra</h3>
				</div>
			</div>
			<div class="col-md-4 test-grid px-lg-4 my-md-0 my-5">
				<div class="testi-info text-center">
					<p class="text-li">"Merci à l'équipe pour ce séjour mémorable. Leur attention aux détails et leur professionnalisme ont rendu notre voyage sans souci et très enrichissant. Nous avons hâte de réserver notre prochaine aventure avec eux !"</p>
					<div class="test-img text-center mt-4">
						<img src={te2} class="img-fluid" alt="user-image"/>
					</div>
					<h3 class="mt-md-4 mt-3">Hamza</h3>
				</div>
			</div>
			<div class="col-md-4 test-grid px-lg-4">
				<div class="testi-info text-center">
					<p class="text-li">"Des vacances parfaites ! Cette agence nous a offert une expérience de voyage exceptionnelle. Des conseils avisés sur les destinations, un service clientèle réactif et des activités passionnantes. Nous sommes ravis et nous reviendrons certainement."</p>
					<div class="test-img text-center mt-4">
						<img src={te3} class="img-fluid" alt="user-image"/>
					</div>
					<h3 class="mt-md-4 mt-3">Sarah</h3>
				</div>
			</div>
		</div>
	</div>
</section>

<Footer/>
    </div>

    )

}
export default About;