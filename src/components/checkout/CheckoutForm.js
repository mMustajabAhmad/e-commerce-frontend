import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const response = await fetch('http://localhost:3001/payments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 1000 }), 
    });

    const { client_secret } = await response.json();

    const { error, paymentIntent } = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Customer Name', 
        },
      },
    });

    if (error) {
      alert("Transaction Failed!");
    } else if (paymentIntent.status === 'succeeded') {
      alert('Payment succeeded!');
    }
  };


  return (
    <form onSubmit={handleSubmit} className='p-4 flex flex-col gap-6'>
      <CardElement />
      <button type="submit" disabled={!stripe} className='bg-black text-white py-2 px-4 rounded hover:bg-purple-700'>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
