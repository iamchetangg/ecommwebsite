import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_kRb2M8H29iMlDH4GBpoaLsS8";

  const onToken = (token) => {
    console.log(token);

    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now with Stripe"
      name="EcommWebSite"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      allowRememberMe
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
