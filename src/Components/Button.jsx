import React from "react";
import { useNavigate } from 'react-router-dom';

const PlayButton = ({ styles, text }) => {
  const navigate = useNavigate();
  
  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-purple-gradient hover:text-white rounded-[10px] mt-10 transition-colors duration-250 ${styles}`}
      onClick={() => navigate('/haze')}
    >
      {text || 'Get Started'}
    </button>
  );
};

export default PlayButton;
