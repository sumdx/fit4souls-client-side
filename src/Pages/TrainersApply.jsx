import React, { useContext, useState } from "react";
import Select from "react-select";
import { AuthContext } from "../Providers/AuthProvider";
import { Controller, useForm } from "react-hook-form";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";
import useUsersActivityLog from "../Hooks/useUsersActivityLog";
import { Helmet } from "react-helmet-async";

const TrainersApply = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const [selectedSkills, setSelectedSkills] = useState([]);

  const dayOptions = [
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
  ];

  const onSubmit = (data) => {
    const availability = data.days.map((dayObj) => {
      return {
        day: dayObj.value, // Get the day value from the selected days array
        availableTime: data.availableHours, // Set availableTime to the number of hours entered in the form
        remainingTime: data.availableHours, // Initially, remaining time is the same as available time
      };
    });
 
    
    const formData = {
      email: data.email,
      photoUrl: data.photoUrl,
      name: data.name,
      bio: data.bio,
      availableHours: data.availableHours,
      age: data.age,
      status: "pending",
      experience: data.experience,
      skills: selectedSkills, 
      avaialableSlots: data.days, 
      availability,
    };

    axiosSecure
      .post("/trainers/apply", formData)
      .then((res) => {

        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Application Successfully Submited",
            icon: "success",
            confirmButtonText: "Okay",
          });
          reset();
          navigate("/dashboard");
        }
      })
      .catch((err) => {

        Swal.fire({
          title: "Error!",
          text: "Something Wrong in saving user data in database",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };

  const handleSkillChange = (event) => {
    const { checked, value } = event.target;

    setSelectedSkills((prev) =>
      checked ? [...prev, value] : prev.filter((skill) => skill !== value)
    );
  };

  const [activityLogData, refetch,rejectedData] = useUsersActivityLog();
  const pendingData = activityLogData.filter(
    (item) => item.status.includes("pending")
  );


  return (
    <div>
      <Helmet>
                      <title>Fit4Soul | Trainers Apply</title>
                  </Helmet>
      <div>
        <h1 className="text-center text-4xl my-6 mb-8 dark:text-white ">
          Join our team today!
        </h1>
      </div>
      {pendingData.length ? (
        <div className="text-center mt-28">
          <h1 className="text-center text-2xl mb-8 dark:text-white ">Already have pending Data...</h1>
          <NavLink to={"/dashboard/activity-log"} className="text-center text-xl my-6 mb-8 dark:text-white ">Check Activity log for more</NavLink>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={user.email}
              disabled
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              {...register("photoUrl", { required: "photoUrl is required" })}
              name="photoUrl"
              id="photoUrl"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={user.photoURL}
              required
            />
            <label
              htmlFor="photoUrl"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Profile Image Url
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              {...register("name", { required: "name is required" })}
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              {...register("bio", { required: "bio is required" })}
              name="bio"
              id="bio"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="bio"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Bio
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              {...register("availableHours", { required: "Hours is required" })}
              name="availableHours"
              id="availableHours"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="availableHours"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Available hours in a day
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                {...register("age", { required: "age is required" })}
                name="age"
                id="age"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="age"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Age
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                {...register("experience", {
                  required: "experience is required",
                })}
                name="experience"
                id="experience"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="experience"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Experience in years
              </label>
            </div>
          </div>

          <div className="my-5 ">
            <p className="font-medium">Skills:</p>
            <label className="mr-2">
              <input
                type="checkbox"
                value="Strength Training"
                onChange={handleSkillChange}
              />
              Strength Training
            </label>
            <label className="mr-2">
              <input
                type="checkbox"
                value="Yoga"
                onChange={handleSkillChange}
              />
              Yoga
            </label>
            <label className="mr-2">
              <input
                type="checkbox"
                value="Zumba"
                onChange={handleSkillChange}
              />
              Zumba
            </label>
            <label className="mr-2">
              <input
                type="checkbox"
                value="Aerobics"
                onChange={handleSkillChange}
              />
              Aerobics
            </label>
            <label className="mr-2">
              <input
                type="checkbox"
                value="Cardiovascular Training"
                onChange={handleSkillChange}
              />
              Cardiovascular Training
            </label>
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
                  options={dayOptions}
                  placeholder="Select available days"
                />
              )}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default TrainersApply;
