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

  const formatX = (item) => {
    const day = item.getDate();
    const time = `${item.getHours()}:${item
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    return `${month[item.getMonth()]} ${day}  ${time}`;
  };

  const startPrice = parseFloat(values[values.length - 1].close);
  const endPrice = parseFloat(values[0].close);
  const priceChange = endPrice - startPrice;
  const percentChange = (priceChange / startPrice) * 100;

  console.log(values);

  return (
    <div className="stock-container">
      <div className="stock-main-info">
        <div className="stock-title">{meta.symbol}</div>
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
          brushes={priceChange > 0 ? "#95ce94" : "#d16666"}
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
      <div className="stock-additional-info">
        <span className="stock-additional">
          <span className="additional-title">Open</span>
          {parseFloat(values[0].open).toFixed(2)}
        </span>
        <span className="stock-additional">
          <span className="additional-title">High</span>
          {parseFloat(values[0].high).toFixed(2)}
        </span>
        <span className="stock-additional">
          <span className="additional-title">Low</span>
          {parseFloat(values[0].low).toFixed(2)}
        </span>
      </div>
    </div>
  );
};
export default Stock;
