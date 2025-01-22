import React, { useState } from "react";
import useBookingInfo from "../../../Hooks/useBookingInfo";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Rate } from "antd";
import { Helmet } from "react-helmet-async";

const BookedTrainer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [reviewText, setReviewText] = useState("");
    const [bookingData] = useBookingInfo();
    const [stars, setStars] = useState();
    const axiosSecure = useAxiosSecure();
  
    const handleReview = (booking) => {
      setSelectedBooking(booking);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setReviewText("");
      setSelectedBooking(null);
    };

    const handleStar =(e) =>{
        setStars(e);
    }
  
  
    const handleSubmitReview = () => {
      // Add your submission logic here
        const reviewData = {
            user : bookingData[0].user,
            rate : stars,
            reviewText : reviewText
        }
        axiosSecure.post("/review",reviewData)
        .then(res=>{
            handleCloseModal();
        })
        .catch(err=>{
            
        })
      
    };
  
    return (
      <div>
        <Helmet>
                        <title>Fit4Soul | Booked Trainer</title>
                    </Helmet>
        <div>
        <div className="flex flex-col justify-center items-center text-center mb-16">
          <h1 class="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Your Booked Trainer
          </h1>
          <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            We have experienced trainers to make your training journey smooth.
          </p>
        </div>
      </div>
        {/* Booking Table */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="text-center">
                <th scope="col" className="px-6 py-3">Trainer</th>
                <th scope="col" className="px-6 py-3">Slot Name</th>
                <th scope="col" className="px-6 py-3">Package Name</th>
                <th scope="col" className="px-6 py-3">Trx Id</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {bookingData?.map((booking) => (
                <tr
                  key={booking.id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="flex justify-center items-center gap-4 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={booking.trainerPhotoUrl}
                      alt="Trainer Avatar"
                    />
                    {booking.trainerName}
                  </th>
                  <td className="px-6 py-4">{booking.slotName}</td>
                  <td className="px-6 py-4">{booking.pricingInfo.packageName}</td>
                  <td className="px-6 py-4">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                      {booking.paymentInfo.trxId}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      onClick={() => handleReview(booking)}
                      className="font-medium text-green-600 dark:text-green-500 hover:underline cursor-pointer"
                    >
                      Review
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Review Modal */}
        {isModalOpen && (
          <div
            id="review-modal"
            className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
          >
            <div className="relative p-6 w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Submit Your Review
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                    />
                  </svg>
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <Rate onChange={handleStar}/>
              <textarea
                className="w-full p-3 text-sm border rounded-lg dark:bg-gray-600 dark:text-white dark:border-gray-500"
                rows="4"
                placeholder="Write your review here..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              ></textarea>
              <button
                onClick={handleSubmitReview}
                className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Submit Review
              </button>
            </div>
          </div>
        )}
      </div>
    )
};

export default BookedTrainer;
