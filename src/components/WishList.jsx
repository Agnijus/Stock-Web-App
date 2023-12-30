import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchWishListStockData,
  getWishList,
} from "./features/stock/stockSlice";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";

const WishList = () => {
  const dispatch = useDispatch();
  const { wishListData } = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch(getWishList());
    dispatch(fetchWishListStockData());
  }, []);

  if (!wishListData) {
    return <div>Loading...</div>;
  }

  console.log(wishListData);

  return (
    <section className="wishlist-grid">
      {Object.entries(wishListData).map(([key, value]) => {
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
              <TiStarFullOutline className="wishlist-icon" />
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
