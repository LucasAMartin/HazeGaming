import React from "react";
import { play } from "../assets";
import { useNavigate } from 'react-router-dom';

const PlayButton = ({ styles, text }) => {
  const navigate = useNavigate();
  
  return (
    <button
      type="button"
      className={`flex gap-2 absolute bottom-2 right-2 py-2 px-6 font-poppins font-medium text-[14px] text-white bg-blue-gradient hover:text-[rgba(20,20,20,.8)] rounded-[10px] mt-10 transition-colors duration-250 ${styles}`}
      onClick={() => navigate('/haze#categories')}
    >
      {text || 'Play Now'}
    </button>
  );
};

export default PlayButton;
