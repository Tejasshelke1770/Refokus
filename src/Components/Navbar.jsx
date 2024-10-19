import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 border-b-2 flex items-center justify-between ">
     <div className="flex items-center">
     <img
        className="w-[100px] invert ml-4"
        src="https://cdn.prod.website-files.com/5dbfbe5b9bf13e1ebb54e91f/60524e07591b9057c241c060_refokus-logo-black.svg"
      />
      <div className="flex gap-14 ml-20">
      {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
        elem.length === 0 ? <span className="w-[2px] h-7 bg-zinc-600"></span> : (<a  className="font-regular text-sm flex items-center gap-1" href="#">
      {index === 1 && (<span style={{boxShadow: "0 0 0.45em #00FF19"}} className="inline-block w-1.5 h-1.5 rounded-full bg-green-500"></span>)}
      {elem}
        </a>)
        ))}
      </div>
     </div>
     <Button />
    </div>
  );
};

export default Navbar;















































