import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Deletecart, increaseQty, decreaseQty } from "./store/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(Deletecart(item));
  };

  const handleIncrease = (item) => {
    dispatch(increaseQty(item.id));
  };

  const handleDecrease = (item) => {
    dispatch(decreaseQty(item.id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h4 className="text-xl font-bold mb-4 text-gray-700">Your Cart</h4>
      <div className="w-[600px] rounded border border-slate-500 m-4 p-4 bg-white shadow">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">
            <img
              src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg"
              alt="cart empty"
            />
            No items in cart
          </p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-4 mb-4"
              >
                <img
                  src={item.thumbnail}
                  alt="product"
                  className="w-[100px] h-[100px] object-cover border rounded"
                />
                <div className="ml-4 flex-1">
                  <div className="font-semibold text-gray-800">
                    {item.title}
                  </div>
                  <div className="text-gray-600 mt-1">₹ {item.price}</div>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecrease(item)}
                      className="px-2 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span className="px-3">{item.qty}</span>
                    <button
                      onClick={() => handleIncrease(item)}
                      className="px-2 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-red-600 mt-2 font-semibold"
                    onClick={() => handleDelete(item)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right text-lg font-semibold mt-4">
              Total: ₹ {calculateTotal()}
            </div>
            <div className="text-right mt-4">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
