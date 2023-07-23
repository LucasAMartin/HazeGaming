import styles from "./style";
import { Sidebar, HazeNavbar, GameDisplay } from "./components";

const Haze = () => (
    <div className=" bg-primary overflow-hidden">
      <div className="flex flex-col h-screen">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className="w-full">
            <HazeNavbar />
          </div>
        </div>
        <div className="flex flex-1 overflow-y-scroll">
          <div className="fixed">
            <Sidebar />
          </div>
          <div
            className={`${styles.paddingX} ${styles.flexStart} flex-1 flex justify-center`}
          >
            <div className={`md:w-[1300px] md:ml-[10%] sm:w-[500px] h-full`}>
              <GameDisplay />
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default Haze;
