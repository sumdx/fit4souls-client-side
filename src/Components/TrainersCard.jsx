import React from "react";
import { NavLink } from "react-router-dom";

const TrainersCard = ({ trainer }) => {

  return (
    <div>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg" src={trainer.photoUrl} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {trainer.name}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {trainer.experience} years of experience.
          </p>
          <NavLink to={`/trainers/${trainer._id}`}>
          <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
           >
          View Details
          </p>
           
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TrainersCard;
