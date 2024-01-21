import {
  IgrFinancialChart,
  IgrFinancialChartModule,
  MarkerType,
  IgrCategoryXAxis,
} from "igniteui-react-charts";
import { useState, useEffect, memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTimePeriod,
  fetchStockData,
  updateWishList,
  getWishList,
} from "./features/stock/stockSlice";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";

IgrFinancialChartModule.register();

const Stock = ({ meta, values, toast }) => {
  const { timeFrame, wishList } = useSelector((state) => state.stock);
  const { isSmallScreen, isDarkModeActive } = useSelector(
    (state) => state.menu
  );
  const dispatch = useDispatch();
  const [chartData, setChartData] = useState([]);
  const [isAddedToWishList, setIsAddedToWishList] = useState(null);
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [, forceUpdate] = useState(0);
  const forceRender = useCallback(() => {
    forceUpdate((n) => n + 1);
  }, []);

  useEffect(() => {
    dispatch(getWishList());
  }, [dispatch]);

  useEffect(() => {
    const isFound =
      wishList &&
      wishList.some(
        (item) => item.symbol === meta.symbol && item.exchange === meta.exchange
      );
    setIsAddedToWishList(isFound);
  }, [wishList, meta.symbol, meta.exchange]);

  useEffect(() => {
    const processedData = values.map((item) => ({
      datetime: new Date(item.datetime),
      close: parseFloat(item.close),
    }));
    setChartData(processedData);
  }, [values, wishList]);

  const formatX = (item) => {
    const day = item.getDate();
    const time = `${item.getHours()}:${item
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    return `${month[item.getMonth()]} ${day}  ${time}`;
  };

  const setButtonClass = (buttonTimeFrame) => {
    return `btn ${timeFrame === buttonTimeFrame ? "btn-active" : ""}`;
  };

  const handleTimePeriodChange = (timeFrame, interval) => {
    dispatch(setTimePeriod({ timeFrame: timeFrame, interval: interval }));
    dispatch(fetchStockData());
  };

  const handleWishList = (symbol, exchange, e) => {
    const currentlyAdded =
      wishList &&
      wishList.some(
        (item) => item.symbol === symbol && item.exchange === exchange
      );
    dispatch(updateWishList({ symbol: symbol, exchange: exchange }));
    setIsAddedToWishList(!currentlyAdded);
    forceRender();
    if (currentlyAdded) {
      toast("Removed from the Wishlist");
    } else {
      toast("Added to Wishlist");
    }
    console.log(isAddedToWishList);
  };

  const startPrice = parseFloat(values[values.length - 1].close);
  const endPrice = parseFloat(values[0].close);
  const priceChange = endPrice - startPrice;
  const percentChange = (priceChange / startPrice) * 100;

  const lightModeBrushes = priceChange > 0 ? "#95ce94" : "#d16666";
  const darkModeBrushes = priceChange > 0 ? "#55d155" : "#ff6347";

  return (
    <div className={`stock-container ${isDarkModeActive ? "stock-dark" : ""}`}>
      <div className="stock-main-info">
        <div className="stock-top-line">
          <div className="stock-title">{meta.symbol}</div>
          <TiStarFullOutline
            onClick={() => {
              handleWishList(meta.symbol, meta.exchange);
            }}
            className={`add-to-wishlist-icon ${
              isAddedToWishList ? "" : "wishlist-icon-active"
            }`}
            style={{
              color: isAddedToWishList ? "rgba(224, 191, 3, 0.7)" : "grey",
            }}
          />
        </div>
        <div className="stock-price">
          {`${parseFloat(values[0].close).toFixed(2)} ${meta.currency}`}
        </div>
        <div
          className={`stock-change ${
            priceChange < 0 && "stock-change-negative"
          }`}
        >
          <span className="stock-price-change">
            {priceChange > 0 && "+"}
            {priceChange.toFixed(2)}
          </span>
          <span className="stock-price-procent-change">
            {`(${percentChange.toFixed(2)}%)`}
          </span>
          <span className="stock-arrow">
            {priceChange > 0 ? <FaArrowUp /> : <FaArrowDown />}
          </span>
        </div>
      </div>
      <div className="btn-container">
        <button
          onClick={() => {
            handleTimePeriodChange("1D", "5min");
          }}
          className={setButtonClass("1D")}
          type="button"
        >
          1D
        </button>
        <button
          onClick={() => {
            handleTimePeriodChange("5D", "30min");
          }}
          className={setButtonClass("5D")}
          type="button"
        >
          5D
        </button>
        <button
          onClick={() => {
            handleTimePeriodChange("1M", "1day");
          }}
          className={setButtonClass("1M")}
          type="button"
        >
          1M
        </button>
        <button
          onClick={() => {
            handleTimePeriodChange("6M", "1day");
          }}
          className={setButtonClass("6M")}
          type="button"
        >
          6M
        </button>
        <button
          onClick={() => {
            handleTimePeriodChange("YTD", "1day");
          }}
          className={setButtonClass("YTD")}
          type="button"
        >
          YTD
        </button>
        <button
          onClick={() => {
            handleTimePeriodChange("1Y", "1day");
          }}
          className={setButtonClass("1Y")}
          type="button"
        >
          1Y
        </button>
      </div>
      <div className="stock-chart">
        <IgrFinancialChart
          width="100%"
          height={isSmallScreen ? "225px" : "275px"}
          chartType="Line"
          brushes={isDarkModeActive ? darkModeBrushes : lightModeBrushes}
          thickness={2}
          titleAlignment="Left"
          xAxisLabel={"xAxis"}
          yAxisMode="Numeric"
          xAxisMode={timeFrame === "5D" ? "Ordinal" : "Time"}
          xAxisFormatLabel={formatX}
          xAxisInverted={timeFrame === "5D" ? true : false}
          dataSource={chartData}
          isToolbarVisible={false}
          markerTypes={[MarkerType.None]}
          zoomSliderType="None"
          yAxisLabelLocation="OutsideLeft"
          crosshairsSnapToData={false}
          crosshairsDisplayMode="Both"
          crosshairsAnnotationEnabled={true}
          finalValueAnnotationsVisible={false}
          calloutsVisible={true}
          isHorizontalZoomEnabled={false}
          dataToolTipValueFormatMinFractions={1}
          dataToolTipHeaderText=""
          toolTipType="None"
          isSeriesHighlightingEnabled={false}
          leftMargin={0}
          plotAreaMarginRight={50}
          xAxisLabelTextStyle={isSmallScreen ? "9px arial, sans-serif" : ""}
          xAxisLabelTextColor={isDarkModeActive ? "white" : ""}
          yAxisLabelTextStyle={isSmallScreen ? "10px arial, sans-serif" : ""}
          yAxisLabelTextColor={isDarkModeActive ? "white" : ""}
          xAxisLabelRightMargin={0}
          isWindowSyncedToVisibleRange={false}
        />
      </div>
      <div className="stock-additional-info">
        <div className="stock-additional">
          <span className="additional-title">Open</span>
          {parseFloat(values[0].open).toFixed(2)}
        </div>
        <div className="stock-additional">
          <span className="additional-title">High</span>
          {parseFloat(values[0].high).toFixed(2)}
        </div>
        <div className="stock-additional">
          <span className="additional-title">Low</span>
          {parseFloat(values[0].low).toFixed(2)}
        </div>
      </div>
    </div>
  );
};
export default Stock;
