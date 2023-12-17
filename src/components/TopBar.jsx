import { CgMenuLeftAlt } from "react-icons/cg";
import { useState } from "react";

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
        <div className="theme-toggle">+</div>
      </div>
    </nav>
  );
};
export default TopBar;
