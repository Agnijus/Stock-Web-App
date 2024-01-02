import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchWishListStockData,
  getWishList,
  updateWishList,
} from "./features/stock/stockSlice";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { FaEye, FaTrashAlt } from "react-icons/fa";

const WishList = ({ toast }) => {
  const dispatch = useDispatch();
  const { wishListData, wishList, loading } = useSelector(
    (state) => state.stock
  );
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

  const handleViewStock = (symbol, exchange) => {
    navigate(`/stock/${symbol}/${exchange}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (wishListData.code === 400) {
    return <div>There was an error</div>;
  }

  if (wishList.length === 0) {
    return <div>Please add stocks to your wishlist!</div>;
  }

  return (
    <section className="wishlist-grid">
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
          } = value;
          return (
            <div key={key} className="wishlist-item">
              <div className="wishlist-top-line">
                <div>
                  <span className="wishlist-name">{name}</span>
                  <span className="wishlist-symbol-exchange">
                    {`${symbol}: ${exchange}`}
                  </span>
                </div>
                {/* <TiStarFullOutline
                  onClick={() => handleRemove(symbol, exchange)}
                  className="wishlist-icon"
                /> */}
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
                  onClick={() => handleViewStock(symbol, exchange)}
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
