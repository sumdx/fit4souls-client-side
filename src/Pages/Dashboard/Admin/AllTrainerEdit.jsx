import React from "react";
import useAllTrainers from "../../../Hooks/useAllTrainers";
import Loading from "../../../Components/Loading";
import { FaDeleteLeft } from "react-icons/fa6";
import { FiDelete } from "react-icons/fi";
import { BiTrash } from "react-icons/bi";
import Swal from "sweetalert2";
import useAxiosAdmin from "../../../Hooks/useAxiosAdmin";

const AllTrainerEdit = () => {
  const [allTrainersData, isAllTrainerFetching, allTrainerRefetch] =
    useAllTrainers();
    const axiosAdmin = useAxiosAdmin();
  if (isAllTrainerFetching) {
    return <Loading></Loading>;
  }
  const handleTrainerRemove = (email) => {
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
        axiosAdmin.delete(`/trainer/${email}`)
        .then(res=>{
            Swal.fire({
                title: "Removed!",
                text: "Trainer has been Removed.",
                icon: "success",
              });
              allTrainerRefetch();
        })
        
      }
    });
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 class="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          All Trainer Data
        </h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Only admin can show the trainer data and press the remove button for
          remove as a trainer.
        </p>
      </div>
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
                  <tr class="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img src={data.photoUrL} alt="" />
                      {data.name}
                    </th>
                    <td class="px-6 py-4 text-center">{data.email}</td>
                    <td
                      className="cursor-pointer text-red-600 flex gap-2 items-center justify-center mt-3"
                      onClick={() => handleTrainerRemove(data.email)}
                    >
                      Remove as trainer <BiTrash></BiTrash>
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

export default AllTrainerEdit;
