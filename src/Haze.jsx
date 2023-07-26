import styles from "./style";
import { Sidebar, HazeNavbar, GameDisplay } from "./Components";

const Haze = () => (
  <div className=" bg-darkPurple overflow-hidden">
    <div className="flex flex-col h-screen overflow-hidden">
      <div className={`sm:pr-16 pr-6 pl-4 ${styles.flexCenter}`}>
        <div className="w-full overflow-x-hidden">
          <HazeNavbar message="Good afternoon, Lucas!" />
        </div>
      </div>
      <div className="flex flex-1 overflow-y-scroll no-scrollbar">
        <div className="fixed z-50">
          <Sidebar />
        </div>
        <div
          className={`${styles.paddingX} ${styles.flexStart} flex-1 flex justify-center`}
        >
          <div className={`w-[90%] sm:ml-[12%] h-full`}>
            <div className="absolute z-[0] w-[80%] h-[90%] rounded-full purple__gradient top-0" />
            <GameDisplay />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Haze;
