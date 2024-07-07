import React, { useContext, useState } from "react";
import {
  FaHome,
  FaUsers,
  FaFolder,
  FaCalendarAlt,
  FaFileAlt,
  FaChartPie,
} from "react-icons/fa";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  return (
    <div
      className={`h-screen bg-gray-900 text-white fixed flex flex-col items-center py-4 transition-[width] duration-300 sm:${
        isExpanded ? "w-[200px]" : "w-14"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <nav className="flex-1 flex flex-col items-center justify-center space-y-4 mt-10">
        <div className="group w-full">
          <div className="w-full flex items-center justify-start  group-hover:justify-center p-2">
            <FaHome className="text-xl" />
            {isExpanded && <span className="ml-4">Home</span>}
          </div>
        </div>
        <div className="group w-full">
          <div className="w-full flex items-center justify-start  group-hover:justify-center p-2">
            <FaUsers className="text-xl" />
            {isExpanded && <span className="ml-4">Users</span>}
          </div>
        </div>
        <div className="group w-full">
          <div className="w-full flex items-center justify-start  group-hover:justify-center p-2">
            <FaFolder className="text-xl" />
            {isExpanded && <span className="ml-4">Projects</span>}
          </div>
        </div>
        <div className="group w-full">
          <div className="w-full flex items-center justify-start  group-hover:justify-center p-2">
            <FaCalendarAlt className="text-xl" />
            {isExpanded && <span className="ml-4">Calendar</span>}
          </div>
        </div>
        <div className="group w-full">
          <div className="w-full flex items-center justify-start group-hover:justify-center p-2">
            <FaFileAlt className="text-xl" />
            {isExpanded && <span className="ml-4">Documents</span>}
          </div>
        </div>
        <div className="group w-full">
          <div className="w-full flex items-center justify-start  group-hover:justify-center p-2">
            <FaChartPie className="text-xl" />
            {isExpanded && <span className="ml-4">Reports</span>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
