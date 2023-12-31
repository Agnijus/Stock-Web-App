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

const WishList = ({ toast }) => {
  const dispatch = useDispatch();
  const { wishListData, wishList, loading } = useSelector(
    (state) => state.stock
  );

  useEffect(() => {
    dispatch(getWishList());
  }, [dispatch]);

  useEffect(() => {
    if (wishList && wishList.length > 0) {
      dispatch(fetchWishListStockData());
    } else {
    }
  }, [wishList, dispatch]);

  const handleRemove = (symbol, exchange) => {
    dispatch(updateWishList({ symbol, exchange }));
    toast("Stock removed from Wishlist");
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
                <TiStarFullOutline
                  onClick={() => handleRemove(symbol, exchange)}
                  className="wishlist-icon"
                />
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
            </div>
          );
        })}
    </section>
  );
};
export default WishList;
