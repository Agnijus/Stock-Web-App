import { CgMenuLeftAlt } from "react-icons/cg";
import { MdModeNight } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "./features/menu/menuSlice";

const TopBar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="topbar-container">
      <div className="topbar-center">
        <div className="topbar-left">
          <CgMenuLeftAlt
            onClick={() => dispatch(toggleSidebar())}
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
