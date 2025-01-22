import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useTrainerApplications from "../../../Hooks/useTrainerApplications";
import useAxiosAdmin from "../../../Hooks/useAxiosAdmin";
import Swal from "sweetalert2";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Helmet } from "react-helmet-async";

const ApplicationDetails = () => {
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const axiosAdmin = useAxiosAdmin();
  const navigate = useNavigate();

  const [applications] = useTrainerApplications();
  

  const data = applications.find((data) => parseInt(data._id) === parseInt(id));
  const handleAccept = () => {
    axiosAdmin
      .patch(`/trainers/${data._id}`, data)
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: "Trainers Added Successfully",
          icon: "success",
          confirmButtonText: "Okay",
        });
        navigate("/dashboard/trainers-applications");
        
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };
  const handleInputChange = (event) => {
    setMessage(event.target.value); // Update the message state
  };

  const handleReject = () => {
 
    axiosAdmin.patch(`/trainers/reject/${data._id}`,{message})
    .then((res)=>{
      Swal.fire({
        title: "Success!",
        text: "Trainers Added Successfully",
        icon: "success",
        confirmButtonText: "Okay",
      });
      <Navigate to={"/dashboard/trainers-applications"}></Navigate>;
    })
    .catch((err) => {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong",
        icon: "error",
        confirmButtonText: "Okay",
      });
    });
  };
  return (
    <div>
      <Helmet>
                      <title>Fit4Soul | Application Details</title>
                  </Helmet>
      <div>
        <div className="flex flex-col justify-center items-center text-center mb-16">
          <h1 class="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Application Details
          </h1>
          <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            We have experienced trainers to make your training journey smooth.
          </p>
        </div>
      </div>
      <div>
        <div class="w-full mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={data?.photoUrl}
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {data?.name}
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              {data?.bio}
            </span>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {data?.experience} Years of experience.
            </p>
            <div className="flex gap-12">
              <ul className="text-center">
                <li class="text-lg text-gray-700 dark:text-gray-400">
                  Available Days
                </li>
                {data?.avaialableSlots?.map((items) => {
                  return (
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      {items.value}
                    </p>
                  );
                })}
              </ul>
              <div>
                <ul className="text-center">
                  <li class="text-lg text-gray-700 dark:text-gray-400">
                    Skills
                  </li>
                  {data?.skills?.map((items) => {
                    return (
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        {items}
                      </p>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div class="flex mt-4 md:mt-6">
              <a
                onClick={handleAccept}
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Accept
              </a>
              <a
                onClick={() =>
                  document.getElementById(`my_modal_2`).showModal()
                }
                class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Reject
              </a>
            </div>

            
            <dialog id="my_modal_2" className="modal p-8">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Write a message</h3>
                <textarea  onChange={handleInputChange}></textarea>
              </div>
              <form method="dialog" className="modal-backdrop text-center space-x-4">
                <button onClick={handleReject} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reject</button>
                <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ApplicationDetails;

{
  /* <div>
<button
  data-modal-target="crud-modal"
  data-modal-toggle="crud-modal"
  class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  type="button"
>
  Toggle modal
</button>

<div
  id="crud-modal"
  tabindex="-1"
  aria-hidden="true"
  class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
>
  <div class="relative p-4 w-full max-w-md max-h-full">
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Create New Product
        </h3>
        <button
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-toggle="crud-modal"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>

      <form class="p-4 md:p-5">
        <div class="grid gap-4 mb-4 grid-cols-2">
          <div class="col-span-2">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type product name"
              required=""
            />
          </div>
          <div class="col-span-2 sm:col-span-1">
            <label
              for="price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="$2999"
              required=""
            />
          </div>
          <div class="col-span-2 sm:col-span-1">
            <label
              for="category"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select
              id="category"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option selected="">Select category</option>
              <option value="TV">TV/Monitors</option>
              <option value="PC">PC</option>
              <option value="GA">Gaming/Console</option>
              <option value="PH">Phones</option>
            </select>
          </div>
          <div class="col-span-2">
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Description
            </label>
            <textarea
              id="description"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write product description here"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="me-1 -ms-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Add new product
        </button>
      </form>
    </div>
  </div>
</div>
</div> */
}
