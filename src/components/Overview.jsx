import Stock from "./Stock";
import { useSelector } from "react-redux";

const Overview = () => {
  const { data, loading, error } = useSelector((state) => state.stock);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error... {error}</div>;
  }

  return (
    <section className="overview-container">
      <div className="stock-grid">
        {Object.keys(data).map((key) => {
          return <Stock key={key} {...data[key]} />;
        })}
      </div>
    </section>
  );
};
export default Overview;
