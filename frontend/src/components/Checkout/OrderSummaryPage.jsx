import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const OrderSummaryPage = ({ onBack }) => {
  const cartItems = useSelector((store) => store.cart.items);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const shipping = subtotal > 1000 ? 0 : 2;
  const total = subtotal + shipping;
  const handlePayment = async () => {
    try {
      // 1. Create order on backend
      const { data } = await axios.post(
        "http://localhost:5000/api/payments/orders",
        {
          amount: total * 100, // Razorpay expects amount in paise
          currency: "INR",
        }
      );

      // 2. Razorpay options
      const options = {
        key: "rzp_test_R7avasoSJbIKld", // your Razorpay key_id
        amount: data.amount,
        currency: data.currency,
        name: "My Shop",
        description: "Order Payment",
        order_id: data.id, // order_id from backend
        handler: async function (response) {
          // 3. Verify payment on backend
          const verifyRes = await axios.post(
            "http://localhost:5000/api/verify",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }
          );

          if (verifyRes.data.status === "success") {
            alert("✅ Payment Successful!");
          } else {
            alert("❌ Payment Verification Failed");
          }
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong, try again!");
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-4">
      <h3 className="text-xl font-semibold mb-2">Your Order</h3>
      {cartItems.length === 0 && <p className="text-gray-500">Cart is empty</p>}

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-2"
        >
          <img
            src={item.thumbnail || "/placeholder.png"}
            alt={item.title}
            className="w-20 h-20 object-cover rounded"
          />
          <div>{item.title}</div>
          <div>Qty: {item.qty}</div>
          <div>₹{item.price * item.qty}</div>
        </div>
      ))}

      {cartItems.length > 0 && (
        <>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={onBack}
              className="px-4 py-2 rounded-xl border hover:bg-gray-100"
            >
              Back
            </button>
            <button
              onClick={handlePayment}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
            >
              Pay Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderSummaryPage;
