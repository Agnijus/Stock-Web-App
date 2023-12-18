import { CgMenuLeftAlt } from "react-icons/cg";
import { MdModeNight } from "react-icons/md";

const TopBar = ({ isSideBarOpened, setIsSideBarOpened }) => {
  return (
    <nav className="topbar-container">
      <div className="topbar-center">
        <CgMenuLeftAlt
          onClick={() => setIsSideBarOpened(!isSideBarOpened)}
          className="menu"
        />
        <form action="">
          <input className="search-bar" type="text" />
        </form>
        <MdModeNight className="theme-toggle" />
      </div>
    </nav>
  );
};
export default TopBar;
