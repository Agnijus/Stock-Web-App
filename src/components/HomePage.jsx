import { BiSolidGraduation } from "react-icons/bi";
import { TiStarFullOutline } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchHomePageStockData } from "./features/stock/stockSlice";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isDarkModeActive } = useSelector((state) => state.menu);
  const { homePageStockData } = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch(fetchHomePageStockData());
  }, []);

  const handleClick = (symbol, datetime) => {
    navigate(`/stock/${symbol}/NASDAQ`, { state: { datetime } });
  };

  return (
    <section
      className={`homepage-container ${
        isDarkModeActive ? "homepage-dark" : ""
      }`}
    >
      <div className="homepage-stock-grid">
        {homePageStockData &&
          Object.entries(homePageStockData).map(([key, value]) => {
            const { symbol, change, percent_change, datetime } = value;
            console.log(value);
            return (
              <div
                onClick={() => handleClick(symbol, datetime)}
                key={key}
                className="homepage-grid-item"
              >
                <span className="homepage-grid-symbol">{symbol}</span>

                <div
                  className={`homepage-grid-change ${
                    change < 0 ? "homepage-grid-change-negative" : ""
                  }`}
                >
                  <div className="homepage-grid-percent-change">{`${parseFloat(
                    percent_change
                  ).toFixed(2)}%`}</div>
                  <div className="homepage-grid-arrow">
                    {change > 0 ? <FaArrowUp /> : <FaArrowDown />}
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="homepage-center">
        <div className="homepage-section">
          <div className="card-header">
            <div className="card-icon">
              <IoIosSearch className="homepage-icon" />
            </div>
            <h3 className="card-title">Search</h3>
          </div>
          <div className="card-content">
            <p>
              Explore an extensive database and discover the stocks you're
              interested in with real-time data and analytics.
            </p>
          </div>
        </div>
        <div className="homepage-section">
          <div className="card-header">
            <div className="card-icon">
              <TiStarFullOutline className="homepage-icon" />
            </div>
            <h3 className="card-title">Favourite</h3>
          </div>
          <div className="card-content">
            <p>
              Favorite your stocks and create a personalized watchlist. Track
              their performance easily for effective portfolio management.
            </p>
          </div>
        </div>
        <div className="homepage-section">
          <div className="card-header">
            <div className="card-icon">
              <BiSolidGraduation className="homepage-icon" />
            </div>
            <h3 className="card-title">Education</h3>
          </div>
          <div className="card-content">
            <p>
              Leverage our comprehensive educational resources to learn about
              stock trading and make informed decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomePage;
