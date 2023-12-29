import { useSelector, useDispatch } from "react-redux";
import { toggleSearch } from "./features/menu/menuSlice";
import { IoIosSearch } from "react-icons/io";

const SearchOverlay = () => {
  const { searchData } = useSelector((state) => state.stock);
  const dispatch = useDispatch();

  console.log(searchData);
  return (
    <form
      className="overlay-search-form"
      onFocus={() => dispatch(toggleSearch(true))}
      onBlur={() => dispatch(toggleSearch(false))}
    >
      <IoIosSearch className="overlay-search-icon" />
      <input className="search-bar-overlay-container"></input>
      <div className="search-overlay-container"></div>
    </form>
  );
};
export default SearchOverlay;
