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
  people01,
  settings,
  menu,
  close,
} from "../assets";
import { sidebarLinks } from "../constants";

const HelpButton = () => (
  <li
    style={{ backgroundImage: `url(${purpleBubble})` }}
    className="relative p-16 pt-24 w-32 bg-cover text-white flex flex-col justify-between rounded-3xl font-medium cursor-pointer"
  >
    <div className="absolute top-0 right-0 p-2">
      <img src={arrowUp} className="w-8" />
    </div>
    <div className="absolute bottom-0 left-0 p-4 text-[14px]">
      Do you need help?
    </div>
  </li>
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
  <div className="flex justify-between items-center mt-12 cursor-pointer">
    <div className="flex items-center gap-4">
      <img className="w-[32px] h-[32px] rounded-full" src={people01} />
      <span> Julia </span>
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
        className="sm:hidden w-[28px] h-[28px] object-contain ml-6"
        onClick={() => setIsOpen((prevState) => !prevState)}
      />
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } sm:block flex flex-col p-6 items-left gap-8 h-screen w-40 bg-primary`}
      >
        <ul className="list-none justify-center items-center flex-col text-white text-[12px] font-poppins">
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
                <a href={`#${nav.id}`}>{nav.title}</a>
              </div>
            </li>
          ))}
          <li className="fixed bottom-6">
            <HelpButton />
            <Profile />
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Sidebar;
