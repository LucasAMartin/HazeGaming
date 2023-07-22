import styles from "./style";
import { Sidebar, Navbar, GameDisplay } from "./components";

const Haze = () => (
  <div className="flex justify-center w-full bg-primary overflow-hidden fixed">
    <div className={`${styles.boxWidth} bg-primary overflow-hidden`}>
      <div className="flex flex-col h-screen">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} w-full`}>
            <Navbar />
          </div>
        </div>
        <div className="flex flex-1 overflow-y-scroll">
          <div className="fixed">
          <Sidebar />
          </div>
          <div className={`${styles.paddingX} ${styles.flexStart} flex-1`}>
            <div className="w-[100%] h-full ml-[20%]">
              <GameDisplay/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Haze;
