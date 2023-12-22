import Stock from "./Stock";
import { useFetchStocks } from "./reactQueryCustomHooks";
import { useState, useEffect, useContext } from "react";

const Overview = () => {
  const { isLoading, isError, error, data } = useFetchStocks();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error... {error}</div>;
  }

  return (
    <section className="overview-container">
      <div className="stock-grid">
        {Object.keys(data).map((key) => {
          return <Stock {...data[key]} />;
        })}
      </div>
    </section>
  );
};
export default Overview;
