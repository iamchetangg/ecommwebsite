import React from "react";
import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";

const CartDropdown = ({ hidden }) => {
  return hidden ? null : (
    <div className="cart-dropdown">
      <h3 style={{ textAlign: "center" }}>My Cart</h3>
      {/*  <div className="cart-items" /> */}

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
});

export default connect(mapStateToProps)(CartDropdown);
