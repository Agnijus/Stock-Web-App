import Stock from "./Stock";
import { useFetchStocks } from "./reactQueryCustomHooks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStockData } from "./features/stock/stockSlice";

const Overview = () => {
  // const { isLoading, isError, error, data } = useFetchStocks();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch(fetchStockData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error... {error}</div>;
  }

  return (
    <section className="overview-container">
      <div className="stock-grid">
        {Object.keys(data).map((key) => {
          return <Stock key={key} {...data[key]} />;
        })}
      </div>
    </section>
  );
};
export default Overview;
