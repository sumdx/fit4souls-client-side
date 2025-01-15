import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";


const Root = () => {
    return (
        <div className='relative font-poppins bg-gray-50  dark:bg-gray-900 flex flex-col min-h-screen'>
        <NavBar className="absolute top-0  mx-auto z-20 bg-transparent"></NavBar>
        <div className='flex-grow '>
        <Outlet></Outlet>
        </div>
        
        
    </div>
    );
};

export default Root;