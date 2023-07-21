import React from "react";
import { logo, home } from "../assets";
import { navLinks } from "../constants";


const VerticalNavbar = () => (
    <nav className="flex flex-col p-6 items-left gap-8 h-screen w-60 bg-primary">
      <img src={logo} alt="logo" className="w-[128px] " />
      <ul className="list-none justify-center items-center flex-col text-white text-[20px] font-poppins">
        <li>test</li>
        <li>test</li>
      </ul>

    </nav>
);

export default VerticalNavbar;
