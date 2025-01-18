import React from "react";

const ClassesCard = ({ classData }) => {
  return (
    <div>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg" src={classData.photoURL} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {classData.className}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {classData.classDetails} years of experience.
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
