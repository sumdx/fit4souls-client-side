import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from '../Components/CheckOutForm';
import { Helmet } from 'react-helmet-async';

const stripePayment = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
    const storedBookingData = JSON.parse(localStorage.getItem("bookingData"));
    console.log(storedBookingData)
    return (
        <div>
            <Helmet>
                            <title>Fit4Soul | Payment</title>
                        </Helmet>
            <div>
        <div className="flex flex-col justify-center items-center text-center mb-16">
          <h1 class="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Checkout
          </h1>
          <div>
            <h1 className='text-2xl font-bold mt-6'>Amount : USD  ${storedBookingData?.pricingInfo?.packagePrice}</h1>
          </div>
        </div>
      </div>
            
            <div className='max-w-96 mx-auto text-center'>
                <Elements stripe={stripePayment}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;