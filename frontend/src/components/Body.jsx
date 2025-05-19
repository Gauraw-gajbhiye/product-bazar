import { Outlet } from "react-router-dom";
import Card from "./Card";
import Sidebar from "./Sidebar";

function Body() {
  return (
    <div className="flex">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12 p-2">
        <Card />
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
