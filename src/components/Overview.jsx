import Stock from "./Stock";
import { useFetchStocks } from "./reactQueryCustomHooks";

const Overview = () => {
  // const { isLoading, isError, data } = useFetchStocks();
  // console.log(data);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="overview-container">
      <Stock />
    </div>
  );
};
export default Overview;
