import React from "react";

export default function Navbar() {
  return (
    <div className="h-14  container mx-auto flex gap-x-4  items-center">
      <p className="text-blue-400 font-semibold text-lg ">accredian</p>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search here"
        className="border border-slate-200 rounded-lg w-full px-4 py-2"
      />
      <button>custom</button>
      <button className=" bg-blue-400 p-2 text-white rounded-md">Click</button>
    </div>
  );
}
