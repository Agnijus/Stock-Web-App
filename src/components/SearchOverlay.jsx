import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { toggleSearch } from "./features/menu/menuSlice";
import { IoIosSearch } from "react-icons/io";
import { clearSearchData, searchStocks } from "./features/stock/stockSlice";

const SearchOverlay = () => {
  const { searchData } = useSelector((state) => state.stock);
  const { isSearchActive } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const overlayRef = useRef();

  const testSearchData = [
    {
      id: 124363,
      symbol: "TSL",
      name: "Titanium Sands Ltd",
      currency: "AUD",
      exchange: "ASX",
      mic_code: "XASX",
      country: "Australia",
      type: "Common Stock",
    },
    {
      id: 124364,
      symbol: "TSL",
      name: "Tree Island Steel Ltd",
      currency: "CAD",
      exchange: "TSX",
      mic_code: "XTSE",
      country: "Canada",
      type: "Common Stock",
    },
    {
      id: 124365,
      symbol: "TSL",
      name: "Titanium Sands Limited",
      currency: "AUD",
      exchange: "CXA",
      mic_code: "CXAC",
      country: "Australia",
      type: "Common Stock",
    },
    {
      id: 124366,
      symbol: "TSL",
      name: "Tessellis S.p.A.",
      currency: "EUR",
      exchange: "MTA",
      mic_code: "XMIL",
      country: "Italy",
      type: "Common Stock",
    },
    {
      id: 124367,
      symbol: "TSL1",
      name: "LS 1x Tesla Tracker ETC",
      currency: "EUR",
      exchange: "LSE",
      mic_code: "XLON",
      country: "United Kingdom",
      type: "Common Stock",
    },
    {
      id: 124368,
      symbol: "TSL2",
      name: "Leverage Shares 2x Tesla ETC",
      currency: "USD",
      exchange: "LSE",
      mic_code: "XLON",
      country: "United Kingdom",
      type: "Common Stock",
    },
    {
      id: 124369,
      symbol: "TSL3",
      name: "Leverage Shares 3x Tesla ETP",
      currency: "USD",
      exchange: "LSE",
      mic_code: "XLON",
      country: "United Kingdom",
      type: "Common Stock",
    },
    {
      id: 124370,
      symbol: "TSLA",
      name: "Tesla Inc",
      currency: "PEN",
      exchange: "BVL",
      mic_code: "XLIM",
      country: "Peru",
      type: "Common Stock",
    },
    {
      id: 124371,
      symbol: "TSLA",
      name: "Tesla Inc",
      currency: "USD",
      exchange: "NASDAQ",
      mic_code: "XNGS",
      country: "United States",
      type: "Common Stock",
    },
    {
      id: 124372,
      symbol: "TSLA",
      name: "1X TSLA",
      currency: "EUR",
      exchange: "Euronext",
      mic_code: "XAMS",
      country: "Netherlands",
      type: "Common Stock",
    },
    {
      id: 124373,
      symbol: "TSLA",
      name: "Tesla, Inc.",
      currency: "EUR",
      exchange: "MTA",
      mic_code: "XMIL",
      country: "Italy",
      type: "Common Stock",
    },
    {
      id: 124374,
      symbol: "TSLA",
      name: "Tesla, Inc.",
      currency: "EUR",
      exchange: "VSE",
      mic_code: "XWBO",
      country: "Austria",
      type: "Common Stock",
    },
    {
      id: 124375,
      symbol: "TSLA",
      name: "Tesla, Inc.",
      currency: "ARS",
      exchange: "BCBA",
      mic_code: "XBUE",
      country: "Argentina",
      type: "Common Stock",
    },
    {
      id: 124376,
      symbol: "TSLA",
      name: "LS 1x Tesla Tracker ETC",
      currency: "GBp",
      exchange: "LSE",
      mic_code: "XLON",
      country: "United Kingdom",
      type: "Common Stock",
    },
    {
      id: 124377,
      symbol: "TSLA",
      name: "Tesla, Inc.",
      currency: "MXN",
      exchange: "BMV",
      mic_code: "XMEX",
      country: "Mexico",
      type: "Common Stock",
    },
    {
      id: 124378,
      symbol: "TSLA",
      name: "Tesla, Inc.",
      currency: "CAD",
      exchange: "NEO",
      mic_code: "NEOE",
      country: "Canada",
      type: "Common Stock",
    },
    {
      id: 124379,
      symbol: "TSLA34",
      name: "Tesla, Inc.",
      currency: "BRL",
      exchange: "Bovespa",
      mic_code: "BVMF",
      country: "Brazil",
      type: "Common Stock",
    },
    {
      id: 124380,
      symbol: "TSLAD",
      name: "TESLA INC",
      currency: "USD",
      exchange: "BCBA",
      mic_code: "XBUE",
      country: "Argentina",
      type: "Common Stock",
    },
    {
      id: 124381,
      symbol: "TSLL",
      name: "OI S.A. SP. ADR 5",
      currency: "EUR",
      exchange: "XBER",
      mic_code: "XBER",
      country: "Germany",
      type: "Common Stock",
    },
    {
      id: 124382,
      symbol: "TSLL",
      name: "Oi S.A.",
      currency: "EUR",
      exchange: "FSX",
      mic_code: "XFRA",
      country: "Germany",
      type: "Common Stock",
    },
    {
      id: 124383,
      symbol: "TSLQ",
      name: "Leverage Shares -3x Short Tesla ETC",
      currency: "GBp",
      exchange: "LSE",
      mic_code: "XLON",
      country: "United Kingdom",
      type: "Common Stock",
    },
    {
      id: 124384,
      symbol: "TSLQ",
      name: "-3X SHORT TSLA",
      currency: "EUR",
      exchange: "Euronext",
      mic_code: "XAMS",
      country: "Netherlands",
      type: "Common Stock",
    },
    {
      id: 124385,
      symbol: "TSLS",
      name: "Leverage Shares -1x Tesla ETC",
      currency: "USD",
      exchange: "LSE",
      mic_code: "XLON",
      country: "United Kingdom",
      type: "Common Stock",
    },
    {
      id: 124386,
      symbol: "TSLTF",
      name: "TransAlta Corporation",
      currency: "USD",
      exchange: "OTC",
      mic_code: "PINX",
      country: "United States",
      type: "Preferred Stock",
    },
    {
      id: 124387,
      symbol: "TSLV",
      name: "Tier One Silver Inc.",
      currency: "CAD",
      exchange: "TSXV",
      mic_code: "XTSX",
      country: "Canada",
      type: "Common Stock",
    },
    {
      id: 124388,
      symbol: "TSLVF",
      name: "Tier One Silver Inc.",
      currency: "USD",
      exchange: "OTC",
      mic_code: "PINX",
      country: "United States",
      type: "Common Stock",
    },
    {
      id: 124389,
      symbol: "TSLX",
      name: "TPG Specialty Lending Inc",
      currency: "USD",
      exchange: "NYSE",
      mic_code: "XNYS",
      country: "United States",
      type: "Common Stock",
    },
  ];

  const handleSearchOnChange = () => {
    const term = inputRef.current.value;
    if (term.length > 1) {
      dispatch(searchStocks(term));
      console.log(term);
    } else {
      dispatch(clearSearchData());
    }
  };

  useEffect(() => {
    console.log("Updated searchData:", searchData);
  }, [searchData]); // Dependency on searchData

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
                onClick={() => console.log("clicked: " + symbol)}
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
