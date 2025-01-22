import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAllClasses from "../../../Hooks/useAllClasses";
import { Controller, set, useForm } from "react-hook-form";
import Select from "react-select";
import Swal from "sweetalert2";
import useTrainerDataByEmail from "../../../Hooks/useTrainerDataByEmail";
import { Helmet } from "react-helmet-async";

const AddNewSlot = () => {
  const { user } = useContext(AuthContext);
  const [trainerData, refetchTrainer] = useTrainerDataByEmail();
  const [allClassesData] = useAllClasses();
  const [availableTime, setAvailableTime] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm();

  // const axiosSecure = useAxiosSecure();
  // useEffect(() => {
  //   axiosSecure.get(`/trainer/${user?.email}`).then((res) => {
  //     setTrainerData(res.data);
  //   });
  // }, []);
  useEffect(() => {
    if (user?.email) {
      refetchTrainer();
    }
  }, [user?.email, refetchTrainer]);
  const handleDayChange = (e) => {
    if (e.target.value) {
      trainerData.availability.map((days) => {
        if (days.day === e.target.value) {
          setSelectedDay(e.target.value);
          setAvailableTime(parseInt(days.remainingTime));
        }
      });
    } else {
      setSelectedDay("");
      setAvailableTime(0);
    }
  };

  const onSubmit = (data) => {
    const selectedClass = allClassesData.find(
      (classItem) => classItem._id === data.class
    );
    const slotInfo = {
      classId: data.class,
      status: "available",
      trainerEmail: user.email,
      trainerName : user.displayName,
      trainerPhotoUrl : user.photoURL,
      //day: data.days[0].value,
      day: selectedDay,
      className: selectedClass.className,
      duration: data.slotTime,
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
      refetchTrainer();
    })
    .catch(e =>{

    });
  };

  return (
    <div>
      <Helmet>
                      <title>Fit4Soul | Add slot</title>
                  </Helmet>
      <div>
        <div className="flex flex-col justify-center items-center text-center mb-16">
          <h1 class="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Create Slot
          </h1>
          <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            We have experienced trainers to make your training journey smooth.
          </p>
        </div>
      </div>
      <div className="w-3/4 mx-auto flex flex-col gap-6">
        <form onSubmit={handleSubmit(onSubmit)} action="">
          {/* Slot Name */}
          <div>
            <label
              for="small-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Slot Name
            </label>
            <input
              {...register("slotName", {
                required: "Name is required",
                
              })}
              type="text"
              id="small-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.slotName && (
              <p style={{ color: "red" }}>{errors.slotName.message}</p>
            )}
          </div>
    

          <div className="flex flex-col my-6 gap-6">
            <div className="mt-4">
              <label htmlFor="classDropdown">Select a Class: </label>
              <select
                {...register("class", { required: true })}
                id="classDropdown"
              >
                <option value="">Select a Class</option>
                {allClassesData.map((classItem) => (
                  <option key={classItem._id} value={classItem._id}>
                    {classItem.className}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4">
              <label htmlFor="classDropdown">Select a Day: </label>
              <select
                onChange={handleDayChange}
                //{...register("days", { required: true })}
                id="classDropdown"
                name="day"
                defaultValue={"default"}
              >
                <option value="" name="default">
                  Select a Day
                </option>
                {trainerData?.availability?.map((days, index) => (
                  <option key={index} value={days.day}>
                    {days.day}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Select Time */}
          <div>
            <label
              for="small-input"
              class="block my-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Slot Duration{" "}
              {selectedDay && (
                <p>
                  (Your Available time for {selectedDay} is {availableTime}{" "}
                  Hourse)
                </p>
              )}
            </label>
            <input
              type="number"
              {...register("slotTime", {
                required: "Duration is required",
                max: {
                  value: availableTime , // Maximum allowed value
                  message: `Value cannot exceed ${availableTime}`,
                },
              })}
              id="small-input"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.slotTime && (
              <p style={{ color: "red" }}>{errors.slotTime.message}</p>
            )}
          </div>

          <button
            type="submit"
            class="mt-4 text-center mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewSlot;
