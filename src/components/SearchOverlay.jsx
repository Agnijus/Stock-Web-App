import { useSelector } from "react-redux";

const SearchOverlay = () => {
  const { searchData } = useSelector((state) => state.stock);

  console.log(searchData);
  return (
    <section>
      <div className="search-bar-overlay-container"></div>
      <div className="search-overlay-container"></div>
    </section>
  );
};
export default SearchOverlay;
