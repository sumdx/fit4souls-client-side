import React from "react";
import useAllTrainers from "../../../Hooks/useAllTrainers";
import Loading from "../../../Components/Loading";

const AllTrainerEdit = () => {
  const [allTrainersData, isAllTrainerFetching, allTrainerRefetch] =
    useAllTrainers();
  if (isAllTrainerFetching) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="mt-20">
        <div class="relative overflow-x-auto w-3/4 mx-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Email Adress
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allTrainersData.map((data) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        <img src={data.photoUrL} alt="" />
                      {data.name}
                    </th>
                    <td class="px-6 py-4 text-center">{data.email}</td>
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

export default AllTrainerEdit;
