import Stock from "./Stock";
import { useSelector } from "react-redux";

const Overview = () => {
  const { data, loading, error } = useSelector((state) => state.stock);

  if (loading || !data.meta || !data.values) {
    return <div>Loading...</div>;
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
