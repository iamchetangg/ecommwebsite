import React from "react";
//import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./checkout-item.styles.scss";
import { addItem, removeItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  item: { imageUrl, name, quantity, price },
  id,
  removeItem,
  addItem,
}) => {
  return (
    <div key={name} className="checkout-item">
      <div className="item-block">
        <div
          className="image-container"
          /*  style={{
            backgroundImage: `url(${imageUrl})`,
          }} */
          // alt={item.id + "_preview_img"}
        >
          <img className="img" src={imageUrl} alt={`item_${name}`}></img>
        </div>
      </div>
      <div className="item-block">
        <h3 style={{ margin: "0px 0px" }}>{name}</h3>
      </div>
      <div className="item-block">
        <button
          className="quantity-modifier"
          disabled={quantity <= 1}
          onClick={() => {
            removeItem({
              id: id,
              imageUrl: imageUrl,
              name: name,
              quantity: quantity,
              price: price,
            });
          }}
        >
          {/*  &#x25C0; */}
          &#10094;
        </button>
        <span>&nbsp;&nbsp;{quantity}&nbsp;&nbsp;</span>
        <button
          className="quantity-modifier"
          onClick={() => {
            addItem({
              id: id,
              imageUrl: imageUrl,
              name: name,
              quantity: quantity,
              price: price,
            });
          }}
        >
          {/*   &#x25B6; */}&#10095;
        </button>
      </div>
      <div className="item-block">
        <span>${price}</span>
      </div>
      <div className="item-block">
        <CustomButton
          _type="cart-remove"
          name="cart-remove"
          //  type="submit"
          label="&#x2715;"
          _onClick={() => {
            removeItem({
              imageUrl: imageUrl,
              name: name,
              quantity: quantity,
              price: price,
            });
            //<Navigate to="/checkout" replace={true} />;
          }}
        ></CustomButton>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
