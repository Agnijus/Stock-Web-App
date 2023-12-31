import Stock from "./Stock";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  setStock,
  setTimePeriod,
  fetchStockData,
} from "./features/stock/stockSlice";

const StockView = ({ toast }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.stock);
  const { symbol, exchange } = useParams();

  useEffect(() => {
    if (symbol && exchange) {
      dispatch(setStock({ symbol, exchange }));
      dispatch(setTimePeriod({ timeFrame: "1D", interval: "5min" }));
      dispatch(fetchStockData());
    }
  }, [symbol, exchange]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (
    !data ||
    data.code === 400 ||
    !data.meta ||
    !data.values ||
    data.values.length <= 1
  ) {
    return (
      <div className="not-enough-data">
        No sufficient trading data available for {data?.meta?.symbol}
        {data?.meta?.exchange}.
      </div>
    );
  }

  if (error) {
    return <div>Error... {error}</div>;
  }
  return (
    <section className="product-view-container">
      <Stock {...data} toast={toast} />
    </section>
  );
};
export default StockView;
