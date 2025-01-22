import React, { useContext } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { MdDashboard, MdSettingsApplications } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useTrainer from "../Hooks/useTrainer";
import { AuthContext } from "../Providers/AuthProvider";

const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isTrainer, isTrainerLoading] = useTrainer();
  const {user} = useContext(AuthContext);
  return (
    <div>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-5 font-medium flex flex-col">
            {/* Admins Part */}
            {isAdmin && (
              <>
              <li> Welcome {user?.displayName} </li>
                <li>
                  <NavLink className="flex items-center text-xl">
                    <BiSolidDashboard class="text-4xl w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span class="ms-3">Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/all-trainers"}  className="flex items-center text-xl">
                    <BiSolidDashboard class="text-4xl w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span class="ms-3">All Trainers Data</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/newsletter-subscribers"}
                    className="flex items-center text-xl"
                  >
                    <MdSettingsApplications class="text-4xl w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span class="ms-3">All Newsletter Subscriber</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to={"/dashboard/trainers-applications"}
                    className="flex items-center text-xl"
                  >
                    <MdSettingsApplications class="text-4xl w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span class="ms-3">Application</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to={"/dashboard/balance"}
                    className="flex items-center text-xl"
                  >
                    <MdSettingsApplications class="text-4xl w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span class="ms-3">Balance</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to={"/dashboard/add-new-class"}
                    className="flex items-center text-xl"
                  >
                    <MdSettingsApplications class="text-4xl w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span class="ms-3">Add New Class</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* Trainers part */}
            {isTrainer && (
              <>
              <li> Welcome {user?.displayName} </li>
                <li>
                  <NavLink
                    to={"/dashboard/manage-slots"}
                    className="flex items-center text-xl"
                  >
                    <MdSettingsApplications class="text-4xl w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span class="ms-3">Manage Slots</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/add-new-slot"}
                    className="flex items-center text-xl"
                  >
                    <MdSettingsApplications class="text-4xl w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span class="ms-3">Add New Slot</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* admin and trainer shared */}
            {(isAdmin || isTrainer) && (
              <>
                <li>
                  <NavLink
                    to={"/dashboard/post-forum"}
                    className="flex items-center text-xl"
                  >
                    <MdSettingsApplications class="text-4xl w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span class="ms-3">Add New Forum</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* Member Part */}
            {
              (!isAdmin && !isTrainer) && <>
              <li> Welcome {user?.displayName} </li>
                <li>
              <NavLink
                to={"/dashboard/activity-log"}
                className="flex items-center text-xl"
              >
                <MdSettingsApplications class="text-4xl w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span class="ms-3">Activity Log</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard/booked-trainer"}
                className="flex items-center text-xl"
              >
                <MdSettingsApplications class="text-4xl w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span class="ms-3">Booked Trainer</span>
              </NavLink>
            </li>
              </>
            }
            
          </ul>
          <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <NavLink to={"/"} className="flex items-center text-xl">
              <BiSolidDashboard class="text-4xl w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span class="ms-3">Home</span>
            </NavLink>

            <li>
              <NavLink
                to={"/dashboard/profile"}
                className="flex items-center text-xl"
              >
                <MdSettingsApplications class="text-4xl w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span class="ms-3">Profile Page</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      <div class="p-4 sm:ml-64">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
