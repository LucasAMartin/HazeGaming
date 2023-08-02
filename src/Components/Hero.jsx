import styles from "../style";
import { newIcon, witcher } from "../assets";
import GetStarted from "./GetStarted";
import { ScrollReveal } from "reveal-on-scroll-react";


const Hero = () => {

  return (
    <section id="home" className={`flex md:flex-row flex-col py-8 z-0`}>
      <ScrollReveal.div animation="slide-in-left" className={`flex-1 ${styles.flexStart} flex-col gap-4 pt-4 xl:px-0 sm:px-16 px-6`}>
        <ScrollReveal.div delay={.6} className="flex flex-row items-center py-[10px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={newIcon} alt="discount" className="z-0 first-line:w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span>Make a</span> <span className="text-white">free account</span>
            <span> and Join</span> <span className="text-white">thousands of gamers</span>
          </p>
        </ScrollReveal.div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <ScrollReveal.div delay={.6}className="ss:flex hidden md:mr-4 mr-0 ">
            <GetStarted />
          </ScrollReveal.div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Gaming Platform.
        </h1>
        <ScrollReveal.p delay={.6} className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Haze is the ultimate destination for gamers. Purchase and manage your games, add friends, and play on our dedicated servers.
        </ScrollReveal.p>
      </ScrollReveal.div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div animation="slide-in-right" className="z-[5]">
        <img src={witcher} alt="billing" className="w-[100%] h-[100%] relative z-[5] max-h-[640px] max-w-[640px]" />
        </div>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 purple__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;