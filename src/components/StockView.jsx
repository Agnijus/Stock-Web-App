import Stock from "./Stock";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { SyncLoader } from "react-spinners";

import {
  setStock,
  setTimePeriod,
  fetchStockData,
} from "./features/stock/stockSlice";

const StockView = ({ toast }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.stock);
  const { symbol, exchange } = useParams();
  const location = useLocation();
  const datetime = location.state?.datetime;

  useEffect(() => {
    if (symbol && exchange) {
      dispatch(setStock({ symbol, exchange }));
      dispatch(setTimePeriod({ timeFrame: "1D", interval: "5min" }));
      dispatch(fetchStockData(datetime));
    }
  }, [symbol, exchange, datetime]);

  if (loading) {
    return (
      <SyncLoader cssOverride={{ margin: "2rem" }} size={15} color="grey" />
    );
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
