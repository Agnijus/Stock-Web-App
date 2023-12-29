import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { toggleSearch } from "./features/menu/menuSlice";
import { IoIosSearch } from "react-icons/io";

const SearchOverlay = () => {
  const { searchData } = useSelector((state) => state.stock);
  const { isSearchActive } = useSelector((state) => state.menu);

  const dispatch = useDispatch();
  const inputRef = useRef();
  const overlayRef = useRef();

  const handleSearchOnChange = () => {
    const term = inputRef.current.value;
    if (term.length > 1) {
      // dispatch(searchStocks(term));
      console.log(term);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        dispatch(toggleSearch(false));
      }
    };

    if (isSearchActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchActive, dispatch]);

  return (
    <form ref={overlayRef} className="overlay-search-form">
      <IoIosSearch className="overlay-search-icon" />
      <input
        ref={inputRef}
        onChange={handleSearchOnChange}
        className="search-bar-overlay-container"
      ></input>
      <div className="search-overlay-container"></div>
    </form>
  );
};
export default SearchOverlay;
