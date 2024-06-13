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


                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="paymentMethod"
                                                id="creditCard"
                                                value="creditCard"
                                                defaultChecked
                                                onChange={handlePaymentMethodChange}
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
    id="creditCard"
    value="creditCard"
    defaultChecked
    style={{ width: "15px", height: "15px", marginRight: "10px" }}
/>
                                            <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                            <img src={paypal} alt="" className="img-fluid" style={{ width: "50px", height: "20px"}} />
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
                                                        <option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
<option value="Botswana">Botswana</option>
<option value="Brazil">Brazil</option>
<option value="Brunei">Brunei</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cabo Verde">Cabo Verde</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo">Congo</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Croatia">Croatia</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic">Czech Republic</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Dominican Republic</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Eswatini">Eswatini</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="Gabon">Gabon</option>
<option value="Gambia">Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Greece">Greece</option>
<option value="Grenada">Grenada</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-Bissau">Guinea-Bissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Honduras">Honduras</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran">Iran</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Laos">Laos</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon">Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libya">Libya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Marshall Islands">Marshall Islands</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mexico">Mexico</option>
<option value="Micronesia">Micronesia</option>
<option value="Moldova">Moldova</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montenegro">Montenegro</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar">Myanmar</option>
<option value="Namibia">Namibia</option>
<option value="Nauru">Nauru</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands">Netherlands</option>
<option value="New Zealand">New Zealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="North Korea">North Korea</option>
<option value="North Macedonia">North Macedonia</option>
<option value="Norway">Norway</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Palau">Palau</option>
<option value="Panama">Panama</option>
<option value="Papua New Guinea">Papua New Guinea</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines">Philippines</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Qatar">Qatar</option>
<option value="Romania">Romania</option>
<option value="Russia">Russia</option>
<option value="Rwanda">Rwanda</option>
<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
<option value="Saint Lucia">Saint Lucia</option>
<option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
<option value="Samoa">Samoa</option>
<option value="San Marino">San Marino</option>
<option value="Sao Tome and Principe">Sao Tome and Principe</option>
<option value="Saudi Arabia">Saudi Arabia</option>
<option value="Senegal">Senegal</option>
<option value="Serbia">Serbia</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra Leone">Sierra Leone</option>
<option value="Singapore">Singapore</option>
<option value="Slovakia">Slovakia</option>
<option value="Slovenia">Slovenia</option>
<option value="Solomon Islands">Solomon Islands</option>
<option value="Somalia">Somalia</option>
<option value="South Africa">South Africa</option>
<option value="South Korea">South Korea</option>
<option value="South Sudan">South Sudan</option>
<option value="Spain">Spain</option>
<option value="Sri Lanka">Sri Lanka</option>
<option value="Sudan">Sudan</option>
<option value="Suriname">Suriname</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Syria">Syria</option>
<option value="Taiwan">Taiwan</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Tanzania">Tanzania</option>
<option value="Thailand">Thailand</option>
<option value="Timor-Leste">Timor-Leste</option>
<option value="Togo">Togo</option>
<option value="Tonga">Tonga</option>
<option value="Trinidad and Tobago">Trinidad and Tobago</option>
<option value="Tunisia">Tunisia</option>
<option value="Turkey">Turkey</option>
<option value="Turkmenistan">Turkmenistan</option>
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
