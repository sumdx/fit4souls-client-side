import React from "react";
import useAllTrainers from "../Hooks/useAllTrainers";
import TrainersCard from "../Components/TrainersCard";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AllTrainers = () => {
  const [allTrainersData] = useAllTrainers();


  return (
    <div>
      <Helmet>
                      <title>Fit4Soul | All Trainers</title>
                  </Helmet>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 class="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          All Trainers Page
        </h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          You will find our profesionals Gym trainers here.
        </p>
   
      </div>
      <div className="container mx-auto mt-14 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allTrainersData.map((trainer) => {
          return <TrainersCard trainer={trainer}></TrainersCard>;
        })}
      </div>
      
    </div>
  );
};

export default AllTrainers;
