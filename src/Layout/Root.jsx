import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            This is root route
            <Outlet></Outlet>
        </div>
    );
};

export default Root;