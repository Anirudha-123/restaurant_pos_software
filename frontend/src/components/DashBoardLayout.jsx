import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <SideBar />

      <div className="flex-1">
        <div className="fixed top-0 left-0 lg:left-44 right-0 h-16 px-4 bg-white shadow-sm flex justify-between items-center z-10">
          <Link to="/">
          <h3 className="font-semibold">Manager Dashboard</h3></Link>
          <button className="px-4 py-2 bg-red-400 hover:bg-red-500 text-white font-semibold">
            Logout
          </button>
        </div>

        <div className="pt-17 bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
