import { useSelector } from "react-redux";

const NotEnoughData = () => {
  const { isDarkModeActive } = useSelector((state) => state.menu);
  console.log("Dark Mode Active:", isDarkModeActive); // Check the value in the console

  return (
    <div
      className={`not-enough-data-container ${
        isDarkModeActive ? "not-enough-data-dark" : ""
      }  `}
    >
      <div className={`not-enough-data-container-center`}>
        No recent trading data available for this stock at the moment. Please
        try again later or choose a different stock.
      </div>
    </div>
  );
};
export default NotEnoughData;
