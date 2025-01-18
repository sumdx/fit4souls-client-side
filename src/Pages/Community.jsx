import React from "react";
import useAllComunityPost from "../Hooks/useAllComunityPost";
import CommunityPostCard from "../Components/CommunityPostCard";

const Community = () => {
  const [allForumsData, refetch] = useAllComunityPost();
  
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 class="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          All Community Post
        </h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          We have experienced trainers to make your training journey smooth.
        </p>
      </div>
      <div>
        {
            allForumsData.map((communityPostData) =>{
                return <CommunityPostCard communityPostData ={communityPostData} refetch={refetch}></CommunityPostCard>
            })
        }
      </div>
    </div>
  );
};

export default Community;
