import React, { memo } from "react";
import { TiStarFullOutline } from "react-icons/ti";

const WishListIcon = memo(({ isAddedToWishList, meta, handleWishList }) => {
  return (
    <TiStarFullOutline
      onClick={() => {
        handleWishList(meta.symbol, meta.exchange);
      }}
      className={`add-to-wishlist-icon ${
        isAddedToWishList ? "wishlist-icon-active" : ""
      }`}
    />
  );
});
export default WishListIcon;
