import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
// import

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
        toast.success("Payment Successfull");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-3xl font-bold">Your Order</h1>
        <div className="space-y-3 mt-10 border-2 border-dashed border-slate-400 bg-slate-200 px-10 py-5 rounded-md">
          <p className="text-lg font-semibold">Item: {items.product}</p>
          <p className="text-lg font-semibold">Owner: {items.name}</p>
          <p className="text-lg font-semibold">
            Price: ₹{items.amount * items.quantity}{" "}
          </p>
          <p className="text-lg font-semibold">Quantity: {items.quantity} kg</p>
          <p className="text-lg font-semibold">Address: {items.address}</p>
          <p className="text-lg font-semibold">
            Contact-Number: {items.number}
          </p>
        </div>
      </div>
      <button onClick={handleCheckout} className="mt-10">
        Check Out
      </button>
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
