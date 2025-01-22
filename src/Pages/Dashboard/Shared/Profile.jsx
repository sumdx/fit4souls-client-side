import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useGetUserData from "../../../Hooks/useGetUserData";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userData, isFetching, refetch] = useGetUserData();
  const [isEdit, setIsEdit] = useState(false);
  const axiosSecure = useAxiosSecure();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const updatedUI = {
      name,
      photoURL,
    };
    axiosSecure
      .patch(`/update-profile/${user?.email}`, updatedUI)
      .then((res) => {
        Swal.fire({
          title: "Successfull!",
          text: `Profile updated successfully`,
          icon: "success",
        });
        refetch();
        setIsEdit(false)
      });
    console.log(updatedUI);
  };

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center text-center mb-16">
          <h1 class="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Update Profile
          </h1>
          <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Update your profile as your need
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="rounded-full w-36 h-36"
            src={userData.photoURL || user.photoURL}
            alt="Profile Avatar"
          />
          <p className="mt-4">Last Login : {user.metadata.lastSignInTime}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
            
              defaultValue={userData.email}
              disabled
              className="mt-2 p-2 w-full border rounded-lg"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={userData.name}
              disabled={!isEdit}
              className="mt-2 p-2 w-full border rounded-lg"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              defaultValue={userData.photoURL}
              disabled={!isEdit}
              className="mt-2 p-2 w-full border rounded-lg"
            />
            <div className=" flex mt-6">
              {isEdit && (
                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Update Profile
                </button>
              )}
            </div>
          </div>
        </form>

        {isEdit ? (
          <button
            onClick={toggleEdit}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Cancel
          </button>
        ) : (
          <button
            type="button"
            onClick={toggleEdit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
