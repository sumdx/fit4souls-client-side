import React, { useContext, useEffect, useState } from "react";
import {
  BiDownvote,
  BiSolidDownvote,
  BiSolidUpvote,
  BiUpvote,
} from "react-icons/bi";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const CommunityPostCard = ({ communityPostData, refetch }) => {
  const { user } = useContext(AuthContext);
  const [isUpvote, setIsUpVote] = useState(false);
  const [isDownVote, setIsDownVote] = useState(false);
  const [isTextExpand, setIsTextExpand] = useState(false);

  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    if (communityPostData?.upVote?.includes(user?.email)) {
      setIsUpVote(true);
    } else {
      setIsUpVote(false);
    }

    if (communityPostData?.downVote?.includes(user?.email)) {
      setIsDownVote(true);
    } else {
      setIsDownVote(false);
    }
  }, [communityPostData, user?.email]);

  const handleUpVote = () => {
    if (user) {
      axiosSecure
        .post(`/upVote/${communityPostData._id}/${user.email}`)
        .then((res) => {
          refetch();
        })
        .catch((err) => {});
    } else {
      Swal.fire({
        title: "Are you want login?",
        text: "You won't be able to upvote without login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
  const handleDownVote = () => {
    if (user) {
      axiosSecure
        .post(`/downVote/${communityPostData._id}/${user.email}`)
        .then((res) => {
          refetch();
        });
    } else {
      Swal.fire({
        title: "Are you want login?",
        text: "You won't be able to downvote without login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  const toggleExpand = () => {
    setIsTextExpand(!isTextExpand);
  };

  return (
    <div className="">
      <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
        <div className="h-96 mb-4 overflow-hidden">
          <img
            class="rounded-y-lg w-full h-full object-cover"
            src={communityPostData.photoURL}
            alt=""
          />
        </div>

        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {communityPostData.postName}
            </h5>
          </a>
          {/* <p class=" mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-scroll">
          {isTextExpand ? communityPostData.postDetails : `${communityPostData.postDetails.substring(0, 150)}`}
            {
              (communityPostData.postDetails.length >150) &&
              <p onClick={toggleExpand}>{isTextExpand ? "See less" : "...See more"}</p>
            }  
          </p> */}
          {/*  */}
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
            <button
              onClick={toggleExpand}
              className="text-blue-500 hover:underline"
            >
              {isTextExpand ? "See less" : "See more"}
            </button>
          )}

          <div className="flex text-xl gap-4 py-2 px-1 rounded-xl items-center">
            {isUpvote ? (
              <div className="flex gap-2 p-2 px-4 bg-gray-100 rounded-xl ">
                <BiSolidUpvote
                  className="pointer"
                  size={30}
                  onClick={handleUpVote}
                />
                <p>Upvote : {communityPostData.upVote.length}</p>
              </div>
            ) : (
              <div className="flex gap-2 p-2 px-4 bg-gray-100 rounded-xl ">
                <BiUpvote size={30} onClick={handleUpVote} />
                <p>Upvote : {communityPostData.upVote.length}</p>
              </div>
            )}
            {isDownVote ? (
              <BiSolidDownvote size={30} onClick={handleDownVote} />
            ) : (
              <BiDownvote size={30} onClick={handleDownVote} />
            )}
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default CommunityPostCard;
