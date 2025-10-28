// src/components/Checkout/AddressStep.jsx
import React, { useState } from "react";

const AddressStep = ({ onNext, onBack }) => {
  const [address, setAddress] = useState("");

  const handleContinue = () => {
    if (!address) {
      alert("Please enter your address");
      return;
    }
    onNext();
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-4">
      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter delivery address"
        className="border w-full p-2 rounded"
      ></textarea>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-xl border hover:bg-gray-100"
        >
          Back
        </button>
        <button
          onClick={handleContinue}
          className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AddressStep;
