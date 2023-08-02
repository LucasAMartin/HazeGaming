import React from "react";
import { useNavigate } from 'react-router-dom';

const PlayButton = ({ styles, text }) => {
  const navigate = useNavigate();
  
  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-transparent border-2 border-brightPurple hover:text-black hover:bg-brightPurple rounded-[10px] mt-10 transition-colors duration-250 ${styles}`}
      onClick={() => navigate('/haze')}
    >
      {text || 'Get Started'}
    </button>
  );
};

export default PlayButton;
