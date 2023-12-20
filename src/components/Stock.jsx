import {
  IgrFinancialChart,
  IgrFinancialChartModule,
  MarkerType,
} from "igniteui-react-charts";
import { useState, useEffect } from "react";

const data = {
  meta: {
    symbol: "TSLA",
    interval: "1h",
    currency: "USD",
    exchange_timezone: "America/New_York",
    exchange: "NASDAQ",
    mic_code: "XNGS",
    type: "Common Stock",
  },
  values: [
    {
      datetime: "2023-12-20 15:30:00",
      open: "248.58000",
      high: "249.45000",
      low: "247.00000",
      close: "247.23990",
      volume: "12048845",
    },
    {
      datetime: "2023-12-20 14:30:00",
      open: "254.51640",
      high: "254.59000",
      low: "247.28999",
      close: "248.55000",
      volume: "28641275",
    },
    {
      datetime: "2023-12-20 13:30:00",
      open: "256.85849",
      high: "257.44000",
      low: "254.50000",
      close: "254.50121",
      volume: "10497567",
    },
    {
      datetime: "2023-12-20 12:30:00",
      open: "255.77000",
      high: "256.92999",
      low: "255.20000",
      close: "256.85999",
      volume: "10257948",
    },
    {
      datetime: "2023-12-20 11:30:00",
      open: "256.90390",
      high: "257.67001",
      low: "255.60001",
      close: "255.78690",
      volume: "12434477",
    },
    {
      datetime: "2023-12-20 10:30:00",
      open: "258.48001",
      high: "258.92001",
      low: "256.76010",
      close: "256.90009",
      volume: "16211001",
    },
    {
      datetime: "2023-12-20 09:30:00",
      open: "256.45001",
      high: "259.84000",
      low: "254.87010",
      close: "258.48041",
      volume: "30511696",
    },
    {
      datetime: "2023-12-19 15:30:00",
      open: "256.06009",
      high: "257.25000",
      low: "256.01001",
      close: "257.19501",
      volume: "6208436",
    },
    {
      datetime: "2023-12-19 14:30:00",
      open: "256.19711",
      high: "256.89999",
      low: "255.57150",
      close: "256.10001",
      volume: "8957140",
    },
    {
      datetime: "2023-12-19 13:30:00",
      open: "256.23001",
      high: "256.95001",
      low: "255.20000",
      close: "256.17999",
      volume: "11654701",
    },
    {
      datetime: "2023-12-19 12:30:00",
      open: "256.06500",
      high: "256.45001",
      low: "254.66000",
      close: "256.22501",
      volume: "11148023",
    },
    {
      datetime: "2023-12-19 11:30:00",
      open: "257.94000",
      high: "258.14990",
      low: "255.24001",
      close: "256.04999",
      volume: "14831676",
    },
    {
      datetime: "2023-12-19 10:30:00",
      open: "256.95999",
      high: "258.33990",
      low: "255.55000",
      close: "257.92990",
      volume: "20715436",
    },
    {
      datetime: "2023-12-19 09:30:00",
      open: "253.48000",
      high: "256.97000",
      low: "253.00999",
      close: "256.96991",
      volume: "29493260",
    },
    {
      datetime: "2023-12-18 15:30:00",
      open: "252.75999",
      high: "252.89000",
      low: "251.36000",
      close: "252.02000",
      volume: "7893149",
    },
    {
      datetime: "2023-12-18 14:30:00",
      open: "252.73000",
      high: "253.62000",
      low: "252.14000",
      close: "252.78461",
      volume: "12845087",
    },
    {
      datetime: "2023-12-18 13:30:00",
      open: "254.14500",
      high: "254.97000",
      low: "252.64011",
      close: "252.71359",
      volume: "12026431",
    },
    {
      datetime: "2023-12-18 12:30:00",
      open: "254.50000",
      high: "255.37939",
      low: "254.02000",
      close: "254.14430",
      volume: "12031644",
    },
    {
      datetime: "2023-12-18 11:30:00",
      open: "255.78999",
      high: "256.37411",
      low: "253.25060",
      close: "254.50999",
      volume: "17112510",
    },
    {
      datetime: "2023-12-18 10:30:00",
      open: "258.39001",
      high: "258.48999",
      low: "255.48010",
      close: "255.78000",
      volume: "18012954",
    },
    {
      datetime: "2023-12-18 09:30:00",
      open: "253.78000",
      high: "258.73999",
      low: "252.56000",
      close: "258.39001",
      volume: "32467551",
    },
    {
      datetime: "2023-12-15 15:30:00",
      open: "251.88000",
      high: "254.13000",
      low: "251.86000",
      close: "253.34000",
      volume: "10078455",
    },
    {
      datetime: "2023-12-15 14:30:00",
      open: "250.70480",
      high: "252.30000",
      low: "250.67999",
      close: "251.89079",
      volume: "8573371",
    },
    {
      datetime: "2023-12-15 13:30:00",
      open: "252.78999",
      high: "252.97990",
      low: "250.60001",
      close: "250.71719",
      volume: "10947852",
    },
    {
      datetime: "2023-12-15 12:30:00",
      open: "253.19000",
      high: "253.67999",
      low: "251.78000",
      close: "252.80991",
      volume: "13224094",
    },
    {
      datetime: "2023-12-15 11:30:00",
      open: "251.87000",
      high: "253.37000",
      low: "250.82001",
      close: "253.19321",
      volume: "14197106",
    },
    {
      datetime: "2023-12-15 10:30:00",
      open: "252.80000",
      high: "253.30000",
      low: "250.14000",
      close: "251.87000",
      volume: "17981872",
    },
    {
      datetime: "2023-12-15 09:30:00",
      open: "250.37500",
      high: "253.07001",
      low: "248.30000",
      close: "252.79050",
      volume: "39296941",
    },
    {
      datetime: "2023-12-14 15:30:00",
      open: "251.10001",
      high: "251.55000",
      low: "249.91000",
      close: "251.14011",
      volume: "9127180",
    },
    {
      datetime: "2023-12-14 14:30:00",
      open: "250.05400",
      high: "252.14999",
      low: "249.77000",
      close: "251.10400",
      volume: "15207547",
    },
  ],
  status: "ok",
};
IgrFinancialChartModule.register();

const Stock = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    processData(data);
  }, [data]);

  const processData = (data) => {
    const stockData = data.values.map((item) => ({
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
    <div
      className="stock-chart"
      style={{ height: "200px", marginLeft: "-40px" }}
    >
      <div>
        <div className="stock-title">Tesla</div>
        <div className="stock-price">255.95</div>
      </div>
      <IgrFinancialChart
        width="100%"
        height="100%"
        chartType="Line"
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
        dataToolTipValueFormatMinFractions={2}
        dataToolTipHeaderText=""
        dataToolTipUnitsText={data.meta.currency}
        toolTipType="None"
        isSeriesHighlightingEnabled={false}
      />
    </div>
  );
};
export default Stock;
