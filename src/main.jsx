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
      }
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "dashboard",
        element:<Dashboard></Dashboard>
      },
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
