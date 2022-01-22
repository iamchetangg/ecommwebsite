import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { toggleCartVisibility } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";
const CollectionItem = ({
  id,
  name,
  price,
  imageUrl,
  addItem,
  cartItems,
  toggleCartVisibility,
  hidden,
}) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
        alt={id + "_preview_img"}
      >
        <CustomButton
          _type="add-to-cart"
          type="submit"
          label="ADD TO CART"
          _onClick={() => {
            if (hidden) {
              toggleCartVisibility();
            }
            addItem({
              id: id,
              name: name,
              price: price,
              imageUrl: imageUrl,
              quantity: 1,
            });
          }}
        ></CustomButton>
      </div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

/* 
 updateItem({
                  _internalId: cartItems.length,
                  id: id,
                  name: name,
                  price: price,
                  imageUrl: imageUrl,
                  quantity: exists ? item.quantity + 1 : 1,
                }) */

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
