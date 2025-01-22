import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useTrainerDetails from "../Hooks/useTrainerDetails";
import useAllSlotsByEmail from "../Hooks/useAllSlotsByEmail";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Loading from "../Components/Loading";

const TrainerDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const [trainer, isLoading, isFetching] = useTrainerDetails({ id });
  const [slotData, setSlotData] = useState();
  const [trainerSlotByEmail] = useAllSlotsByEmail(trainer?.email);


  
  useEffect(() => {
    if (trainer?.email) {
      
      axiosPublic
        .get(`/slots/${trainer.email}`)
        .then((res) => {
          setSlotData(res.data);
        })
        .catch((err) => {
          console.error("Error fetching slot data", err);
        });
    }
  }, [trainer?.email, axiosPublic]); 

  if (isLoading) {
    return <Loading></Loading>;
  }


  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
          <a
            href="#"
            class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
          >
            Trainer Details
          </a>
          <div className="w-full my-6 rounded-xl">
            <img class="h-56 w-56 mx-auto object-cover rounded-full "  src={trainer.photoUrl} alt="" />
          </div>
          <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
            {trainer.name}
          </h2>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
            {trainer.bio}
          </p>
          <p>Age : {trainer.age}</p>
        </div>
        {/* Slots */}
        <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
          <a
            href="#"
            class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
          >
            Schedule Details
          </a>
          <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
            Choose any slots from the availble slots of the trainer
          </h2>

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Slot Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Duration
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                
              {slotData?.length > 0 ? (
              slotData.map((slot) => {
                return (
                  <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {slot.slotName}
                  </th>
                  <td class="px-6 py-4">{slot.duration} hrs</td>
                  
                  <td class="px-6 py-4">
                      <NavLink
                        to ={`/trainer-book/${slot._id}`}
                      >
                        <h1  class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Book Now </h1>
                        
                      </NavLink>
                  </td>
                </tr>
                );
              })
            ) : (
              <h1>No available Slots</h1>
            )}
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            
          </div>
        </div>
      </div>
      <div className="mt-16 max-w-screen-xl mx-auto">
        <section class="rounded-xl bg-center bg-no-repeat bg-[url('https://i.ibb.co/ctJTKXp/pexels-victorfreitas-841130.jpg')] bg-gray-700 bg-blend-multiply">
          <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-24">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Start your career as a Trainer
            </h1>
            <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              Here at Fit4Soul we focus on system where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <NavLink to={"/trainers/apply"}>
                <p class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                  Join as Trainer
                </p>
              </NavLink>

              <a
                href="#"
                class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrainerDetails;
