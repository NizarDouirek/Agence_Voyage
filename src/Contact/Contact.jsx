import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Swal from 'sweetalert2'
import "./styleContact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons'; // Importation des icônes nécessaires
function Contact() {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/api/contacts", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const dataRec = await response.json();
            e.target.reset();

            Swal.fire({
                title: "Good job!",
                text: "Message sent successfully!",
                icon: "success"
            });
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                title: "Error!",
                text: "There was an error sending your message. Please try again.",
                icon: "error"
            });
        }
    };
    return(

    <div>
        <Navbar/>

        <section class="contact py-5">
	<div class="container py-lg-5 py-sm-3">
	

			<h2 class="heading text-capitalize text-center mb-sm-5 mb-4"> Get In Touch with us</h2>
			<ul class="list-unstyled row text-center mt-lg-5 mt-4 px-lg-5">
                <li class="col-md-4 col-sm-6 adress-w3pvt-info">
                    <div class=" adress-icon">
                        <span class="fa fa-map-marker"><FontAwesomeIcon icon={faMapMarkerAlt} /> </span>
                    </div>

                    <h6>Location</h6>
                    <p>Luxury Voyage
                        <br/>Casablanca, Maarif, Morocco. </p>
                </li>

                <li class="col-md-4 col-sm-6 adress-w3pvt-info mt-sm-0 mt-4">
                    <div class="adress-icon">
                        <span class="fa fa-envelope-open-o"><FontAwesomeIcon icon={faEnvelope} /></span>
                    </div>
                    <h6>Phone & Email</h6>
                    <p>+(212) 123 456 7890</p>
                    <a href="/cdn-cgi/l/email-protection#325b5c545d72574a535f425e571c515d5f" class="mail"><span class="__cf_email__" data-cfemail="f59c9b939ab5908d949885999098949c99db969a98">luxuryvoyage@gmail.com</span></a>
                </li>
                <li class="col-md-4 col-sm-6 adress-w3pvt-info mt-md-0 mt-4">

                    <div class="adress-icon">
                        <span class="fa fa-comments-o"><FontAwesomeIcon icon={faComment} /></span>
                    </div>

                    <h6>Stay In Touch</h6>
					<ul class="social_section_1info mt-2">
					<li class="mb-2 facebook"><a href="#"><span class="fa fa-facebook"><FontAwesomeIcon icon={faFacebook} /></span></a></li>
                        <li class="mb-2 twitter"><a href="#"><span class="fa fa-twitter">  <FontAwesomeIcon icon={faTwitter} /></span></a></li>
                        <li class="google"><a href="#"><span class="fa fa-google-plus"><FontAwesomeIcon icon={faGoogle} /></span></a></li>
                        <li class="linkedin"><a href="#"><span class="fa fa-linkedin"><FontAwesomeIcon icon={faLinkedin} /></span></a></li>
					</ul>
                </li>
            </ul>
			
			<div class="contact-grids mt-5">
				<div class="row">
					<div class="col-lg-6 col-md-6 contact-left-form">
						<form id="form" onSubmit={handleSubmit}  method="post">
							<div class=" form-group contact-forms">
							  <input name="name" onBlur={handleBlur} type="text" class="form-control" placeholder="Name" required="" style={{marginBottom:"15px"}}/>
							</div>
							<div class="form-group contact-forms">
							  <input name="email" onBlur={handleBlur} type="email" class="form-control" placeholder="Email" required=""style={{marginBottom:"15px"}}/>
							</div>
							<div class="form-group contact-forms">
							  <input name="phone" onBlur={handleBlur} type="text" class="form-control" placeholder="Phone" required=""style={{marginBottom:"15px"}}/> 
							</div>
							<div class="form-group contact-forms">
							  <textarea name="message" onBlur={handleBlur} class="form-control" placeholder="Message" rows="3" required=""style={{marginBottom:"15px"}}></textarea>
							</div>
							<button class="btn btn-block sent-butnn" style={{width:"100%"}}>Send</button>
						</form>
					</div>
					<div class="col-lg-6 col-md-6 contact-right pl-lg-5">
						<h4>Do you have any questions about us? write to us.</h4>
						<p class="mt-md-4 mt-2">Do you have any questions about us? Feel free to reach out to us. We're here to assist you in any way we can. Whether you're curious about our services, seeking advice, or have inquiries about your upcoming trip, don't hesitate to get in touch. Our dedicated team is committed to providing you with the information and support you need for a smooth and enjoyable experience. Contact us today, and let's embark on this journey together!</p>
						<h5 class="mt-lg-5 mt-3">Office Hours</h5>
						<p class="mt-3">Monday to Friday : 09 am to 06 pm</p>
						<p>Saturday and Sunay : 10 am to 04 pm</p>
					</div>
				</div>
			</div>
	</div>


    <div class="map p-2">
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26824.72217844098!2d-7.637413233303506!3d33.57311025936213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd988a005493%3A0xc106c5e115ce2a06!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1620925515248!5m2!1sen!2sus"></iframe>
</div>
</section>
        <Footer/>
    </div>

    )

}
export default Contact;