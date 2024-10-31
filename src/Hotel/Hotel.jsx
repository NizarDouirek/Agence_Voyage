import React, { useState } from 'react';
import './hotel.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Components/Navbar";

import Swal from 'sweetalert2'
const Hotel = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    arrivalDate: '',
    arrivalTime: '',
    departureDate: '',
    departureTime: '',
    numberOfAdults: '',
    numberOfKids: '',
    numberOfNights: '',
    paymentMethod: '',
    specialRequest: '',
  });
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setData({
        ...data,
        [name]: value,
    });
    console.log(name, value);
};

  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  const [nights, setNights] = useState({ mountain: 1, ocean: 1, city: 1 });
  const [totalCost, setTotalCost] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleRoomSelection = (e) => {
    setSelectedRoom(e.target.value);
  };

  const handleNightsChange = (e, roomType) => {
    const updatedNights = { ...nights, [roomType]: parseInt(e.target.value, 10) };
    setNights(updatedNights);
    calculateTotalCost(updatedNights);
  };

  const calculateTotalCost = (updatedNights) => {
    const prices = { mountain: 100, ocean: 120, city: 140 };
    const cost = Object.keys(updatedNights).reduce(
      (sum, type) => sum + updatedNights[type] * prices[type],
      0
    );
    setTotalCost(cost);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/hotels", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const dataRec = await response.json();
    console.log(dataRec);

    e.target.reset();
    Swal.fire({
      title: "Good job!",
      text: "Reservation submitted successfully!",
      icon: "success"
    });
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <h2>Réservation de l'hotel</h2>
      <p>Please complete the form below.</p>
      <p>Your registration will be verified prior to your arrival.</p>
      <div>
        <label>Full Name</label>
        <input 
          type="text" 
          onBlur={handleBlur}
          name="firstName" 
          placeholder="First Name" 
          value={formData.firstName} 
          
        />
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          value={formData.lastName} 
          onBlur={handleBlur}
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input 
          type="text" 
          name="phoneNumber" 
          placeholder="Area Code - Phone Number" 
          value={formData.phoneNumber} 
          onBlur={handleBlur}
        />
      </div>
      <div>
        <label>E-mail</label>
        <input 
          type="email" 
          name="email" 
          placeholder="ex: myname@example.com" 
          value={formData.email} 
          onBlur={handleBlur}
        />
      </div>
      <div>
        <label>Arrival - Date/Time</label>
        <input 
          type="date" 
          name="arrivalDate" 
          value={formData.arrivalDate} 
          onBlur={handleBlur}
        />
        <input 
          type="time" 
          name="arrivalTime" 
          value={formData.arrivalTime} 
          onBlur={handleBlur}
        />
      </div>
      <div>
        <label>Departure - Date/Time</label>
        <input 
          type="date" 
          name="departureDate" 
          value={formData.departureDate} 
          onBlur={handleBlur}
        />
        <input 
          type="time" 
          name="departureTime" 
          value={formData.departureTime} 
          onBlur={handleBlur}
        />
      </div>
      <h2>Number of Adults</h2>
      <input 
        type="number" 
        name="numberOfAdults" 
        placeholder="ex: 23" 
        value={formData.numberOfAdults} 
        onBlur={handleBlur}
      />
      <h2>Number of Kids (If there are any)</h2>
      <input 
        type="number" 
        name="numberOfKids" 
        placeholder="ex: 23" 
        value={formData.numberOfKids} 
        onBlur={handleBlur}
      />
      <h2>Number of Nights at Hotel</h2>
      <input 
        type="number" 
        name="numberOfNights" 
        placeholder="ex: 23" 
        value={formData.numberOfNights} 
        onBlur={handleBlur}
      />
      <h2>Payment Method</h2>
      <div>
        <input 
          type="radio" 
          name="paymentMethod" 
          value="Check" 
          checked={paymentMethod === 'Check'} 
          onChange={handlePaymentMethodChange} 
        /> Check
        <input 
          type="radio" 
          name="paymentMethod" 
          value="Paypal" 
          checked={paymentMethod === 'Paypal'} 
          onChange={handlePaymentMethodChange} 
        /> Paypal
      </div>
      
      {paymentMethod === 'Paypal' && (
        <div>
          <h3>Select Room</h3>
          <div>
            <input 
              type="radio" 
              name="roomType" 
              value="mountain" 
              onChange={handleRoomSelection} 
            /> $100/Night - Mountain View
            <input 
              type="number" 
              min="1" 
              value={nights.mountain} 
              onChange={(e) => handleNightsChange(e, 'mountain')} 
            />
          </div>
          <div>
            <input 
              type="radio" 
              name="roomType" 
              value="ocean" 
              onChange={handleRoomSelection} 
            /> $120/Night - Ocean View
            <input 
              type="number" 
              min="1" 
              value={nights.ocean} 
              onChange={(e) => handleNightsChange(e, 'ocean')} 
            />
          </div>
          <div>
            <input 
              type="radio" 
              name="roomType" 
              value="city" 
              onChange={handleRoomSelection} 
            /> $140/Night - City View
            <input 
              type="number" 
              min="1" 
              value={nights.city} 
              onChange={(e) => handleNightsChange(e, 'city')} 
            />
          </div>
          <h3>Total: ${totalCost.toFixed(2)}</h3>
        </div>
      )}
      
      <h2>Any Special request?</h2>
      <textarea 
        name="specialRequest" 
        value={formData.specialRequest} 
        onChange={handleChange} 
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Hotel;