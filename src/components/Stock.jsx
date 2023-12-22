import {
  IgrFinancialChart,
  IgrFinancialChartModule,
  MarkerType,
} from "igniteui-react-charts";
import { useState, useEffect } from "react";

IgrFinancialChartModule.register();

const Stock = ({ meta, values }) => {
  const [chartData, setChartData] = useState([]);

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
        <button className="btn" type="button">
          1D
        </button>
        <button className="btn" type="button">
          5D
        </button>
        <button className="btn" type="button">
          1M
        </button>
        <button className="btn" type="button">
          6M
        </button>
        <button className="btn" type="button">
          YTD
        </button>
        <button className="btn" type="button">
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
