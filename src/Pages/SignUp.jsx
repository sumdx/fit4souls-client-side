import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user, signUpUser, signOutUser } = useContext(AuthContext);
  if (user) {
    return navigate("/");
  }
  const onSubmit = async (data) => {
    const imageFile = { image: data.photoUrl[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const photoUrL = res.data.data.display_url;

      signUpUser(data.email, data.password)
        .then((result) => {
          updateProfile(auth.currentUser, {
            displayName: data.name,
            photoURL: photoUrL,
          })
            .then((res) => {
              
              const userInfo = {
                name: data.name,
                email: data.email,
                photoURL: photoUrL,
                role: "member",
              };
              axiosPublic
                .post("/users", userInfo)
                .then(() => {
                  Swal.fire({
                    title: "Success!",
                    text: "Artifact Information Added Successfully",
                    icon: "success",
                    confirmButtonText: "Okay",
                  });
                  reset();
                  signOutUser();
                  navigate(from, { replace: true });
                })
                .catch(() => {
                  Swal.fire({
                    title: "Error!",
                    text: "Something Wrong",
                    icon: "error",
                    confirmButtonText: "Okay",
                  });
                });
            })
            .catch((err) => {});
        })
        .catch((err) => {});
    } else {
    }
  };

  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side */}
          <div class="flex flex-col justify-center">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              We invest in the world’s potential
            </h1>
            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
            <a
              href="#"
              class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
            >
              Read more about our app
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          {/* Right Side */}
          <div>
            <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                Sign Up in to Fit4Soul
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                class="mt-8 space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <span className="text-red-700 ml-2 mt-8">
                      * Name is Required
                    </span>
                  )}
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                  {errors.email && (
                    <span className="text-red-700 ml-2 pt-8">
                      * Email is Required
                    </span>
                  )}
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/, // At least 8 chars, 1 letter, and 1 number
                        message:
                          "* Password must be include at least 1 Uppercase letter, 1 lowercase letter and 1 number",
                      },
                    })}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-700 ml-2 mt-8">
                      * Password is required
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-700 ml-2 mt-8">
                      * Password must be 6 characters long.
                    </span>
                  )}
                  {errors.password && (
                    <span className="text-red-700 ml-2 mt-8">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="user_avatar"
                  >
                    Upload profile photo
                  </label>
                  <input
                    {...register("photoUrl", { required: true })}
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
                  />
                  {errors.photoUrl && (
                    <span className="text-red-700 ml-2 mt-8">
                      * Image is Required
                    </span>
                  )}
                  <div
                    class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="user_avatar_help"
                  >
                    A profile picture is useful to confirm your are logged into
                    your account
                  </div>
                </div>

                <button
                  type="submit"
                  class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login to your account
                </button>
                <button className="w-full px-5 py-3 flex items-center gap-2 text-base font-medium justify-center rounded-xl text-center text-blue-700 border border-blue-700 focus:ring-4 focus:ring-blue-300  hover:bg-blue-800 hover:text-white">
                  <FaGoogle></FaGoogle>
                  Sign in with Google
                </button>

                <div class="text-sm font-medium text-gray-900 dark:text-white flex space-y-2">
                  Allready a member ?{" "}
                  <NavLink to={"/login"}>
                    <p class="ml-2 text-blue-600 hover:underline dark:text-blue-500">
                      Login
                    </p>
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
