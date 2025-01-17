import React, { useContext } from "react";
import useUsersActivityLog from "../../../Hooks/useUsersActivityLog";
import { AuthContext } from "../../../Providers/AuthProvider";

const ActivityLog = () => {
const {user} = useContext(AuthContext);
const[activityLogData] = useUsersActivityLog(user.email);

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
                <th scope="col" class="p-4">
                  <div class="flex items-center">
                    <p>#</p>
                  </div>
                </th>
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
            {/* <tbody>
                          {applications.map((data,index) => {
                            return (
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="w-4 p-4">
                                  <div class="flex items-center">
                                    {index+1}
                                  </div>
                                </td>
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
                                <td class="px-6 py-4">{data.experience}</td>
                               
                                <td class="px-6 py-4">
            
                                    <NavLink to={`/dashboard/application-details/${data._id}`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> View Details</NavLink>
                                  
                                </td>
                              </tr>
                            );
                          })}
                        </tbody> */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
