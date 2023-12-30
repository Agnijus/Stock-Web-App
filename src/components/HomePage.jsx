import Stock from "./Stock";
import { useSelector } from "react-redux";

const Overview = () => {
  const { data, loading, error } = useSelector((state) => state.stock);

  if (loading) {
    return <div>Loading...</div>;
  } else if (
    !data ||
    data.code === 400 ||
    !data.meta ||
    !data.values ||
    data.values.length <= 1
  ) {
    return (
      <div className="not-enough-data">
        No sufficient trading data available for {data?.meta?.symbol}
        {data?.meta?.exchange}.
      </div>
    );
  }

  if (error) {
    return <div>Error... {error}</div>;
  }

  return (
    <section className="homepage-container">
      <div className="stock-grid">
        <Stock {...data} />
      </div>
    </section>
  );
};
export default Overview;
