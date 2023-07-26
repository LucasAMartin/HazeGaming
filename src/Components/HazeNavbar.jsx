import { bag, heart, search, logo, menu } from "../assets";
import { navIcons } from "../constants";
import { useNavigate } from "react-router-dom";
import styles from "../style";


const icons = {
  search,
  heart,
  bag,
};

const HazeNavbar = ({message}) => {
  const navigate = useNavigate();

  return (
    <nav className="w-full flex py-6 justify-between items-center sm:ml-[-40px] pl-12 z-10">
      <img
        src={logo}
        alt="haze"
        className="sm:w-[128px] w-[64px] cursor-pointer"
        onClick={() => navigate("/")}
      />
      <h2 className="font-poppins font-semibold xs:text-[32px] text-[28px] text-white ml-[6.5rem] align-text-bottom"> {message} </h2>
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
