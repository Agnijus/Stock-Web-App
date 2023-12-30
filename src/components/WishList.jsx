import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchWishListStockData,
  getWishList,
} from "./features/stock/stockSlice";

const WishList = () => {
  const dispatch = useDispatch();
  const { wishListData } = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch(getWishList());
    dispatch(fetchWishListStockData());
  }, []);

  return <section className="wishlist-container">WishList</section>;
};
export default WishList;
