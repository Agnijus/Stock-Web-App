import { BiSolidGraduation } from "react-icons/bi";
import { TiStarFullOutline } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { isDarkModeActive } = useSelector((state) => state.menu);
  return (
    <section
      className={`homepage-container ${
        isDarkModeActive ? "homepage-dark" : ""
      }`}
    >
      <div className="homepage-center">
        <div className="homepage-section">
          <p>
            Use the <IoIosSearch className="homepage-icon" /> feature to{" "}
            <strong>search</strong> through an extensive database and discover
            the stocks you're interested in. Get real-time data and analytics.
          </p>
        </div>
        <div className="homepage-section">
          <p>
            <strong>Favorite</strong> your stocks and create a personalized
            watchlist with the <TiStarFullOutline className="homepage-icon" />{" "}
            feature. Track their performance easily for effective portfolio
            management.
          </p>
        </div>
        <div className="homepage-section">
          <p>
            Leverage our <BiSolidGraduation className="homepage-icon" />{" "}
            comprehensive educational resources to <strong>learn</strong> about
            stock trading and make informed decisions.
          </p>
        </div>
      </div>
    </section>
  );
};
export default HomePage;
