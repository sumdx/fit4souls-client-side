import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const stripe = useStripe();
  const [clientSecret, setClientSecret] = useState("");
  const elements = useElements();
  const [error, setError] = useState();
  const axiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();


  const [bookingInfo, setBookingInfo] = useState(() => {
    const storedBookingData = localStorage.getItem("bookingData");
    return storedBookingData
      ? JSON.parse(storedBookingData)
      : { pricingInfo: { packagePrice: 0 } }; // Fallback default value
  });

  if(!bookingInfo){
    navigate("/");
  }

  console.log(bookingInfo);

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", {
        price: bookingInfo?.pricingInfo.packagePrice,
      })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, bookingInfo.pricingInfo.packagePrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Pay!"
      }).then(async (result) => {
        if (result.isConfirmed) {
            const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(clientSecret,{
                payment_method : {
                    card : card,
                    billing_details : {
                        email : user?.email || "Annonymous",
                        name : user?.displayName || "Annonymous"
                    }
                }
            })
            if(confirmError){
                console.log(confirmError);
            }else{
                console.log("Payment Intent" , paymentIntent)
                if(paymentIntent.status === 'succeeded'){
                    Swal.fire({
                        title: "Payment Successfull!",
                        text: `Your trasaction id is ${paymentIntent.id} `,
                        icon: "success"
                      });
                      const paymentInfo = {
                        trxId : paymentIntent.id,

                      }
                      const finalBookingData = {...bookingInfo,paymentInfo};
                      

                      axiosSecure.post("/booking-confirm",finalBookingData)
                      .then(res=>{
                        localStorage.removeItem("bookingData");
                        navigate("/dashboard/booked-trainer");
                      })
                      .catch(err=>{
                        
                      });

                      
                }
            }
        }
      });

    

  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
        className="border p-4 rounded-xl mb-6"
      />
      <button
        type="submit"
        class="px-10 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  py-2.5 text-center me-2 mb-2"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-500">{error}</p>
    </form>
  );
};

export default CheckOutForm;
