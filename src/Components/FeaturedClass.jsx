import React from "react";
import { NavLink } from "react-router-dom";
import useFeaturedClass from "../Hooks/useFeaturedClass";
import Loading from "./Loading";

const FeaturedClass = () => {
  const [featuredClassData, isFetching] = useFeaturedClass();
  if(isFetching){
    <Loading></Loading>
  }
  return (
    <div className="container mx-auto mt-20">
        <h1 class="bg-blue-100 my-8 w-fit px-6 py-4 text-center mx-auto text-blue-800 text-2xl font-medium rounded dark:bg-blue-900 dark:text-blue-300">Our Featured Classes</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featuredClassData?.map((data) => {
          return (
            <div>
              <div class="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a>
                  <img class="rounded-t-lg" src={data.photoURL} alt="" />
                </a>
                <div class="p-5">
                  <a>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {data.className}
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    {data.classDetails}
                  </p>
                  <p class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 w-fit dark:text-yellow-300">Booking Count {data?.bookedBy?.length}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center my-16 px-8  w-fit mx-auto">
        <NavLink to={"/classes"} type="button" class="text-white bg-blue-700 py-6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5  me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Browse All Classes</NavLink>
      </div>
    </div>
  );
};

export default FeaturedClass;
