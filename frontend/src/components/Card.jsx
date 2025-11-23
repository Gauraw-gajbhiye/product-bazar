import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import "react-loading-skeleton/dist/skeleton.css";
import { Addtocart } from "./store/cartSlice";
import axios from "axios";

function Card() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchTerm = useSelector((state) => state.search.searchTerm);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, data]);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios("http://localhost:5000/api/products ");

    console.log("data", response.data);

    setData(response.data);
    setFilteredData(response.data);
    setLoading(false);
  };

  const handleAddtoCart = (item) => {
    dispatch(Addtocart(item));
  };

  return (
    <div className=" min-h-screen py-6 px-4 mt-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
        {(loading ? Array(10).fill(0) : filteredData).map((item, index) => (
          <div
            key={loading ? index : item.id}
            className="rounded-2xl p-4 shadow-md text-center border  flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl h-[360px] w-[230px]"
          >
            {loading ? (
              <>
                <Skeleton height={20} width={200} className="mb-2 mx-auto" />
                <Skeleton height={160} className="mb-2" />
                <Skeleton height={20} width={100} className="mb-2 mx-auto" />
                <Skeleton height={30} width={120} className="mx-auto mt-auto" />
              </>
            ) : (
              <>
                <div className="overflow-hidden rounded-xl w-full h-[160px] flex items-center justify-center">
                  <img
                    loading="lazy"
                    src={item.thumbnail}
                    alt="product"
                    className="transition-transform duration-300 ease-in-out hover:scale-110 h-full object-cover"
                  />
                </div>
                <span className="text-gray-700 font-medium mb-1 text-sm sm:text-base line-clamp-1">
                  {item.title}
                </span>
                <div className="text-xl font-bold text-emerald-600">
                  ₹ {item.price}
                </div>
                <div className="flex justify-center items-center bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full px-3 py-1 w-fit mx-auto my-2">
                  {item.rating}
                  <FaStar className="ml-1 text-xs" />
                </div>
                <button
                  onClick={() => handleAddtoCart(item)}
                  className="w-full border border-green-600 font-semibold py-2 rounded-xl transition mt-auto text-green-700 hover:bg-green-50"
                >
                  <FontAwesomeIcon
                    className="mr-2 text-lg"
                    icon={faShoppingCart}
                  />
                  Add to Cart
                </button>
              </>
            )}
          </div>
        ))}
        {!loading && filteredData.length === 0 && (
          <p className="col-span-full text-center text-lg text-red-600 font-medium">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
