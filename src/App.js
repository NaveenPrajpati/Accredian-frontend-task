import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white h-screen min-w-[350px] font-roboto">
      <Sidebar />
      <div className=" w-full">
        <Navbar />
        <div className="bg-blue-100 w-fit px-10 py-2 flex flex-col justify-center mx-auto rounded-full">
          <h1 className="  text-2xl  mb-4 text-start text-slate-500 hover:text-blue-500  ">
            Welcome To Refer & Earn Portal
          </h1>
        </div>
        <HeroSection />
      </div>
    </div>
  );
};

export default App;
