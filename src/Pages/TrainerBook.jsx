import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useSlotDetailsById from "../Hooks/useSlotDetailsById";
import useTrainerDetailsByEmail from "../Hooks/useTrainerDetailsByEmail";
import AuthProvider, { AuthContext } from "../Providers/AuthProvider";

const TrainerBook = () => {
  const { id } = useParams();
  const { bookingData, setBookingData, user } = useContext(AuthContext);
  const [indSlotData, isLoading] = useSlotDetailsById(id);
  const [trainerByEmail, refetch] = useTrainerDetailsByEmail(
    indSlotData[0]?.trainerEmail
  );
  const navigate = useNavigate();
  
  console.log("slotDFtaa",indSlotData)
  const inBookingData = {
    trainerName: trainerByEmail.name,
    trainerPhotoUrl: trainerByEmail.photoUrl,
    slotName: indSlotData[0]?.slotName,
    classId : indSlotData[0]?.classId,
    slotId : indSlotData[0]?._id,
    user: {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    },
  };

  const basicHandle = () =>{
    const pricingInfo = {
        packageName : "Basic Membership",
        packagePrice : 10
    }
    const fullBookingData = { ...inBookingData, pricingInfo };
    setBookingData(fullBookingData)
    localStorage.setItem("bookingData", JSON.stringify(fullBookingData));
    console.log(bookingData);
    navigate("/payment");
    
  }

  return (
    <div className="text-center">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 class="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Booking Details
        </h1>
      </div>
      <div>
        <div className="w-fit mt-6 container mx-auto border">
          <div class="w-full max-w-md bg-blue-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow rounded-lg p-5">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              All details
            </h2>
            <address class="relative bg-gray-50 dark:bg-gray-700 dark:border-gray-600 p-4 rounded-lg border border-gray-200 not-italic grid grid-cols-2">
              <div class="text-left space-y-2 text-gray-500 dark:text-gray-400 leading-loose hidden sm:block">
                Trainer Name <br />
                Slot <br />
                Class
              </div>
              <div
                id="contact-details"
                class=" text-left space-y-2 text-gray-900 dark:text-white font-medium leading-loose"
              >
                {trainerByEmail?.name} <br />
                {indSlotData[0]?.slotName} <br />
                {indSlotData[0]?.className}
              </div>
            </address>
          </div>
        </div>
        <h1 class="mb-4 mt-10 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl dark:text-white">
          Choose Package
        </h1>
        <div className="flex justify-center items-center gap-6 container mx-auto">
          {/* First */}
          <div>
            <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Basic Membership
              </h5>
              <div class="flex items-baseline text-gray-900 dark:text-white">
                <span class="text-3xl font-semibold">$</span>
                <span class="text-5xl font-extrabold tracking-tight">10</span>
                <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <ul role="list" class="space-y-5 my-7 text-left">
                <li class="flex items-center">
                  <svg
                    class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Access to gym facilities during regular operating hours.
                  </span>
                </li>
                <li class="flex ">
                  <svg
                    class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Use of cardio and strength training equipment.
                  </span>
                </li>
                <li class="flex">
                  <svg
                    class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Access to locker rooms and showers.
                  </span>
                </li>
              </ul>
              <button
               onClick={basicHandle}
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Choose plan
              </button>
            </div>
          </div>
          {/* second */}
          <div>
            <div class="w-full max-w-sm p-4 bg-blue-50 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Premium Membership
              </h5>
              <div class="flex my-8 items-baseline text-gray-900 dark:text-white">
                <span class="text-3xl font-semibold">$</span>
                <span class="text-5xl font-extrabold tracking-tight">
                  99. <span className="text-2xl">99 </span>{" "}
                </span>
                <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <ul role="list" class="space-y-5 my-7 text-left">
                <li class="flex items-center">
                  <svg
                    class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    All benefits of the standard membership.
                  </span>
                </li>
                <li class="flex ">
                  <svg
                    class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Access to personal training sessions with certified
                    trainers.
                  </span>
                </li>
                <li class="flex">
                  <svg
                    class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Discounts on additional services such as massage therapy or
                    nutrition counseling.
                  </span>
                </li>
              </ul>
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Choose plan
              </button>
            </div>
          </div>
          {/* third */}
          <div>
            <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                Standard Membership
              </h5>
              <div class="flex items-baseline text-gray-900 dark:text-white">
                <span class="text-3xl font-semibold">$</span>
                <span class="text-5xl font-extrabold tracking-tight">49</span>
                <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <ul role="list" class="space-y-5 my-7 text-left">
                <li class="flex items-center">
                  <svg
                    class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    All benefits of the basic membership.
                  </span>
                </li>
                <li class="flex ">
                  <svg
                    class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Access to group fitness classes such as yoga, spinning, and
                    Zumba.
                  </span>
                </li>
                <li class="flex">
                  <svg
                    class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Use of additional amenities like a sauna or steam room.
                  </span>
                </li>
              </ul>
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Choose plan
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default TrainerBook;
