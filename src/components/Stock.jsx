import {
  IgrFinancialChart,
  IgrFinancialChartModule,
  MarkerType,
} from "igniteui-react-charts";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setOneDay,
  setFiveDays,
  setOneMonth,
  setSixMonths,
  setYearToDate,
  setOneYear,
} from "./features/stock/stockSlice";

IgrFinancialChartModule.register();

const Stock = ({ meta, values }) => {
  const dispatch = useDispatch();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (values) {
      const processedData = values.map((item) => ({
        datetime: new Date(item.datetime),
        close: parseFloat(item.close),
      }));
      setChartData(processedData);
    }
  }, []);

  console.log(chartData);

  return (
    <div className="stock-container">
      <div>
        {meta && <div className="stock-title">{meta.symbol}</div>}
        {values && (
          <div className="stock-price">
            {parseInt(values[0].close).toFixed(2)}
          </div>
        )}
      </div>
      <div className="btn-container">
        <button
          onClick={() => dispatch(setOneDay())}
          className="btn"
          type="button"
        >
          1D
        </button>
        <button
          onClick={() => dispatch(setFiveDays())}
          className="btn"
          type="button"
        >
          5D
        </button>
        <button
          onClick={() => dispatch(setOneMonth())}
          className="btn"
          type="button"
        >
          1M
        </button>
        <button
          onClick={() => dispatch(setSixMonths())}
          className="btn"
          type="button"
        >
          6M
        </button>
        <button
          onClick={() => dispatch(setYearToDate())}
          className="btn"
          type="button"
        >
          YTD
        </button>
        <button
          onClick={() => dispatch(setOneYear())}
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
          dataSource={chartData}
          isToolbarVisible={false}
          markerTypes={[MarkerType.None]}
          zoomSliderType="None"
          xAxisInverted={true}
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
          yAxisInterval={2}
          leftMargin={0}
          plotAreaMarginRight={50}
        />
      </div>
    </div>
  );
};
export default Stock;
