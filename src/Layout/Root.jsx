import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div>
      <div className="relative font-poppins bg-gray-50  dark:bg-gray-900 flex flex-col min-h-screen">
        <NavBar className="absolute top-0  mx-auto z-20 bg-transparent"></NavBar>
        <div className="flex-grow">
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
