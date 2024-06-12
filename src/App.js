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
import PaymentForm from './Paiement/Payment.jsx';
import Hotel from './Hotel/Hotel.jsx';
import home from './Home/Home.jsx';
import Home from './Home/Home.jsx';
// Chargez votre clé publique Stripe
const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const App = () => (
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
);

export default App;
