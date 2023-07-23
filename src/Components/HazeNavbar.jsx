import { bag, heart, search, logo, menu } from "../assets";
import { navIcons } from "../constants";
import { useNavigate } from "react-router-dom";

const icons = {
  bag,
  heart,
  search,
};

const HazeNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full flex  py-6 justify-between items-center">
      <img
        src={logo}
        alt="haze"
        className="w-[128px] cursor-pointer"
        onClick={() => navigate("/")}
      />

      <ul className="list-none flex justify-end items-center flex-1 sm:gap-8 gap-4">
        {navIcons.map((nav) => (
          <li
            key={nav.id}
            className="font-poppins font-normal cursor-pointer text-[16px]"
          >
            <img src={icons[nav.id]} className="w-6 h-6 mr-2" />
          </li>
        ))}
      </ul>
    </nav>
  );

  
};

export default HazeNavbar;
