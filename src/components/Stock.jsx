import {
  IgrFinancialChart,
  IgrFinancialChartModule,
  MarkerType,
} from "igniteui-react-charts";
import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../App";

IgrFinancialChartModule.register();

const Stock = ({ meta, values }) => {
  const { setStartDate, setEndDate, setInterval } = useContext(GlobalContext);
  const [chartData, setChartData] = useState([]);

  const setDates = (action) => {
    const date = new Date();
    setEndDate(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );
    switch (action) {
      // 1D
      case 0:
        console.log("1D");
        break;
      // 5D
      case 1:
        date.setDate(date.getDate() - 5);
        setInterval("30min");
        break;
      // 1M
      case 2:
        console.log("1M");

        break;
      // 6M
      case 3:
        console.log("6M");

        break;
      // YTD
      case 4:
        console.log("YTD");

        break;
      // 1Y
      case 5:
        console.log("1Y");

        break;
    }
    setStartDate(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );
  };

  useEffect(() => {
    processData(values);
  }, [values]);

  const processData = (values) => {
    const stockData = values.map((item) => ({
      ...item,
      datetime: new Date(item.datetime),
      close: parseFloat(item.close),
    }));

    let minVal = Number.MAX_VALUE;
    let maxVal = Number.MIN_VALUE;
    let minIndex = 0;
    let maxIndex = 0;

    stockData.forEach((item, index) => {
      if (minVal > item.close) {
        minVal = item.close;
        minIndex = index;
      }
      if (maxVal < item.close) {
        maxVal = item.close;
        maxIndex = index;
      }
    });

    setChartData(stockData);
  };

  return (
    <div className="stock-container">
      <div>
        <div className="stock-title">{meta.symbol}</div>
        <div className="stock-price">
          {parseInt(values[0].close).toFixed(2)}
        </div>
      </div>
      <div className="btn-container">
        <button onClick={() => setDates(0)} className="btn" type="button">
          1D
        </button>
        <button onClick={() => setDates(1)} className="btn" type="button">
          5D
        </button>
        <button onClick={() => setDates(2)} className="btn" type="button">
          1M
        </button>
        <button onClick={() => setDates(3)} className="btn" type="button">
          6M
        </button>
        <button onClick={() => setDates(4)} className="btn" type="button">
          YTD
        </button>
        <button onClick={() => setDates(5)} className="btn" type="button">
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
