import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchWishListStockData,
  getWishList,
  updateWishList,
} from "./features/stock/stockSlice";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";

const WishList = ({ toast }) => {
  const dispatch = useDispatch();
  const { wishListData, wishList, loading } = useSelector(
    (state) => state.stock
  );
  const { isDarkModeActive } = useSelector((state) => state.menu);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getWishList());
  }, [dispatch]);

  useEffect(() => {
    if (wishList !== null && wishList.length > 0) {
      dispatch(fetchWishListStockData());
    }
  }, [wishList, dispatch]);

  const handleRemove = (symbol, exchange) => {
    dispatch(updateWishList({ symbol, exchange }));
    toast("Removed from the Wishlist");
  };

  const handleViewStock = (symbol, exchange, datetime) => {
    navigate(`/stock/${symbol}/${exchange}`, { state: { datetime } });
  };

  if (loading) {
    return (
      <SyncLoader cssOverride={{ margin: "2rem" }} size={15} color="grey" />
    );
  }

  if (wishListData.code === 400) {
    return <div>There was an error</div>;
  }

  if (wishList.length === 0) {
    return (
      <div
        className={`no-items-wishlist-container ${
          isDarkModeActive ? "no-items-wishlist-dark" : ""
        }`}
      >
        <div className="no-items-wishlist-container-center">
          There are currently no stocks in your wishlist.
        </div>
      </div>
    );
  }

  return (
    <section
      className={`wishlist-grid ${isDarkModeActive ? "wishlist-dark" : ""}`}
    >
      {wishListData &&
        Object.entries(wishListData).map(([key, value]) => {
          const {
            name,
            symbol,
            exchange,
            change,
            percent_change,
            close,
            currency,
            datetime,
          } = value;
          console.log(value);
          return (
            <div key={key} className="wishlist-item">
              <div className="wishlist-top-line">
                <div>
                  <span className="wishlist-name">{name}</span>
                  <span className="wishlist-symbol-exchange">
                    {`${symbol}: ${exchange}`}
                  </span>
                </div>
              </div>
              <div>
                <span className="wishlist-close">
                  {parseFloat(close).toFixed(2)}
                </span>
                <span className="wishlist-currency">{currency}</span>
              </div>

              <div
                className={`wishlist-change ${
                  change < 0 ? "wishlist-change-negative" : ""
                }`}
              >
                <div className="wishlist-change-value">
                  {parseFloat(change).toFixed(2)}
                </div>

                <div className="wishlist-percent-change">{`(${parseFloat(
                  percent_change
                ).toFixed(2)}%)`}</div>
                <div className="wishlist-arrow">
                  {change > 0 ? <FaArrowUp /> : <FaArrowDown />}
                </div>
              </div>
              <div className="wishlist-item-overlay">
                <button
                  onClick={() => handleViewStock(symbol, exchange, datetime)}
                  className="wishlist-view-btn"
                >
                  View Stock
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(symbol, exchange);
                  }}
                  className="wishlist-remove-btn"
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          );
        })}
    </section>
  );
};
export default WishList;
