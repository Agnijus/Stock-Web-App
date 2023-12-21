import Stock from "./Stock";
import { useFetchStocks } from "./reactQueryCustomHooks";

const Overview = () => {
  const { isLoading, isError, data } = useFetchStocks();
  console.log("re-render");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <section className="overview-container">
      <div className="stock-grid">
        {Object.keys(data).map((key) => {
          return <Stock {...data[key]} />;
        })}
      </div>
    </section>
  );
};
export default Overview;
