import styles from "./style";
import { Sidebar, HazeNavbar, GameDisplay } from "./components";

const Haze = () => (
    <div className=" bg-primary overflow-hidden">
      <div className="flex flex-col h-screen overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className="w-full overflow-x-hidden">
            <HazeNavbar />
          </div>
        </div>
        <div className="flex flex-1 overflow-y-scroll">
          <div className="fixed z-40">
            <Sidebar/>
          </div>
          <div
            className={`${styles.paddingX} ${styles.flexStart} flex-1 flex justify-center`}
          >
            <div className={`w-[90%] sm:ml-[15%] h-full`}>
              <GameDisplay />
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default Haze;
