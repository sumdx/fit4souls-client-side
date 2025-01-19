import React, { useContext, useState } from "react";
import { BiDownvote, BiSolidDownvote, BiSolidUpvote, BiUpvote } from "react-icons/bi";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const CommunityPostCard = ({ communityPostData, refetch }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDownVote, setDownVote] = useState(false);
    const {user} = useContext(AuthContext)
  console.log(communityPostData);


  const handleUpVote = ()=>{

    if(user){
        
    }else{
        <Navigate to={"/login"}></Navigate>
    }
  }
  const handleDownVote = ()=>{
    if(user){
        
    }else{
        <Navigate to={"/login"}></Navigate>
    }

  }

  return (
    <div className="container mx-auto">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
        <div className="h-64 mb-4 overflow-hidden">
          <img
            class="rounded-t-lg"
            src={communityPostData.photoURL}
            alt=""
          />
        </div>
        <span class="ml-5 bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">{communityPostData.userRole}</span>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {communityPostData.postName}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {communityPostData.postDetails}
          </p>
          <div className="flex text-xl gap-4 border py-2 px-1 rounded-xl">
            {
                isLiked?<BiUpvote onClick={handleUpVote} />:<BiSolidUpvote onClick={handleUpVote}/>

            }
            {
                isDownVote? <BiDownvote onClick={handleDownVote} /> : <BiSolidDownvote onClick={handleDownVote}/>
            }
          
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPostCard;
