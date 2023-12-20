import {
  IgrFinancialChart,
  IgrFinancialChartModule,
  MarkerType,
} from "igniteui-react-charts";
import { useState, useEffect } from "react";

const data = {
  meta: {
    symbol: "TSLA",
    interval: "1week",
    currency: "USD",
    exchange_timezone: "America/New_York",
    exchange: "NASDAQ",
    mic_code: "XNGS",
    type: "Common Stock",
  },
  values: [
    {
      datetime: "2023-12-18",
      open: "253.78000",
      high: "258.73999",
      low: "251.36000",
      close: "256.47009",
      volume: "229863955",
    },
    {
      datetime: "2023-12-11",
      open: "242.74001",
      high: "254.13000",
      low: "228.20000",
      close: "253.50000",
      volume: "636078500",
    },
    {
      datetime: "2023-12-04",
      open: "235.75000",
      high: "246.66000",
      low: "233.28999",
      close: "243.84000",
      volume: "578629500",
    },
    {
      datetime: "2023-11-27",
      open: "236.89000",
      high: "252.75000",
      low: "231.89999",
      close: "238.83000",
      volume: "649509700",
    },
    {
      datetime: "2023-11-20",
      open: "234.03999",
      high: "244.00999",
      low: "231.02000",
      close: "235.45000",
      volume: "421683900",
    },
    {
      datetime: "2023-11-13",
      open: "215.60001",
      high: "246.70000",
      low: "211.61000",
      close: "234.30000",
      volume: "719922800",
    },
    {
      datetime: "2023-11-06",
      open: "223.98000",
      high: "226.32001",
      low: "205.69000",
      close: "214.64999",
      volume: "613925200",
    },
    {
      datetime: "2023-10-30",
      open: "209.28000",
      high: "226.37010",
      low: "191.25000",
      close: "219.96001",
      volume: "621446800",
    },
    {
      datetime: "2023-10-23",
      open: "210.00000",
      high: "222.05000",
      low: "202.50999",
      close: "207.30000",
      volume: "585973400",
    },
    {
      datetime: "2023-10-16",
      open: "250.05000",
      high: "257.17999",
      low: "210.42000",
      close: "211.99001",
      volume: "616134600",
    },
    {
      datetime: "2023-10-09",
      open: "255.31000",
      high: "268.94000",
      low: "250.22000",
      close: "251.12000",
      volume: "541322100",
    },
    {
      datetime: "2023-10-02",
      open: "244.81000",
      high: "263.60001",
      low: "242.62000",
      close: "260.53000",
      volume: "592623500",
    },
    {
      datetime: "2023-09-25",
      open: "243.38000",
      high: "254.77000",
      low: "234.58000",
      close: "250.22000",
      volume: "588632500",
    },
    {
      datetime: "2023-09-18",
      open: "271.16000",
      high: "273.92999",
      low: "244.48000",
      close: "244.88000",
      volume: "574817000",
    },
    {
      datetime: "2023-09-11",
      open: "264.26999",
      high: "278.98001",
      low: "260.60999",
      close: "274.39001",
      volume: "663474100",
    },
    {
      datetime: "2023-09-04",
      open: "245.00000",
      high: "258.00000",
      low: "243.27000",
      close: "248.50000",
      volume: "480110000",
    },
    {
      datetime: "2023-08-28",
      open: "242.58000",
      high: "261.17999",
      low: "235.35001",
      close: "245.00999",
      volume: "604843900",
    },
    {
      datetime: "2023-08-21",
      open: "221.55000",
      high: "240.82001",
      low: "220.58000",
      close: "238.59000",
      volume: "573767800",
    },
    {
      datetime: "2023-08-14",
      open: "235.70000",
      high: "240.66000",
      low: "212.36000",
      close: "215.49001",
      volume: "555809500",
    },
    {
      datetime: "2023-08-07",
      open: "251.45000",
      high: "253.64999",
      low: "238.02000",
      close: "242.64999",
      volume: "517701600",
    },
    {
      datetime: "2023-07-31",
      open: "267.48001",
      high: "269.07999",
      low: "250.49001",
      close: "253.86000",
      volume: "466312800",
    },
    {
      datetime: "2023-07-24",
      open: "255.85001",
      high: "272.89999",
      low: "254.12000",
      close: "266.44000",
      volume: "560265300",
    },
    {
      datetime: "2023-07-17",
      open: "286.63000",
      high: "299.29001",
      low: "255.80000",
      close: "260.01999",
      volume: "722568100",
    },
    {
      datetime: "2023-07-10",
      open: "276.47000",
      high: "285.29999",
      low: "265.10001",
      close: "281.38000",
      volume: "539522500",
    },
    {
      datetime: "2023-07-03",
      open: "276.48999",
      high: "284.25000",
      low: "272.88000",
      close: "274.42999",
      volume: "485150900",
    },
    {
      datetime: "2023-06-26",
      open: "250.07001",
      high: "264.45001",
      low: "240.70000",
      close: "261.76999",
      volume: "748280600",
    },
    {
      datetime: "2023-06-19",
      open: "261.50000",
      high: "276.98999",
      low: "248.25000",
      close: "256.60001",
      volume: "720868300",
    },
    {
      datetime: "2023-06-12",
      open: "247.94000",
      high: "263.60001",
      low: "244.59000",
      close: "260.54001",
      volume: "811032600",
    },
    {
      datetime: "2023-06-05",
      open: "217.80000",
      high: "252.42000",
      low: "212.53000",
      close: "244.39999",
      volume: "848137500",
    },
    {
      datetime: "2023-05-29",
      open: "200.10001",
      high: "217.25000",
      low: "195.12000",
      close: "213.97000",
      volume: "591689300",
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
    const stockData = data.values
      .slice()
      .reverse()
      .map((item) => ({
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
    <div className="container sample">
      <div className="container" style={{ height: "300px" }}>
        <IgrFinancialChart
          width="100%"
          height="100%"
          chartType="Line"
          thickness={2}
          chartTitle={data.meta.symbol}
          yAxisMode={0}
          yAxisTitle="Price"
          xAxisTitle="Time"
          dataSource={chartData}
          isToolbarVisible={false}
          markerTypes={[MarkerType.None]}
          zoomSliderType={0}
        />
      </div>
    </div>
  );
};
export default Stock;
