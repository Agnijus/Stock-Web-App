import React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdModeNight } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSidebar,
  toggleSearch,
  toggleDarkMode,
} from "./features/menu/menuSlice";
import { CiLight } from "react-icons/ci";

const TopBar = () => {
  const { isSearchActive, isDarkModeActive } = useSelector(
    (state) => state.menu
  );
  const dispatch = useDispatch();

  return (
    <nav
      className={`topbar-container ${isDarkModeActive ? "topbar-dark" : ""}`}
    >
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
              disabled={isSearchActive}
            />
          </form>
        </div>
        {isDarkModeActive ? (
          <CiLight
            className="theme-toggle"
            onClick={() => dispatch(toggleDarkMode())}
          />
        ) : (
          <MdModeNight
            className="theme-toggle"
            onClick={() => dispatch(toggleDarkMode())}
          />
        )}
      </div>
    </nav>
  );
};
export default TopBar;
