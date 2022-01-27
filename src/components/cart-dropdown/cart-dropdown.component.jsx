import React from "react";
import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import {
  selectCartItems,
  selectCartHidden,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartVisibility } from "../../redux/cart/cart.actions";



const CartDropdown = ({
  hidden,
  cartItems,

  cartTotal,
  dispatch,
}) => {
  let navigate = useNavigate();
  return hidden ? null : (
    <div className="cart-dropdown">
      <div className="cart-header">
        <h2 style={{ padding: "0px", marginTop: "0px", marginBottom: "20px" }}>
          Cart
        </h2>
        <div style={{ justifyContent: "center", textAlign: "center" }}>
          <h5 style={{ padding: "0px", margin: "0px" }}>Total Value</h5>
          <h4 style={{ padding: "0px", margin: "0px" }}>${cartTotal}</h4>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <span style={{ textAlign: "center", height: "40px" }}>
          Your cart is empty!
        </span>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            // console.log("CART ITEM", item._internalId),
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
      <CustomButton
        _type="cart-checkout"
        type="submit"
        label="GO TO CHECKOUT"
        _onClick={() => {
          console.log("1 *****************");
          dispatch(toggleCartVisibility());
          console.log("2 *****************");
          navigate("/checkout");
          console.log("3 *****************");

          //<Navigate to="/checkout" replace={true} />;
        }}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CartDropdown);
