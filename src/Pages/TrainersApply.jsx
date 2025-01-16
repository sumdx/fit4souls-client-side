
import React, { useContext, useState } from "react";
import Select from "react-select";
import { AuthContext } from "../Providers/AuthProvider";
import { Controller, useForm } from "react-hook-form";

const TrainersApply = () => {
  const { user } = useContext(AuthContext);
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
    const formData = {
      email: data.email,
      imageUrl: data.imageUrl,
      name: data.name,
      bio: data.bio,
      availableHours: data.availableHours,
      age: data.age,
      experience: data.experience,
      status : "pending",
      skills: selectedSkills, // Skills will be in an array
      days: data.days, // Days will be an array of values
    };
    
    

  };

  const handleSkillChange =  (event) => {
    const { checked, value } = event.target;
    
     setSelectedSkills((prev) =>
      checked ? [...prev, value] : prev.filter((skill) => skill !== value)
    );
    
  };
 

  return (
    <div>
      <div>
        <h1 className="text-center text-4xl my-6 mb-8 dark:text-white ">
          Join our team today!
        </h1>
      </div>
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
            {...register("imageUrl", { required: "imageUrl is required" })}
            name="imageUrl"
            id="imageUrl"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            defaultValue={user.photoURL}
            required
          />
          <label
            htmlFor="imageUrl"
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
              {...register("experience", { required: "experience is required" })}
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
        
        <div className="my-5">
          <p className="font-medium">Skills:</p>
          <label>
            <input
              type="checkbox"
              value="Web Development"
              onChange={handleSkillChange}
            />
            Web Development
          </label>
          <label>
            <input
              type="checkbox"
              value="Mobile App Development"
              onChange={handleSkillChange}
            />
            Mobile App Development
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

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default TrainersApply;


// import React, { useContext } from "react";
// import Select from "react-select";
// import { AuthContext } from "../Providers/AuthProvider";
// import { Controller, useForm } from "react-hook-form";

// const TrainersApply = () => {
//   const { user } = useContext(AuthContext);
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const dayOptions = [
//     { value: "Saturday", label: "Saturday" },
//     { value: "Sunday", label: "Sunday" },
//     { value: "Monday", label: "Monday" },
//     { value: "Tuesday", label: "Tuesday" },
//     { value: "Wednesday", label: "Wednesday" },
//     { value: "Thursday", label: "Thursday" },
//     { value: "Friday", label: "Friday" },
//   ];
//   const timeOptions = [
//     { value: "Morning", label: "Morning" },
//     { value: "Noon", label: "Noon" },
//     { value: "Afternoon", label: "Afternoon" },
//     { value: "Evening", label: "Evening" },
//     { value: "Night", label: "Night" },
//   ];

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div>
//       <div>
//         <h1 className="text-center text-4xl my-6 mb-8 dark:text-white ">
//           Join our team today!
//         </h1>
//       </div>
//       <form class="max-w-md mx-auto">
//         <div class="relative z-0 w-full mb-5 group">
//           <input
//             type="email"
//             {...register("email", { required: "Email is required" })}
//             name="floating_email"
//             id="floating_email"
//             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             value={user.email}
//             disabled
//           />
//           <label
//             for="floating_email"
//             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Email address
//           </label>
//         </div>
//         <div class="relative z-0 w-full mb-5 group">
//           <input
//             type="text"
//             name="imageUrl"
//             id="imageUrl"
//             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             defaultValue={user.photoURL}
//             required
//           />
//           <label
//             for="imageUrl"
//             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Profile Image Url
//           </label>
//         </div>
//         <div class="relative z-0 w-full mb-5 group">
//           <input
//             type="text"
//             name="name"
//             id="name"
//             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             required
//           />
//           <label
//             for="floating_password"
//             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Name
//           </label>
//         </div>
//         <div class="relative z-0 w-full mb-5 group">
//           <input
//             type="text"
//             name="bio"
//             id="bio"
//             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             required
//           />
//           <label
//             for="bio"
//             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Bio
//           </label>
//         </div>
//         <div class="relative z-0 w-full mb-5 group">
//           <input
//             type="number"
//             name="bio"
//             id="bio"
//             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             required
//           />
//           <label
//             for="bio"
//             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Available hourse in a day
//           </label>
//         </div>
//         <div class="grid md:grid-cols-2 md:gap-6">
//           <div class="relative z-0 w-full mb-5 group">
//             <input
//               type="number"
//               name="floating_first_name"
//               id="floating_first_name"
//               class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               for="floating_first_name"
//               class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Age
//             </label>
//           </div>
//           <div class="relative z-0 w-full mb-5 group">
//             <input
//               type="number"
//               name="experience"
//               id="experience"
//               class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               for="floating_last_name"
//               class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Experience in years
//             </label>
//           </div>
//         </div>
        
//         <div>
//           <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
//             Skills
//           </h3>
//           <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
//             <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//               <div class="flex items-center ps-3">
//                 <input
//                   id="vue-checkbox-list"
//                   type="checkbox"
//                   value=""
//                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
//                 />
//                 <label
//                   for="vue-checkbox-list"
//                   class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                 >
//                   Vue JS
//                 </label>
//               </div>
//             </li>
//             <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//               <div class="flex items-center ps-3">
//                 <input
//                   id="react-checkbox-list"
//                   type="checkbox"
//                   value=""
//                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
//                 />
//                 <label
//                   for="react-checkbox-list"
//                   class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                 >
//                   React
//                 </label>
//               </div>
//             </li>
//             <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//               <div class="flex items-center ps-3">
//                 <input
//                   id="angular-checkbox-list"
//                   type="checkbox"
//                   value=""
//                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
//                 />
//                 <label
//                   for="angular-checkbox-list"
//                   class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                 >
//                   Angular
//                 </label>
//               </div>
//             </li>
//             <li class="w-full dark:border-gray-600">
//               <div class="flex items-center ps-3">
//                 <input
//                   id="laravel-checkbox-list"
//                   type="checkbox"
//                   value=""
//                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
//                 />
//                 <label
//                   for="laravel-checkbox-list"
//                   class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                 >
//                   Laravel
//                 </label>
//               </div>
//             </li>
//           </ul>
//         </div>
//         <div></div>
//         <Select
//           defaultValue={[dayOptions[0], dayOptions[1]]}
//           isMulti
//           name="days"
//           options={dayOptions}
//           className="bg-transparent"
//           classNamePrefix="select"
//         />
        
//       </form>
//     </div>
//   );
// };

// export default TrainersApply;
