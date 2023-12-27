import {
  IgrFinancialChart,
  IgrFinancialChartModule,
  MarkerType,
} from "igniteui-react-charts";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTimePeriod, fetchStockData } from "./features/stock/stockSlice";

IgrFinancialChartModule.register();

const Stock = ({ meta, values }) => {
  const { timeFrame } = useSelector((state) => state.stock);
  const dispatch = useDispatch();
  const [chartData, setChartData] = useState([]);
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

  useEffect(() => {
    const processedData = values.map((item) => ({
      datetime: new Date(item.datetime),
      close: parseFloat(item.close),
    }));
    setChartData(processedData);
  }, [values]);

  // const displayedDays = new Set();

  const formatX = (item) => {
    const day = item.getDate();
    const time = `${item.getHours()}:${item
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    return `${month[item.getMonth()]} ${day}  ${time}`;
  };

  console.log(values);

  // const change = values[values.length - 1].close - values[0].close;
  // const change = values[0].close - values[values.length - 1].close;
  // const percentChange = (change / values[0].close) * 100;
  // console.log(change, percentChange);

  // Ensure that you're getting numerical values for the prices
  const startPrice = parseFloat(values[values.length - 1].close); // Starting price
  const endPrice = parseFloat(values[0].close); // Ending price

  // Calculate the change in price
  const priceChange = endPrice - startPrice;

  // Calculate the percentage change
  const percentChange = (priceChange / startPrice) * 100;

  // Log the change and the percentage change, rounding the percentage to two decimal places
  console.log(`Change: ${priceChange}`);
  console.log(`Percentage Change: ${percentChange.toFixed(2)}%`);

  return (
    <div className="stock-container">
      <div className="stock-main-info">
        <div className="stock-title">{meta.symbol}</div>
        <div className="stock-price">
          {`${parseFloat(values[0].close).toFixed(2)} ${meta.currency}`}
        </div>
        <div className="stock-change">
          <span className="stock-price-change">
            {priceChange > 0 && "+"}
            {priceChange.toFixed(2)}
          </span>
          <span className="stock-price-procent-change">{`(${percentChange.toFixed(
            2
          )}%)`}</span>
        </div>
      </div>
      <div className="btn-container">
        <button
          onClick={() => {
            dispatch(setTimePeriod({ timeFrame: "1D", interval: "5min" }));
            dispatch(fetchStockData());
          }}
          className="btn"
          type="button"
        >
          1D
        </button>
        <button
          onClick={() => {
            dispatch(setTimePeriod({ timeFrame: "5D", interval: "30min" }));
            dispatch(fetchStockData());
          }}
          className="btn"
          type="button"
        >
          5D
        </button>
        <button
          onClick={() => {
            dispatch(setTimePeriod({ timeFrame: "1M", interval: "1day" }));
            dispatch(fetchStockData());
          }}
          className="btn"
          type="button"
        >
          1M
        </button>
        <button
          onClick={() => {
            dispatch(setTimePeriod({ timeFrame: "6M", interval: "1day" }));
            dispatch(fetchStockData());
          }}
          className="btn"
          type="button"
        >
          6M
        </button>
        <button
          onClick={() => {
            dispatch(setTimePeriod({ timeFrame: "YTD", interval: "1day" }));
            dispatch(fetchStockData());
          }}
          className="btn"
          type="button"
        >
          YTD
        </button>
        <button
          onClick={() => {
            dispatch(setTimePeriod({ timeFrame: "1Y", interval: "1day" }));
            dispatch(fetchStockData());
          }}
          className="btn"
          type="button"
        >
          1Y
        </button>
      </div>
      <div className="stock-chart">
        <IgrFinancialChart
          width="100%"
          height="250px "
          chartType="Line"
          brushes="#b3d9b3"
          outlines="#80c080"
          thickness={2}
          titleAlignment="Left"
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
        />
      </div>
    </div>
  );
};
export default Stock;
