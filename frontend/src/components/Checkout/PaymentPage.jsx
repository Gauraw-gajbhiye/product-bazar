import React from "react";
import axios from "axios";

export default function PaymentPage() {
  const handlePayment = async () => {
    try {
      // Call backend to create order
      const { data } = await axios.post(
        "http://localhost:5000/api/payments/orders",
        {
          amount: 500, // INR
        }
      );

      if (!data.success) {
        alert("Failed to create order");
        return;
      }

      const { order } = data;

      const options = {
        key: "rzp_test_xxxxxxxx", // put your Razorpay key_id here (not secret)
        amount: order.amount,
        currency: order.currency,
        name: "My Shop",
        description: "Test Transaction",
        order_id: order.id, // <-- important
        handler: function (response) {
          alert("Payment ID: " + response.razorpay_payment_id);
          alert("Order ID: " + response.razorpay_order_id);
          alert("Signature: " + response.razorpay_signature);
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handlePayment}>Pay ₹500</button>
    </div>
  );
}
