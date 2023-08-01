import { useState, useEffect } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 75 || (window.innerWidth <= 768 && window.scrollY > 0));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full flex py-6 justify-between items-center navbar ${scrolled ? "bg-fade" : ""}`}>
      <img src={logo} alt="haze" className="w-[128px] cursor-pointer" onClick={() => navigate('/')}/>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => handleClick(nav.id)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="z-[40] w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "translate-x-[-100%]" : "-translate-x-0"
          } z-10 transform transition duration-300 ease-in-out sm:translate-x-0 p-6 bg-black-gradient absolute pt-40 top-0 right-0 my-2 min-w-full h-[1100px] rounded-lg mt-20 `}
        >
          <ul className="list-none flex justify-start items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[20px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title)
                  setToggle(false)
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
