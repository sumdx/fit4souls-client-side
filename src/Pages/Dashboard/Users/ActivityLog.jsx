import React, { useContext } from "react";
import useUsersActivityLog from "../../../Hooks/useUsersActivityLog";
import { AuthContext } from "../../../Providers/AuthProvider";
import { NavLink } from "react-router-dom";

const ActivityLog = () => {
  const [activityLogData,rejectedData,pendingData] = useUsersActivityLog();

  

  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center text-center mb-16">
          <h1 class="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Activity Log
          </h1>
          <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            We have experienced trainers to make your training journey smooth.
          </p>
        </div>
      </div>
      <div>
        <div class="w-3/4 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>

                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {pendingData?.map((data, index) => {
                return (
                  <tr class="bg-green-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-200 dark:hover:bg-green-200">
                    <th
                      scope="row"
                      class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        class="w-10 h-10 rounded-full"
                        src={data.photoUrl}
                        alt="Jese image"
                      />
                      <div class="ps-3">
                        <div class="text-base font-semibold">{data.name}</div>
                        <div class="font-normal text-gray-500">
                          {data.email}
                        </div>
                      </div>
                    </th>
                    <td class="text-green-700 px-6 py-4">{data.status}</td>

                    <td class="px-6 py-4">
                      <button disabled className="">View Reason</button>
                    </td>
                  </tr>
                );
              })}
              {rejectedData?.map((data, index) => {
                return (
                  <tr class="bg-red-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-red-200 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        class="w-10 h-10 rounded-full"
                        src={data.photoUrl}
                        alt="Jese image"
                      />
                      <div class="ps-3">
                        <div class="text-base font-semibold">{data.name}</div>
                        <div class="font-normal text-gray-500">
                          {data.email}
                        </div>
                      </div>
                    </th>
                    <td class="text-red-700 px-6 py-4">{data.status}</td>

                    <td class="px-6 py-4">
                      <button onClick={() =>
                  document.getElementById(`${data._id}`).showModal()
                }>View Reason</button>
                    </td>
                    <dialog id={data._id} className="modal p-8">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Rejection Messagee from FitForSoul team</h3>
                        <p className="my-4 border p-4 rounded-xl">{data.rejectionMessage}</p>
                      </div>
                      <form
                        method="dialog"
                        className="modal-backdrop text-center space-x-4"
                      >
                        
                        <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Okay
                        </button>
                      </form>
                    </dialog>
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

export default ActivityLog;
