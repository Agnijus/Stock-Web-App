import { useEffect } from "react";
import customFetch from "../util";

const Overview = () => {
  const fetchStocks = async () => {
    const { data } = await customFetch.get(
      "/time_series?symbol=tsla&interval=1month"
    );
    // const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  return <div className="overview-container"></div>;
};
export default Overview;
