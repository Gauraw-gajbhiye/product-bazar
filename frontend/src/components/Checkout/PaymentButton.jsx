// src/components/PaymentButton.jsx
import React from "react";
import axios from "axios";

const PaymentButton = () => {
  const handlePayment = async () => {
    try {
      // 1. Create order on backend
      const { data } = await axios.post(
        "http://localhost:5000/api/payments/orders",
        {
          amount: 50000, // amount in paise (50000 = ₹500)
          currency: "INR",
        }
      );

      const options = {
        key: "rzp_test_R7avasoSJbIKld", // ✅ Your key_id
        amount: data.order.amount,
        currency: data.order.currency,
        name: "My Shop",
        description: "Test Transaction",
        order_id: data.order.id, // from backend
        handler: async function (response) {
          // 2. Verify payment on backend
          const verifyRes = await axios.post(
            "http://localhost:5000/api/verify",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }
          );
          alert("✅ Payment Successful!");
          console.log("Verification response:", verifyRes.data);
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      Pay Now
    </button>
  );
};

export default PaymentButton;
