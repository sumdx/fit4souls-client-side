import { NavLink } from "react-router-dom";
import "flowbite";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

// Dark

const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
      );
      useEffect(() => {
        if (isDarkMode) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [isDarkMode]);
  // TODO :
      const {user, signOutUser} = useContext(AuthContext);
      


const signOutHandle=()=>{
    signOutUser();
}
  const menuItems = (
    <>
      <li>
        <NavLink to={"/"}> Home</NavLink>
      </li>
      <li>
        <NavLink to={"/trainers"}>Trainers</NavLink>
      </li>
      <li>
        <NavLink to={"/classes"}>Classes</NavLink>
      </li>
      <li>
        <NavLink to={"/community"}>Community</NavLink>
      </li>
      <li>
      <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className=" rounded-md"
    >
      {isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
      </li>
      
      {user && (
        <>
          <li onClick={signOutHandle}>
              SignOut
          </li>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <nav class="max-w-screen-xl mx-auto bg-white rounded-full px-4 border-gray-200 dark:bg-gray-900">
        <div class=" flex flex-wrap items-center justify-between mx-auto p-4">
          <a class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Fit4Soul
            </span>
          </a>
          <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {user ? (
              <>
                <button
                  type="button"
                  class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    class="w-8 h-8 rounded-full"
                    src={user.photoURL}
                    alt="user photo"
                  />
                </button>

                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="user-dropdown"
                >
                  <div class="px-4 py-3">
                    <span class="block text-sm text-gray-900 dark:text-white">
                      {user.displayName}
                    </span>
                    <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
                      {user.email}
                    </span>
                  </div>
                  <ul class="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <NavLink to="/dashboard"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/dashboard/profile"}
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        User Profile
                      </NavLink>
                    </li>
                    
                    <li>
                      <a
                        onClick={signOutHandle}
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <NavLink to={"/login"}>
                  <button
                    type="button"
                    class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
                </NavLink>
                <NavLink to={"/signup"}>
                  <button
                    type="button"
                    class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                  >
                    Sign Up
                  </button>
                </NavLink>
              </>
            )}
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border dark:text-white border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {menuItems}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
