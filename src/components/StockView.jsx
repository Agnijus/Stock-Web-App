import React from "react";
import Stock from "./Stock";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  setStock,
  setTimePeriod,
  fetchStockData,
} from "./features/stock/stockSlice";
import NotEnoughData from "./NotEnoughData";
import { SyncLoader } from "react-spinners";

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
    return <NotEnoughData />;
  }

  if (error) {
    return <div>Error... {error}</div>;
  }
  return (
    <section
      data-testid="stock-view-default"
      className="product-view-container"
    >
      <Stock {...data} toast={toast} />
    </section>
  );
};
export default StockView;
