import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { ScrollReveal } from "reveal-on-scroll-react";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section} sm:py-32 py-12 >
    <ScrollReveal.div
      animation="slide-in-bottom"
      className={layout.sectionInfo}
    >
      <h2 className={styles.heading2}>
        You play the games, <br className="sm:block hidden" /> we’ll handle the
        rest.
      </h2>
      <ScrollReveal.div delay={0.6}>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With Haze, you can focus on what really matters: gaming. Our platform
          makes it easy to find, purchase, and manage your games.
        </p>
        <Button styles={`mt-10`} />
      </ScrollReveal.div>
    </ScrollReveal.div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <ScrollReveal.div delay={index * 0.4}>
          <FeatureCard key={feature.id} {...feature} index={index} />
        </ScrollReveal.div>
      ))}
    </div>
  </section>
);

export default Business;
