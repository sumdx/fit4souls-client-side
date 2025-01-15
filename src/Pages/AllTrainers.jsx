import React from "react";
import useAllTrainers from "../Hooks/useAllTrainers";
import TrainersCard from "../Components/TrainersCard";

const AllTrainers = () => {
  const [allTrainersData] = useAllTrainers();
  console.log(allTrainersData);

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 class="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          All Trainers Page
        </h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          We have experienced trainers to make your training journey smooth.
        </p>
        <a
          href="#"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Learn more
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
      <div className="container mx-auto mt-14 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            allTrainersData.map(trainer =>{
                return <TrainersCard trainer={trainer}></TrainersCard>
            })
        }
      </div>
    </div>
  );
};

export default AllTrainers;
