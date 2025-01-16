import React from "react";
import { NavLink, useParams } from "react-router-dom";
import useTrainerDetails from "../Hooks/useTrainerDetails";

const TrainerDetails = () => {
  const { id } = useParams();
  const [trainer] = useTrainerDetails({ id });
 
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
          <a
            href="#"
            class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
          >
            Trainer Details
          </a>
          <div className="w-full my-6 rounded-xl">
            <img src={trainer.photoUrl} alt="" />
          </div>
          <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
            {trainer.name}
          </h2>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
            {trainer.bio}
          </p>
          <a
            href="#"
            class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
          >
            Read more
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
          <a
            href="#"
            class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
          >
            Schedule Details
          </a>
          <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
            Best react libraries around the web
          </h2>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
            Static websites are now used to bootstrap lots of websites and are
            becoming the basis for a variety of tools that even influence both
            web designers and developers.
          </p>
          <a
            href="#"
            class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
          >
            Read more
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
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


              <NavLink to={"/trainers/apply"}><p class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">Join as Trainer</p></NavLink>
              
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
