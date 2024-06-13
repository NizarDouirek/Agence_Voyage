import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import banner1 from "../Book/banner1.jpg";
import credit from "../Book/credit.png";
import paypal from "../Book/paypal.png";
import "./styleBook.css";
import Swal from 'sweetalert2'

function Book() {
    const [showPaypalForm, setShowPaypalForm] = useState(false);
    const [data, setData] = useState({
        paymentMethod: "creditCard",
    });

    const handlePaymentMethodChange = (event) => {
        setShowPaypalForm(event.target.value === "paypal");
    };

    const handleBlur = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value,
        })
        console.log(data);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://127.0.0.1:8000/api/reservations", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            }
          });
          const dataRec = await response.json();
          console.log(dataRec);

          document.getElementById("form").reset();

          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
    }

    return (
        <div>
            <Navbar />
            <section className="contact py-5">
                <div className="container py-lg-5 py-sm-4">
                    <h2 className="heading text-capitalize text-center mb-lg-5 mb-4">Book Your Tour</h2>
                    <div className="contact-grids">
                        <div className="row">
                            <div className="col-lg-7 contact-left-form">
                                <form id="form" onSubmit={handleSubmit} className="row">
                                    <div className="col-sm-6 form-group contact-forms">
                                        <input name="name" onBlur={handleBlur} type="text" className="form-control" placeholder="Name" required="" style={{ marginBottom: "15px" }} />
                                    </div>
                                    <div className="col-sm-6 form-group contact-forms">
                                        <input name="email" onBlur={handleBlur} type="email" className="form-control" placeholder="Email" required="" style={{ marginBottom: "15px" }} />
                                    </div>
                                    <div className="col-sm-6 form-group contact-forms">
                                        <input name="phone" onBlur={handleBlur} type="text" className="form-control" placeholder="Phone" required="" style={{ marginBottom: "15px" }} />
                                    </div>
                                    <div className="col-sm-6 form-group contact-forms">
                                        <input name="date" onBlur={handleBlur} type="date" className="form-control" placeholder="Date" required="" style={{ marginBottom: "15px" }} />
                                    </div>
                                    <div className="col-sm-6 form-group contact-forms">
                                        <select name="adults" className="form-control" id="adults" onBlur={handleBlur} style={{ marginBottom: "15px" }}>
                                            <option value="">Adults</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5 or more">5 or more</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6 form-group contact-forms">
                                        <select name="kids" className="form-control" id="kids" onBlur={handleBlur} style={{ marginBottom: "15px" }}>
                                            <option value="">Kids</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5 or more">5 or more</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12 form-group contact-forms">
                                        <textarea name="message" onBlur={handleBlur} className="form-control" placeholder="Message" rows="3" required="" style={{ marginBottom: "15px" }}></textarea>
                                    </div>
                                    <h2>Payment</h2>
                                    {/* Payment Information Fields */}
                                    <div className="col-md-12 form-group contact-forms">
                                        <label htmlFor="paymentMethod">Payment Method</label>
                                        <div className="form-check form-check-inline">
                                            <input
                                                onChange={(e) => {
                                                    handleBlur(e);
                                                    handlePaymentMethodChange(e);
                                                }}
                                                className="form-check-input"
                                                type="radio"
                                                name="paymentMethod"
                                                id="creditCard"
                                                value="creditCard"
                                                defaultChecked
                                                style={{ width: "15px", height: "15px", marginRight: "10px" }}
                                            />
                                            <label className="form-check-label" htmlFor="creditCard" style={{ marginRight: "20px" }}>Credit Card</label>
                                            <img src={credit} alt="" className="img-fluid" style={{ width: "120px", height: "20px"}} />
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                onChange={(e) => {
                                                    handleBlur(e);
                                                    handlePaymentMethodChange(e);
                                                }}
                                                className="form-check-input"
                                                type="radio"
                                                name="paymentMethod"
                                                id="paypal"
                                                value="paypal"
                                                style={{ width: "15px", height: "15px", marginRight: "10px" }}
                                            />
                                            <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                            <img src={paypal} alt="" className="img-fluid" style={{ width: "120px", height: "20px"}} />
                                        </div>
                                    </div>

                                    {showPaypalForm ? (
                                        <div>
                                            {/* Paypal Form Fields */}
                                            <input name="type" type="hidden" value="paypal" />
                                            <div className="col-sm-6 form-group contact-forms">
                                                <input
                                                    name="paypalBuyerFirstName"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Prénom"
                                                    required=""
                                                    onBlur={handleBlur}
                                                    style={{ marginBottom: "15px" }}
                                                />
                                            </div>
                                            <div className="col-sm-6 form-group contact-forms">
                                                <input
                                                    name="paypalBuyerLastName"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Nom de l'acheteur"
                                                    required=""
                                                    onBlur={handleBlur}
                                                    style={{ marginBottom: "15px" }}
                                                />
                                            </div>
                                            <div className="col-md-12 form-group contact-forms">
                                                <input
                                                    name="paypalBuyerEmail"
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    required=""
                                                    onBlur={handleBlur}
                                                    style={{ marginBottom: "15px" }}
                                                />
                                            </div>
                                            <div className="col-md-12 form-group contact-forms">
                                                <input
                                                    name="paypalBuyerAddress"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Adresse"
                                                    required=""
                                                    onBlur={handleBlur}
                                                    style={{ marginBottom: "15px" }}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        
                                        <div>
                                            <input name="type" type="hidden" value="credit-card" />
                                            <div className="row">
                                                <div className="col-sm-6 form-group contact-forms">
                                                    <input name="creditFirstName" onBlur={handleBlur} type="text" className="form-control" placeholder="Prénom" required="" style={{ marginBottom: "15px" }} />
                                                </div>
                                                <div className="col-sm-6 form-group contact-forms">
                                                    <input name="creditLastName" onBlur={handleBlur} type="text" className="form-control" placeholder="Nom de famille" required="" style={{ marginBottom: "15px" }} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 form-group contact-forms">
                                                    <input name="creditCardNumber" onBlur={handleBlur} type="text" className="form-control" placeholder="Numéro de la carte de crédit" required="" style={{ marginBottom: "15px" }} />
                                                </div>
                                                <div className="col-sm-6 form-group contact-forms">
                                                    <input name="creditCardCVV" onBlur={handleBlur} type="text" className="form-control" placeholder="Code de sécurité (CVV)" required="" style={{ marginBottom: "15px" }} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 form-group contact-forms">
                                                    <input name="creditCardExpMonth" onBlur={handleBlur} type="text" className="form-control" placeholder="Mois d'expiration" required="" style={{ marginBottom: "15px" }} />
                                                </div>
                                                <div className="col-sm-6 form-group contact-forms">
                                                    <input name="creditCardExpYear" onBlur={handleBlur} type="text" className="form-control" placeholder="Expiration Year" required="" style={{ marginBottom: "15px" }} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 form-group contact-forms">
                                                    <input name="creditBillingAddress2" onBlur={handleBlur} type="text" className="form-control" placeholder="Adresse complémentaire" required="" style={{ marginBottom: "15px" }} />
                                                </div>
                                                <div className="col-sm-6 form-group contact-forms">
                                                    <input name="creditBillingDepartment" onBlur={handleBlur} type="text" className="form-control" placeholder="Département" required="" style={{ marginBottom: "15px" }} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 form-group contact-forms">
                                                    <input name="creditBillingPostalCode" onBlur={handleBlur} type="text" className="form-control" placeholder="Code postal" required="" style={{ marginBottom: "15px" }} />
                                                </div>
                                                <div className="col-sm-6 form-group contact-forms">
                                                    <select name="creditBillingCountry" className="form-control" id="country" required="" onBlur={handleBlur} style={{ marginBottom: "15px" }}>
                                                        <option value="">Pays</option>
                                                        <option value="France">France</option>
                                                        <option value="Germany">Germany</option>
                                                        <option value="Italy">Italy</option>
                                                        <option value="Spain">Spain</option>
                                                        <option value="United Kingdom">United Kingdom</option>
                                                        {/* Add more countries as needed */}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="col-md-12 booking-button">
                                        <button className="btn btn-block sent-butnn" style={{ width: "100%" }}>Book Now</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-5 contact-right pl-lg-5">
                                <div className="image-tour position-relative">
                                    <img src={banner1} alt="" className="img-fluid" style={{ width: "430px", height: "200px", marginLeft: "30px" }} />
                                    <p><span className="fa fa-tags"></span> <span>20$ - 15% off</span></p>
                                </div>
                                <h4 style={{ marginLeft: "30px" }}>Tour Description</h4>
                                <p className="mt-3" style={{ marginLeft: "30px" }}>Discover paradise on earth during an excursion to the Maldives.
                                    Immaculate white sandy beaches, crystal clear turquoise waters, and spectacular coral reefs await you.
                                    Embark on an unforgettable adventure of diving, relaxation, and discovery of the local culture.
                                    Join us for a heavenly experience in the Maldives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Book;
