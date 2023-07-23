import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { ScrollReveal } from "reveal-on-scroll-react";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full purple__gradient bottom-40" />

    <div className="w-full flex items-center justify-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2} `}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Haze is the ultimate destination for gamers. But don't just take our
          word for it - here's what our users have to say:
        </p>
      </div>
    </div>

    <div className="flex flex-wrap justify-between w-full feedback-container relative z-[1]">
      {feedback.map((card, index) => (
        <ScrollReveal.div key={card.id} delay={index * 0.4}>
          <FeedbackCard {...card} />
        </ScrollReveal.div>
      ))}
    </div>
  </section>
);

export default Testimonials;
