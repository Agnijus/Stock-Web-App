import { CgMenuLeftAlt } from "react-icons/cg";
import { MdModeNight } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "./features/menu/menuSlice";
import { searchStocks, setSearchTerm } from "./features/stock/stockSlice";
import { useRef, useEffect } from "react";
import SearchOverlay from "./SearchOverlay";
import { toggleSearch } from "./features/menu/menuSlice";

const TopBar = () => {
  const { isSearchActive } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSearchOnChange = () => {
    const term = inputRef.current.value;
    if (term.length > 1) {
      dispatch(searchStocks(term));
    }
  };

  return (
    <nav className="topbar-container">
      <div className="topbar-center">
        <div className="topbar-left">
          <CgMenuLeftAlt
            onClick={() => dispatch(toggleSidebar())}
            className="menu"
          />
          <form
            onSubmit={() => dispatch()}
            className="search-form search-form-active"
            action=""
          >
            <IoIosSearch className="search-icon" />
            <input
              ref={inputRef}
              onFocus={() => dispatch(toggleSearch(true))}
              onBlur={() => dispatch(toggleSearch(false))}
              onChange={handleSearchOnChange}
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
