import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "./store/searchSlice";
import { Link } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="fixed top-0 left-0 z-50 border w-full shadow-lg flex flex-col sm:flex-row bg-white justify-between h-18 p-4 mb-6  ">
      <div className="text-violet-950 text-xl font-bold">Product Bazar</div>
      <div className="w-full sm:w-[600px] border border-black rounded-sm">
        <input
          type="text"
          placeholder="Search product"
          // value={inputValue}
          // onChange={(e) => setInputValue(e.target.value)}
          onChange={handleSearch}
          // onKeyDown={handleSearch}
          className="outline-none w-full px-2 py-1"
        />
      </div>
      <div className="mt-2 sm:mt-0 sm:ml-4 text-lg flex items-center  relative">
        <Link to="cart">
          <FontAwesomeIcon
            className="text-gray-600 text-xl cursor-pointer"
            icon={faShoppingCart}
          />
          {cartItems.length > 0 && (
            <div className="-top-4  bg-green-600 text-xs text-white rounded-full justify-center align-middle  items-center p-1 h-5 w-5 flex border-none ml-3 m-1 absolute">
              {cartItems.length}
            </div>
          )}
          <span className="ml-2 hidden sm:inline">Cart </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
