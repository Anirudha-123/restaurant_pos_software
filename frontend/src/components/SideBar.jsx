import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="hidden lg:flex lg:w-44 bg-orange-400 text-white p-5">
      <h2 className="text-xl font-semibold mb-8">SideBar</h2>

      <nav className="flex flex-col gap-4">
        <NavLink
          to="/staff"
          className={({ isActive }) =>
            `px-3 py-2 rounded font-bold ${
              isActive ? "bg-orange-600" : "hover:bg-orange-500"
            }`
          }
        >
          Orders
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
