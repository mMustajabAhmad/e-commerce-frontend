import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import Header from '../shop/Header';
import Footer from '../shop/Footer';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
const StripeWrapper = () => (
  <>
    <Header/>
    <main className='min-h-screen'>
      <div className="h-20 flex justify-center bg-gray-200 ">
        <span className="font-medium text-3xl mt-4">PAY NOW</span>
      </div>
      <div className='flex flex-row w-full justify-center'>
        <div className='flex flex-col justify-center w-1/2'>
          <Elements stripe={stripePromise} options={{ theme: 'stripe' }}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </main>
    <Footer/>
  </>
);


export default StripeWrapper;