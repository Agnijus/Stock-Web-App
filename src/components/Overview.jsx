import { useEffect } from "react";
import customFetch from "../util";
import { useFetchStocks } from "./reactQueryCustomHooks";

const Overview = () => {
  const { isLoading, isError, data } = useFetchStocks();

  console.log(data);

  return <div className="overview-container"></div>;
};
export default Overview;
