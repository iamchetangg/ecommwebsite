import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { id, name, price, imageUrl, quantity } }) => {
  return (
    <div className="cart-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
        alt={id + "_preview_img"}
      />
      <div className="item-details">
        <h4 style={{ padding: "0px", margin: "0px" }} className="name">
          {name}
        </h4>
        <span>${quantity > 1 ? quantity + " x " + price : price}</span>
      </div>
    </div>
  );
};

export default CartItem;
