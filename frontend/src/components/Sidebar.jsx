import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategories,
  setPriceRange,
  clearFilters,
  setSortOrder,
} from "./store/filterSlice";

const categoriesList = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
];

function Sidebar() {
  const dispatch = useDispatch();
  const selectedCategories = useSelector((state) => state.filter.categories);
  const selectedPriceRange = useSelector((state) => state.filter.priceRange);

  const [min, setMin] = useState(selectedPriceRange[0]);
  const [max, setMax] = useState(selectedPriceRange[1]);

  const handleCategoryChange = (category) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    dispatch(setCategories(updated));
  };

  const applyPriceFilter = () => {
    // Ensure min and max are numbers and min <= max
    const minVal = Number(min) || 0;
    const maxVal = Number(max) || 100000;
    if (minVal > maxVal) {
      alert("Min price cannot be greater than max price");
      return;
    }
    dispatch(setPriceRange([minVal, maxVal]));
  };

  return (
    <div className="ml-2 w-64">
      <h4 className="font-semibold text-2xl mb-4">Products For You</h4>

      <div className="p-2 border shadow-lg rounded-md bg-white">
        {/* Categories */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Category</h4>
          {categoriesList.map((category) => (
            <label
              key={category}
              className={`flex items-center gap-2 text-sm mb-2 px-2 py-1 rounded cursor-pointer transition-colors 
    ${
      selectedCategories.includes(category)
        ? " text-green-800"
        : "bg-white text-gray-800"
    }
  `}
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="accent-green-600 w-4 h-4"
              />
              {category}
            </label>
          ))}
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Price Range</h4>
          <input
            type="number"
            placeholder="Min"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            className="border rounded px-2 py-1 w-full mb-2"
          />
          <input
            type="number"
            placeholder="Max"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            className="border rounded px-2 py-1 w-full mb-2"
          />
          <button
            onClick={applyPriceFilter}
            className="bg-green-600 text-white py-2 rounded w-full"
          >
            Apply Price Filter
          </button>
        </div>

        {/* Clear Filters */}
        <button
          onClick={() => dispatch(clearFilters())}
          className="text-sm text-red-600 underline"
        >
          Clear Filters
        </button>
        <select
          className="ml-2 border rounded px-2 py-1"
          onChange={(e) => dispatch(setSortOrder(e.target.value))}
        >
          <option value="relevance">Relevance</option>
          <option value="priceLowToHigh">Price (Low to High)</option>
          <option value="priceHighToLow">Price (High to Low)</option>
          <option value="ratingHighToLow">Rating (High to Low)</option>
        </select>
      </div>
    </div>
  );
}

export default Sidebar;
