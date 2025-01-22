import React, { useEffect } from "react";
import useAllSlotsByUserEmail from "../../../Hooks/useAllSlotsByUserEmail";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageSlot = () => {
  const [trainersSlotData,refetch] = useAllSlotsByUserEmail();


  const axiosSecure = useAxiosSecure();


  const handleDeleteSlot = (id, trainerEmail, day, duration,classId) => {
    const slotData = {
        id,
        trainerEmail,
        day,
        duration,
        classId
    }
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/slot`, {data :slotData})
          .then((res) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          })
          .catch((err) => {});
      }
    });
  };

  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center text-center mb-16">
          <h1 class="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Manage your Slot
          </h1>
          <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            We have experienced trainers to make your training journey smooth.
          </p>
        </div>
      </div>
      <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Slot Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Day
                </th>
                <th scope="col" class="px-6 py-3">
                  Duration
                </th>
                <th scope="col" class="px-6 py-3">
                    Booked By
                  
                </th>
                <th scope="col" class="px-6 py-3">
                Status
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {trainersSlotData?.map((slotData) => {
                return (
                  <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {slotData.slotName}
                    </th>
                    <td class="px-6 py-4">{slotData.day}</td>
                    <td class="px-6 py-4">{slotData.duration} hrs.</td>
                    <td class="px-6 py-4">
                      {slotData.bookedBy ? (
                        <div className="flex flex-col items-center">
                          {" "}
                          <p>{slotData.bookedBy.name}</p>{" "}
                          <p>{slotData.bookedBy.email}</p>
                        </div>
                      ) : (
                        <p>N/A</p>
                      )}
                    </td>
                    <td class="px-6 py-4">{slotData.status === "available" ? <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{slotData.status}</span> :<span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">{slotData.status} </span> }</td>
                    <td class="px-6 py-4">
                      <a
                        onClick={() => {
                          handleDeleteSlot(slotData._id, slotData.trainerEmail, slotData.day, slotData.duration, slotData.classId);
                        }}
                        class="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Delete Slot
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageSlot;
