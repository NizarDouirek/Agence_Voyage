
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./package.css";
import p1 from "../Package/p1.jpg";
import p2 from "../Package/p2.jpg";
import p3 from "../Package/p3.jpg";
import p4 from "../Package/p4.jpg";
import japan from './japan.jpg'; // Importation de l'image Japan
import singapore from './singapore.jpg'; // Importation de l'image Singapore
import malaysia from './malaysia.jpg'; // Importation de l'image Malaysia
import china from './china.jpg';
//import { IonIcon } from '@ionic/react';
 // Importation du composant IonIcon
//import { happyOutline, boatOutline, airplaneOutline, giftOutline } from 'ionicons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Package(){
    return(
    <div>
        <Navbar/>
    <section class="packages pt-5">
	<div class="container py-lg-4 py-sm-3">
		<h2 class="heading text-capitalize text-center"> Discover our tour packages</h2>
		<p class="text mt-2 mb-5 text-center">Explore our tour packages for unforgettable adventures. From ancient ruins to pristine beaches, we've got it all. Let us guide you to your dream destination!</p>
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
			
			<div class="col-lg-3 col-sm-6 mb-5"><Link to="/book" className="package-link">
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
				</div></Link>
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
    </div>

    )

}
export default Package;