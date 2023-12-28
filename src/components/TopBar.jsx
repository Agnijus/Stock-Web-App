import { CgMenuLeftAlt } from "react-icons/cg";
import { MdModeNight } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "./features/menu/menuSlice";
import { searchStocks, setSearchTerm } from "./features/stock/stockSlice";
import { useRef } from "react";
import SearchOverlay from "./SearchOverlay";

const TopBar = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  return (
    <nav className="topbar-container">
      <div className="topbar-center">
        <div className="topbar-left">
          <CgMenuLeftAlt
            onClick={() => dispatch(toggleSidebar())}
            className="menu"
          />
          <form onSubmit={() => dispatch()} className="search-form" action="">
            <IoIosSearch className="search-icon" />
            <input
              ref={inputRef}
              onChange={() => dispatch(searchStocks(inputRef.current.value))}
              className="search-bar"
              type="text"
            />
            {/* <SearchOverlay /> */}
          </form>
        </div>
        <MdModeNight className="theme-toggle" />
      </div>
    </nav>
  );
};
export default TopBar;
