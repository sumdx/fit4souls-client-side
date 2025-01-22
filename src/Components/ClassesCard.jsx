import React from "react";
import { NavLink } from "react-router-dom";

const ClassesCard = ({ classData }) => {
  return (
    <div>
      <div class="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a >
          <img class="rounded-t-lg" src={classData.photoURL} alt="" />
        </a>
        <div class="p-5">
          <a >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {classData.className}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {classData.classDetails} years of experience.
          </p>
          {classData.trainers?.map((data, index) => {
           
            if (index < 5) {
              return (
                <NavLink  to={`/trainers/${data.trainerId}`} className="relative group inline-block">
                {/* Image */}
                <img
                  className="w-10 h-10 rounded-full"
                  src={data.trainerPhotoUrl}
                  alt="Rounded avatar"
                />
          
                {/* Tooltip */}
                <div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex
                             items-center justify-center px-3 py-2 text-sm font-medium text-white 
                             bg-gray-800 rounded-lg shadow-lg dark:bg-gray-700"
                >
                  {data.trainerName}
                  
                </div>
              </NavLink>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
