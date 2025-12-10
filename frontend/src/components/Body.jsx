import { Outlet } from "react-router-dom";
import Card from "./Card";
import Sidebar from "./Sidebar";

function Body() {
  return (
    <div className="flex flex-col md:flex-row mt-8">
      <div className="hidden md:block md:w-3/12 lg:w-2/12">
        <Sidebar />
      </div>
      <div className="w-full md:w-9/12 lg:w-10/12 p-2">
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
