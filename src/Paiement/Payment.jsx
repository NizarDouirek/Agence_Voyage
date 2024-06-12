import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import JotformScript from './jatform.jsx';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const Payment = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
    } else {
      // Envoyez le paiementMethod.id au backend pour le traitement
      setSuccess(true);
    }
  };

  return (
    <div >
 
      <JotformScript />
      
    </div>
  );
};

export default Payment;