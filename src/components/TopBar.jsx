import { CgMenuLeftAlt } from "react-icons/cg";
import { MdModeNight } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, toggleSearch } from "./features/menu/menuSlice";

const TopBar = () => {
  const { isSearchActive } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  return (
    <nav className="topbar-container">
      <div className="topbar-center">
        <div className="topbar-left">
          <CgMenuLeftAlt
            onClick={() => dispatch(toggleSidebar())}
            className="menu"
          />
          <form className="search-form search-form-active" action="">
            <IoIosSearch className="search-icon" />
            <input
              onFocus={() => dispatch(toggleSearch(true))}
              className={`search-bar ${
                isSearchActive ? "search-bar-active" : ""
              }`}
              type="text"
            />
          </form>
        </div>
        <MdModeNight className="theme-toggle" />
      </div>
    </nav>
  );
};
export default TopBar;
