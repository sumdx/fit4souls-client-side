import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosAdmin from '../../../Hooks/useAxiosAdmin';
import Swal from 'sweetalert2';
import useGetUserData from '../../../Hooks/useGetUserData';
import { Helmet } from 'react-helmet-async';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddNewForum = () => {

    const [userData, isLoading] = useGetUserData();
    
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const axiosPublic = useAxiosPublic();
    //   const axiosAdmin = useAxiosAdmin();
    if(isLoading){
      return <p>Loading</p>
    }
    
      const onSubmit = async (data) => {
        const imageFile = { image: data.photoUrl[0] };
       
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        if (res.data.success) {
          const photoUrL = res.data.data.display_url;
          const postInfo = {
            postName: data.postName,
            photoURL: photoUrL,
            postDetails: data.postDetails,
            userName : userData?.name,
            userRole : userData?.role,
            userPhoto :userData?.photoURL,
            userEmail : userData?.email,
            upVote: [],
            downVote: [],
          };
        
          axiosPublic
            .post("/forum", postInfo)
            .then((res) => {
              if (res.data.insertedId) {
                Swal.fire({
                  title: "Success!",
                  text: "Forum Post Added Successfully",
                  icon: "success",
                  confirmButtonText: "Okay",
                });
                reset();
              }
            })
            .catch((err) => {
              Swal.fire({
                title: "Error!",
                text: "Something Wrong in saving post data in database",
                icon: "error",
                confirmButtonText: "Okay",
              });
            });
        }
      };
      return (
        <div>
          <Helmet>
                          <title>Fit4Soul | Post Forum </title>
                      </Helmet>
          <div>
            <div>
              <div className="flex flex-col justify-center items-center text-center mb-16">
                <h1 class="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  Add New Forum Post
                </h1>
                <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                  We have experienced trainers to make your training journey smooth.
                </p>
              </div>
            </div>
            <div className="w-3/4 mx-auto">
              <form onSubmit={handleSubmit(onSubmit)} action="">
                <div class="mb-6">
                  <label
                    for="default-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Post Title
                  </label>
                  <input
                    {...register("postName", { required: true })}
                    type="text"
                    id="default-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="large-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Post Details
                  </label>
                  <input
                    {...register("postDetails", { required: true })}
                    type="text"
                    id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="user_avatar"
                  >
                    Upload Post Cover Photo
                  </label>
                  <input
                    {...register("photoUrl", { required: true })}
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
                  />
                  {errors.photoUrl && (
                    <span className="text-red-700 ml-2 mt-8">
                      * Image is Required
                    </span>
                  )}
                  <div
                    class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="user_avatar_help"
                  >
                    A cover picture is useful to make your post appearance beautiful.
                  </div>
                </div>
                <div className="text-center mt-12">
                  <button
                    type="submit"
                    class=" px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
};

export default AddNewForum;