import React from "react";
import logo from "../assets/SJU-Logo 1.svg";
import schoolLogo from "../assets/pace-logo-png-1.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex px-5  md:px-0  lg:justify-between lg:px-20 py-3 rounded-xl items-center shadow-xl">
      <div className="flex items-center gap-x-5">
        <img src={logo} alt="" className="h-3 lg:h-5" />
        <div className="h-7 w-[1.5px] bg-[#292967]" />
        <img src={schoolLogo} alt="" className="h-5" />
      </div>
     <div className="ml-10 text-sm md:text-md">
     <Button
        classes={"px-6 py-2 bg-[#292967] text-white rounded-2xl lg:rounded-full"}
        label={"Get Info"}
      />
     </div>
    </div>
  );
};

export default Navbar;
