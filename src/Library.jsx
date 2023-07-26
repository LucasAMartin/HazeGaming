import styles from "./style";
import { Sidebar, HazeNavbar, LibraryDisplay } from "./components";

const Haze = () => (
    <div className=" bg-darkPurple overflow-hidden">
      <div className="flex flex-col h-screen overflow-hidden">
      <div className={`sm:pr-16 pr-6 pl-4 ${styles.flexCenter}`}>
          <div className="w-full overflow-x-hidden">
            <HazeNavbar message="Lucas's Library"/>
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
              <LibraryDisplay/>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default Haze;
