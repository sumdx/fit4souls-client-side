import React from "react";
import ff8 from "./../assets/Images/ffs8.jpg";
import cover from "./../assets/Images/cover1.png";
import { Link, NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div className="flex relative ">
      <div className="flex container mx-auto flex-col md:flex-row">
        <div className="lg:w-1/2 flex flex-col  justify-center">
          {/* <p class="mb-6 text-left text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Lets Make your Health Happen</p> */}
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Your Health Matters
          </h1>
          <h1 class="mb-4 text-4xl font-medium leading-none tracking-tight text-gray-900 md:text-xl lg:text-4xl dark:text-white">
            Join the Gym That Cares
          </h1>
          <div>
            <Link
              class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              to={"/classes"}
            >
               Explore Classes
            </Link>
            
          </div>
        </div>
        <div className=" relative lg:w-1/2 ">
          <div className="absolute right-1.5 bottom-1/2">
            <button
              type="button"
              class="text-white filter blur-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Explore Classes
            </button>
            <button
              type="button"
              class="text-white filter blur-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              
            </button>
          </div>
          <img src={cover} alt="" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t  from-white dark:from-gray-800 h-32"></div>
      </div>
    </div>
  );
};

export default Banner;
