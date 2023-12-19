import { CgMenuLeftAlt } from "react-icons/cg";
import { MdModeNight } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const TopBar = ({ isSideBarOpened, setIsSideBarOpened }) => {
  return (
    <nav className="topbar-container">
      <div className="topbar-center">
        <div className="topbar-left">
          <CgMenuLeftAlt
            onClick={() => setIsSideBarOpened(!isSideBarOpened)}
            className="menu"
          />
          <form className="search-form" action="">
            <IoIosSearch className="search-icon" />
            <input className="search-bar" type="text" />
          </form>
        </div>
        <MdModeNight className="theme-toggle" />
      </div>
    </nav>
  );
};
export default TopBar;
