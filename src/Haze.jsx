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
          <div className="fixed">
            <Sidebar/>
          </div>
          <div
            className={`${styles.paddingX} ${styles.flexStart} flex-1 flex justify-center`}
          >
            <div className={`w-[90%] sm:ml-[12%] h-full`}>
            <div className="absolute z-[0] w-[60%] h-[90%] ml-[20%] rounded-full purple__gradient top-0" />
              <GameDisplay/>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default Haze;
