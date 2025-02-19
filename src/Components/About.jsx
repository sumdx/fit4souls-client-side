import React from "react";
import AboutIMG from "./../assets/Images/pexels-pavel-danilyuk-6339494.jpg"
const About = () => {
  return (
    <div className="container mx-auto lg:flex mt-4 bg-white p-10 rounded-lg dark:bg-gray-800 dark:border-gray-700 ">
      <div className=" lg:w-1/2 flex flex-col  items-left justify-center">
      <p class="text-left w-fit rounded-xl  bg-blue-100 text-blue-800 text-xl mb-4 font-medium me-2 px-6 py-2  dark:bg-blue-900 dark:text-blue-300">About</p>
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Empowering You to{" "}
          <span class="text-blue-600 dark:text-blue-500">Reach New Heights</span>{" "}
          in Fitness!
        </h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          we are dedicated to helping you unlock your full potential. Our expert trainers and state-of-the-art facilities are here to support you on your fitness journey. Whether you're a beginner or an experienced athlete, we provide personalized training programs to help you achieve your goals and transform your life. Join us today and become part of a community that pushes you to be your best!
        </p>
      </div>
      <div className="relative">
        <img className=" h-full w-full object-cover p-4" src={AboutIMG} alt="" />
      </div>
    </div>
  );
};

export default About;
