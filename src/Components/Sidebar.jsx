import React, { useState } from "react";
import {
  home,
  categories,
  newIcon,
  cart,
  news,
  lab,
  arrowUp,
  purpleBubble,
  people02,
  settings,
  menu,
  close,
} from "../assets";
import { sidebarLinks } from "../constants";

const HelpButton = () => (
  <div
    style={{ backgroundImage: `url(${purpleBubble})` }}
    className="relative p-16 pt-20 bg-cover text-white flex flex-col justify-between rounded-3xl font-medium cursor-pointer"
  >
    <div className="absolute top-0 right-0 p-2">
      <img src={arrowUp} className="w-8" />
    </div>
    <div className="absolute bottom-0 left-0 p-4 text-[14px]">
      Do you need help?
    </div>
  </div>
);

const icons = {
  home,
  categories,
  newIcon,
  cart,
  news,
  lab,
};

const Profile = () => (
  <div className="flex justify-between items-center mt-8 cursor-pointer">
    <div className="flex items-center gap-4">
      <img className="w-[32px] h-[32px] rounded-full" src={people02} />
      <span> Lucas </span>
    </div>
    <img src={settings} className="w-[24px] h-[24px]" />
  </div>
);

const Sidebar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={isOpen ? close : menu}
        alt="menu"
        className="sm:hidden w-[28px] h-[28px] object-contain ml-6 mt-[-50px] mb-[30px]"
        onClick={() => setIsOpen((prevState) => !prevState)}
      />
      <nav
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transform transition duration-300 ease-in-out sm:translate-x-0 flex flex-col p-6 items-left gap-8 h-screen w-[11rem]`}
      >
        <ul className="list-none justify-center items-center flex-col text-white text-[14px] font-poppins">
          {sidebarLinks.map((nav) => (
            <li
              key={nav.id}
              className={`cursor-pointer pb-8 ${
                active === nav.title ? "text-white" : "text-dimWhite"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <div className="flex items-center">
                <img src={icons[nav.id]} className="w-6 h-6 mr-2" />
                <a href={`/${nav.link}`}>{nav.title}</a>
              </div>
            </li>
          ))}
          <li className="fixed sm:bottom-[130px] bottom-[110px]">
            <HelpButton />
            <Profile />
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Sidebar;
