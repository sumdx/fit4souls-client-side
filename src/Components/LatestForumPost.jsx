import React, { useState } from "react";
import useLatestForumPost from "../Hooks/useLatestForumPost";
import { NavLink } from "react-router-dom";

const LatestForumPost = () => {
  const [latesForum, isFetching] = useLatestForumPost();
  const [isTextExpand, setIsTextExpand] = useState(false);

  return (
    <div className="flex flex-col justify-center gap-6">
        <div>
        <h1 class="bg-blue-100 my-8 w-fit px-6 py-4 text-center mx-auto text-blue-800 text-2xl font-medium rounded dark:bg-blue-900 dark:text-blue-300">Latest Forum Post</h1>
        </div>
      <div className="container mx-auto gap-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {latesForum.map((communityPostData) => {
          return (
            <div className="">
              <div class="sm:max-w-sm lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="py-6 px-4 flex gap-4 items-center">
                  <img
                    class="w-10 h-10 rounded-full"
                    src={communityPostData.userPhoto}
                    alt="Rounded avatar"
                  />
                  <div>
                    <p>{communityPostData.userName}</p>
                    <span class=" bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                      {communityPostData.userRole}
                    </span>
                  </div>
                </div>
                <div className="h-64 mb-4 overflow-hidden">
                  <img
                    class="rounded-y-lg w-full h-full object-cover"
                    src={communityPostData.photoURL}
                    alt=""
                  />
                </div>

                <div class="p-5">
                  <a>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {communityPostData.postName}
                    </h5>
                  </a>

                  <div
                    className={`relative overflow-hidden ${
                      isTextExpand ? "h-auto" : "h-24"
                    }`}
                  >
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {communityPostData.postDetails}
                    </p>
                    {!isTextExpand && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white dark:from-gray-800 h-10"></div>
                    )}
                  </div>
                  {communityPostData.postDetails.length > 150 && (
                    <NavLink
                      to={"/community"}
                      className="text-blue-500 hover:underline"
                    >
                      {isTextExpand ? "See less" : "See more"}
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* <NavLink
        to={"/community"}
        className="w-fit items-center mx-auto text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
     
       >
        <h1>See more...</h1>
      </NavLink> */}
    </div>
  );
};

export default LatestForumPost;
