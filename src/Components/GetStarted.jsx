import styles from "../style";
import { arrowUp } from "../assets";
import { useNavigate } from 'react-router-dom';


const GetStarted = () => {
  const navigate = useNavigate();

  return(
  <div onClick={() => navigate('/haze')} className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-purple-gradient p-[2px] cursor-pointer group`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full hover:bg-transparent transition-colors 250ms`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-white group-hover:text-black">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-white group-hover:text-black">Started</span>
      </p>
    </div>
  </div>
  );
};
export default GetStarted;
