import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAllClasses from "../../../Hooks/useAllClasses";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import Swal from "sweetalert2";

const AddNewSlot = () => {
  const { user } = useContext(AuthContext);
  const [trainerData, setTrainerData] = useState({});
  const [allClassesData] = useAllClasses();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/trainer/${user?.email}`).then((res) => {
      setTrainerData(res.data);
    });
  }, []);
  const onSubmit = (data) => {

    const slotInfo = {
      classId: data.class,
      status: "available",
      trainerEmail: user.email,
      day: data.days[0].value,
      slotTime : data.slotTime,
      slotName: data.slotName,
    };
    
    axiosSecure.post(`/slot`, slotInfo).then((res) => {
      Swal.fire({
        title: "Success!",
        text: "Trainers Added Successfully",
        icon: "success",
        confirmButtonText: "Okay",
      });
      reset();
    });
  };

  return (
    <div>
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
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            {...register("slotName", {
              required: "Hours is required",
            })}
            name="slotName"
            id="slotName"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="slotName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Slot Name
          </label>
          {errors.number && <p>{errors.number.message}</p>}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            {...register("slotTime", {
              required: "Hours is required",
              max: {
                value: 7, // Maximum allowed value
                message: "Value cannot exceed 10",
              },
            })}
            name="slotTime"
            id="slotTime"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="slotTime"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Slot Time
          </label>
          {errors.number && <p>{errors.number.message}</p>}
        </div>
        <div>
          <label htmlFor="classDropdown">Select a Class: </label>
          <select {...register("class", { required: true })} id="classDropdown">
            <option value="">Select a Class</option>
            {allClassesData.map((classItem) => (
              <option key={classItem._id} value={classItem._id}>
                {classItem.className}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <p className="font-medium">Available Days:</p>
          <Controller
            name="days"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <Select
                {...field}
                isMulti
                options={trainerData?.avaialableSlots}
                placeholder="Select available days"
              />
            )}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewSlot;
