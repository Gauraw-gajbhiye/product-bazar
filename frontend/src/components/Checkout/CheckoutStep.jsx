import React from "react";

function CheckoutStep({
  stepNumber,
  name,
  description,
  active,
  completed,
  onContinue,
  children,
}) {
  return (
    <div
      className={`border rounded-2xl p-4 ${
        active ? "border-blue-600 bg-blue-50" : "border-gray-300"
      }`}
    >
      {/* Step Header */}
      <div className="flex items-center space-x-3">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold
          ${
            active
              ? "bg-blue-600 text-white"
              : completed
              ? "bg-green-500 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          {stepNumber}
        </div>
        <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
      </div>

      {/* Step Content */}
      {active && (
        <div className="mt-3">
          <p className="text-gray-600 mb-3">{description}</p>

          {/* 🔽 Dynamic Step Content from parent */}
          {children}

          {/* Continue / Place Order Button (except inside OrderSummaryPage which has its own button) */}
          {stepNumber !== 3 && (
            <button
              onClick={onContinue}
              className="bg-blue-600 text-white px-5 py-2 rounded-xl mt-3 hover:bg-blue-700"
            >
              {stepNumber === 4 ? "Place Order" : "Continue"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default CheckoutStep;
