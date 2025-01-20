import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Dashboard from "./Layout/Dashboard.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import AllTrainers from "./Pages/AllTrainers.jsx";
import AllClasses from "./Pages/AllClasses.jsx";
import Community from "./Pages/Community.jsx";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import TrainerDetails from "./Pages/TrainerDetails.jsx";
import TrainersApply from "./Pages/TrainersApply.jsx";
import PrivateRoute from "./Providers/PrivateRoute.jsx";
import TrainersApplications from "./Pages/Dashboard/Admin/TrainersApplications.jsx";
import ApplicationDetails from "./Pages/Dashboard/Admin/ApplicationDetails.jsx";
import ActivityLog from "./Pages/Dashboard/Users/ActivityLog.jsx";
import UserRoute from "./Providers/UserRoute.jsx";
import BookedTrainer from "./Pages/Dashboard/Users/BookedTrainer.jsx";
import Profile from "./Pages/Dashboard/Shared/Profile.jsx";
import AdminTrainerSharedRoute from "./Providers/AdminTrainerSharedRoute.jsx";
import AddNewForum from "./Pages/Dashboard/Shared/AddNewForum.jsx";
import AdminRoute from "./Providers/AdminRoute.jsx";
import AllNewsletterSubscribers from "./Pages/Dashboard/Admin/AllNewsletterSubscribers.jsx";
import TrainerRoute from "./Providers/TrainerRoute.jsx";
import AddNewSlot from "./Pages/Dashboard/Trainer/AddNewSlot.jsx";
import ManageSlot from "./Pages/Dashboard/Trainer/ManageSlot.jsx";
import AddNewClass from "./Pages/Dashboard/Admin/AddNewClass.jsx";
import Balance from "./Pages/Dashboard/Admin/Balance.jsx";
import TrainerBook from "./Pages/TrainerBook.jsx";
import Payment from "./Pages/Payment.jsx";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/trainers",
        element: <AllTrainers></AllTrainers>,
      },
      {
        path: "/classes",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/community",
        element: <Community></Community>,
      },
      {
        path : "/trainers/:id",
        element : <TrainerDetails></TrainerDetails>
      },
      {
        path : "/trainers/apply",
        element : <PrivateRoute><TrainersApply></TrainersApply></PrivateRoute>
      },
      {
        path : "/trainer-book/:id",
        element : <PrivateRoute><TrainerBook></TrainerBook></PrivateRoute>
      },
      {
        path:"/payment",
        element :<PrivateRoute><Payment></Payment></PrivateRoute>
      }
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // admin routes
      {
        path: "dashboard",
        element:<Dashboard></Dashboard>
      },
      {
        path : "trainers-applications",
        element : <AdminRoute><TrainersApplications></TrainersApplications></AdminRoute>
      },
      {
        path: "application-details/:id",
        element : <AdminRoute><ApplicationDetails></ApplicationDetails> </AdminRoute> ,
      },
      {
        path: "newsletter-subscribers",
        element : <AdminRoute><AllNewsletterSubscribers></AllNewsletterSubscribers></AdminRoute>
      },
      {
        path: "add-new-class",
        element : <AdminRoute><AddNewClass></AddNewClass></AdminRoute>
      },
      {
        path : "balance",
        element : <AdminRoute><Balance></Balance></AdminRoute>
      },
      
      // Trainer routes
      {
        path : "add-new-slot",
        element: <TrainerRoute><AddNewSlot></AddNewSlot></TrainerRoute>
      },
      {
        path : "manage-slots",
        element: <TrainerRoute><ManageSlot></ManageSlot></TrainerRoute>
      },
      // Admin Trainer Shared Route
      {
        path : "post-forum",
        element : <AdminTrainerSharedRoute><AddNewForum></AddNewForum></AdminTrainerSharedRoute>
      },

      // users
      {
        path: "activity-log",
        element : <UserRoute><ActivityLog></ActivityLog></UserRoute>,
      },
      {
        path: "booked-trainer",
        element : <UserRoute><BookedTrainer></BookedTrainer></UserRoute>
      },
      // all users
      {
        path: "profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
