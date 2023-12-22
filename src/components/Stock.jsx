import {
  IgrFinancialChart,
  IgrFinancialChartModule,
  MarkerType,
} from "igniteui-react-charts";
import { useState, useEffect, useContext, memo } from "react";
import { GlobalContext } from "../App";

IgrFinancialChartModule.register();

const Stock = memo(({ meta, values }) => {
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
        date.setDate(date.getDate() - 1);
        setInterval("5min");
        break;
      // 5D
      case 1:
        date.setDate(date.getDate() - 5);
        setInterval("30min");
        break;
      // 1M
      case 2:
        date.setDate(date.getDate() - 30);
        setInterval("1day");
        break;
      // 6M
      case 3:
        date.setDate(date.getDate() - 180);
        setInterval("1day");
        break;

        break;
      // YTD
      case 4:
        console.log("YTD");
        date.setMonth(0);
        date.setDate(1);
        setInterval("1day");
        break;
      // 1Y
      case 5:
        date.setDate(date.getDate() - 365);
        console.log("1Y");
        break;
    }
    setStartDate(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );
  };

  useEffect(() => {
    if (values) {
      const processedData = values.map((item) => ({
        datetime: new Date(item.datetime),
        close: parseFloat(item.close),
      }));
      setChartData(processedData);
    }
  }, [values]);

  console.log(chartData);

  return (
    <div className="stock-container">
      <div>
        {meta && <div className="stock-title">{meta.symbol}</div>}
        <div className="stock-price">
          {values && parseInt(values[0].close).toFixed(2)}
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
        {chartData && (
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
        )}
      </div>
    </div>
  );
});
export default Stock;
