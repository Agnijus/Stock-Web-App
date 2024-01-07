import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { toggleSearch } from "./features/menu/menuSlice";
import { IoIosSearch } from "react-icons/io";
import { clearSearchData, searchStocks } from "./features/stock/stockSlice";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";

const SearchOverlay = () => {
  const { searchData } = useSelector((state) => state.stock);
  const { isSearchActive, isDarkModeActive } = useSelector(
    (state) => state.menu
  );
  const dispatch = useDispatch();
  const inputRef = useRef();
  const overlayRef = useRef();
  const navigate = useNavigate();

  const debouncedSearchStocks = debounce((term) => {
    if (term.length > 1) {
      dispatch(searchStocks(term));
    } else {
      dispatch(clearSearchData());
    }
  }, 300);

  const handleSearchOnChange = () => {
    const term = inputRef.current.value;
    debouncedSearchStocks(term);
  };

  const handleSelect = (symbol, exchange) => {
    dispatch(toggleSearch(false));
    navigate(`/stock/${symbol}/${exchange}`);
  };

  useEffect(() => {
    dispatch(clearSearchData());
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        dispatch(toggleSearch(false));
      }
    };

    if (isSearchActive) {
      document.addEventListener("mousedown", handleClickOutside);
      inputRef.current.focus();
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchActive, dispatch]);

  return (
    <form
      ref={overlayRef}
      className={`overlay-search-form ${
        isDarkModeActive ? "overlay-dark" : ""
      }`}
      tabIndex="-1"
    >
      <IoIosSearch className="overlay-search-icon" />
      <input
        ref={inputRef}
        onChange={handleSearchOnChange}
        className={`search-bar-overlay-container ${
          !searchData.length > 0 ? "search-no-results" : ""
        } `}
      ></input>
      <div className="search-results-container">
        {searchData.length > 0 &&
          searchData.map((stock) => {
            const { id, symbol, exchange, name } = stock;
            return (
              <div
                onClick={() => handleSelect(symbol, exchange)}
                key={id}
                className="stock-single-result"
              >
                <div className="result-top-line">
                  <span className="result-symbol">{symbol}</span>
                  <span className="result-exchange">{exchange}</span>
                </div>
                <div className="result-name">{name}</div>
              </div>
            );
          })}
      </div>
    </form>
  );
};
export default SearchOverlay;
