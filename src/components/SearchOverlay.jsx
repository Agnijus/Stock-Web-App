import { useSelector } from "react-redux";

const SearchOverlay = () => {
  const { searchData } = useSelector((state) => state.stock);

  console.log(searchData);
  return <section className="search-overlay-container"></section>;
};
export default SearchOverlay;
