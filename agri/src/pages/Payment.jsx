import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const items = location.state;
  const publishableKey =
    "pk_test_51MhaPzSFIDOmKZjE9slWeepgFUmwjQ4h8hGufvaYET9XoeD3FPjvdKS9tEqhFoFHf0bJqnQxhRMNE6KR3cAiGvkZ00tA5UQZr6";

  const handleCheckout = async () => {
    await axios
      .post("http://localhost:5000/stripe/create-checkout-session", {
        items,
        userId: 12345,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col justify-center h-screen">
      <h1 className="text-center">Pay {location.state.amount}</h1>
      <button onClick={handleCheckout}>Check Out</button>
      {/* <StripeCheckout
        stripeKey={publishableKey}
        label="Pay"
        name="Pay with card"
        billingAddress
        shippingAddress
        amount={stripePrice}
        description={`Your total is ${stripePrice}`}
        token={payNow}
      /> */}
    </div>
  );
};

export default Payment;
