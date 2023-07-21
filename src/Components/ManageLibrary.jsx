import { mobileUI } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const ManageLibrary = () => (
  <section id="mobile" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily manage your game library</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Haze makes it easy to keep track of your games and stay up-to-date with
        our intuitive mobile app. Our modern interface lets you organize your
        library and quickly find the games you want to play.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={mobileUI} alt="billing" className="w-[100%] z-10" />
      {/* gradient start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 purple__gradient" />
        {/* gradient end */}
    </div>
  </section>
);

export default ManageLibrary;
