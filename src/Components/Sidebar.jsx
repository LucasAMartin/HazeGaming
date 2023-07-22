import React, { useState } from "react";
import { home, arrowUp, purpleBubble } from "../assets";
import { sidebarLinks } from "../constants";

const HelpButton = () => (
  <li style={{ backgroundImage: `url(${purpleBubble})` }} className="p-10 bg-cover rounded-lg text-white text-center mt-16 flex flex-col justify-between">
    <div className="flex justify-end">
      <img src={arrowUp} className="w-8" />
    </div>
    <div className="m-2 flex justify-start">
      Do you need help?
    </div>
  </li>
);


const Sidebar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="flex flex-col p-6 items-left gap-8 h-screen w-60 bg-primary">
      <ul className="list-none justify-center items-center flex-col text-white text-[20px] font-poppins">
        {sidebarLinks.map((nav) => (
          <li
            key={nav.id}
            className={`cursor-pointer pb-8 ${
              active === nav.title ? "text-white" : "text-dimWhite"
            }`}
            onClick={() => setActive(nav.title)}
          >
            <div className="flex">
              <img src={home} className="w-6 h-6 mr-2" />
              <a href={`#${nav.id}`}>{nav.title}</a>
            </div>
          </li>
        ))}
        <li>
          <HelpButton />
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
