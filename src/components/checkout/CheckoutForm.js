import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useMutation } from "@tanstack/react-query";
import { makePayment } from '../../utils/APIs/Order_APIs';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = (props) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const order_id = props.data;
  console.log("order id", order_id)

  const payNow = useMutation({
    mutationFn: ()=> makePayment(order_id),
    onSuccess: async (response)=>{
      console.log("succ RES", response)
      const client_secret = response.client_secret;
      const { error, paymentIntent } = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      if (error) {
        alert("Transaction Failed!");
      } else if (paymentIntent.status === 'succeeded') {
        alert('Payment succeeded!');
      }
      
      alert("Payment succeeded!")
      navigate('/shop')
    },
    onError: (error, response)=>{
      alert("Payment failed!", error)
    }
  })

  return (
    <div  className='p-4 flex flex-col gap-6'>
      <CardElement />
      <button type="submit" disabled={!stripe} className='bg-black text-white py-2 px-4 rounded hover:bg-purple-700' onClick={()=>payNow.mutate()}>
        Pay
      </button>
    </div>
  );
};

export default CheckoutForm;
