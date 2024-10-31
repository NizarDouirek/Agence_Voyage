import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import About from './About/About';
import Contact from './Contact/Contact';
import Book from './Book/Book';
import Package from './Package/Package';
import Reservation from './Reservation/Reservation';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {useEffect} from 'react';
import PaymentForm from './Paiement/Payment.jsx';
import Hotel from './Hotel/Hotel.jsx';
import home from './Home/Home.jsx';
import Home from './Home/Home.jsx';
// Chargez votre clé publique Stripe
const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/reservations");
      const data = await response.json();
      console.log(data);
    }

    fetchData();
  },[]);
  useEffect(() => {
    const fetchData = async () => {
      const bd = {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "+123456789",
        "date": "2024-06-15",
        "adults": 2,
        "kids": 1,
        "message": "We would like a window seat.",
      };
      
    }

    fetchData();
  },[]);

    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Book />} />
            <Route path="/package" element={<Package />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/header" element={<Header />} />
            <Route path="/hotel" element={<Hotel />} />
            
  
            {/* Ajoutez cette route pour le formulaire de paiement */}
            <Route path="/payment" element={<Elements stripe={stripePromise}><PaymentForm /></Elements>} />
          </Routes>
        </div>
      </Router>
    )

}
;

export default App;
