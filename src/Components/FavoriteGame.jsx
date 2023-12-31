import { ScrollReveal } from "reveal-on-scroll-react";
import { apple, ui, google } from "../assets";
import styles, { layout } from "../style";

const FavoriteGame = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={ui} alt="ui" className="w-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <ScrollReveal.h2 className={styles.heading2}>
        Find your next favorite <br className="sm:block hidden" /> game in just
        a few clicks.
      </ScrollReveal.h2>
      <ScrollReveal.p
        delay={0.4}
        className={`${styles.paragraph} max-w-[470px] mt-5`}
      >
        Browse our extensive catalog of games and discover new titles to add to
        your collection. With Haze, it's easy to find the perfect game for you.
      </ScrollReveal.p>
      <ScrollReveal.div
        delay={0.8}
        className="flex flex-row flex-wrap sm:mt-10 mt-6"
      >
        <img
          src={apple}
          alt="google_play"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </ScrollReveal.div>
    </div>
  </section>
);

export default FavoriteGame;
