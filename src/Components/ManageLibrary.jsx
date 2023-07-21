import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily manage your game library</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Haze makes it easy to keep track of your games and stay up-to-date with
        the latest releases. Our intuitive interface lets you organize your
        library and quickly find the games you want to play.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
