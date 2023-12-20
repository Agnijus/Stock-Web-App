// import { Line } from "react-chartjs-2";
// import faker from "faker";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
// } from "chart.js";

// const Stock = () => {
//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Filler
//   );
//   const options = {
//     pointRadius: 1,
//     boundary: { start: 0, end: 100 },
//     tension: 0.2,
//     responsive: true,
//     plugins: {
//       // legend: {
//       //   position: "top",
//       // },
//       title: {
//         display: true,
//         text: "Stock",
//       },
//     },
//   };

//   const labels = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//   ];

//   const data = {
//     labels,
//     datasets: [
//       {
//         fill: {
//           target: "origin",
//           above: "rgba(77,158,0,0.4)", // Area will be red above the origin
//           below: "grey", // And blue below the origin
//         },
//         data: labels.map(() => faker.datatype.number({ min: 50, max: 75 })),
//         borderColor: "rgba(77,158,0,0.3)",
//         backgroundColor: "rgba(53, 162, 235, 0.2)",
//       },
//     ],
//   };
//   return (
//     <div>
//       <Line className="stock" options={options} data={data} />
//     </div>
//   );
// };
// export default Stock;

import {
  IgrFinancialChart,
  IgrFinancialChartModule,
  MarkerType,
} from "igniteui-react-charts";
import { Line } from "igniteui-react-core";

IgrFinancialChartModule.register();

const Stock = () => {
  return (
    <div className="container sample">
      <div className="container" style={{ height: "calc(100% - 25px)" }}>
        <IgrFinancialChart
          width="100%"
          height="100%"
          chartType="Line"
          thickness={2}
          chartTitle="Stock Title"
          yAxisMode={0}
          yAxisTitle="Price"
          xAxisTitle="Time"
          dataSource={""}
          isToolbarVisible={false}
          markerTypes={[MarkerType.None]}
          zoomSliderType={0}
        />
      </div>
    </div>
  );
};
export default Stock;
