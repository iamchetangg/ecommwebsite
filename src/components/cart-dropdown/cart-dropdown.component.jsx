import React from "react";
import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ hidden, cartItems }) => {
  return hidden ? null : (
    <div className="cart-dropdown">
      <div className="cart-header">
        <h2 style={{ padding: "0px", marginTop: "0px", marginBottom: "20px" }}>
          My Cart
        </h2>
        <div style={{ justifyContent: "center", textAlign: "center" }}>
          <h5 style={{ padding: "0px", margin: "0px" }}>Total Value</h5>
          <h4 style={{ padding: "0px", margin: "0px" }}>
            $
            {
              (console.log(cartItems[0]),
              cartItems.reduce((acc, curEl) => {
                /*  console.log(acc);
                console.log(curEl); */
                if (acc.quantity !== undefined) {
                  /*  console.log(
                    "IF NOT NULL",
                    `${acc.price} * ${acc.quantity}  + ${curEl.price} * ${curEl.quantity}`
                  ); */
                  return (
                    acc.price * acc.quantity + curEl.price * curEl.quantity
                  );
                } else {
                  /*   console.log(
                    "ELSE",
                    `${acc}  + ${curEl.price} * ${curEl.quantity}`
                  ); */
                  return acc + curEl.price * curEl.quantity;
                }
              }, 0))
            }
          </h4>
        </div>
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          // console.log("CART ITEM", item._internalId),
          <CartItem key={item.name} item={item} />
        ))}
      </div>

      <CustomButton
        _type="cart-checkout"
        type="submit"
        label="GO TO CHECKOUT"
      ></CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
