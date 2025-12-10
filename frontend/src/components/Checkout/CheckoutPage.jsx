import React, { useState } from "react";
import CheckoutStep from "./CheckoutStep";
import OrderSummaryPage from "./OrderSummaryPage";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const steps = [
    { id: 1, name: "Login", description: "Enter your login details" },
    {
      id: 2,
      name: "Delivery Address",
      description: "Provide your shipping address",
    },
    {
      id: 3,
      name: "Order Summary",
      description: "Review your items and quantities",
    },
  ];

  const [activeStep, setActiveStep] = useState(1);

  const handleContinue = () => {
    if (activeStep < steps.length) {
      setActiveStep((prev) => prev + 1);
    } else {
      navigate("/payment");
    }
  };

  const handleBack = () => {
    if (activeStep > 1) setActiveStep((prev) => prev - 1);
  };

  return (
    <div className="w-full max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto p-4 sm:p-6 md:p-8 my-8 sm:my-12 md:my-20 bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 text-center">
        Checkout
      </h2>

      <div className="space-y-4">
        {steps.map((step) => (
          <CheckoutStep
            key={step.id}
            stepNumber={step.id}
            name={step.name}
            description={step.description}
            active={activeStep === step.id}
            completed={activeStep > step.id}
            onContinue={handleContinue}
          >
            {activeStep === 1 && (
              <input
                className="border p-2 w-full rounded mb-2 text-sm sm:text-base"
                placeholder="Enter Email or Phone"
              />
            )}
            {activeStep === 2 && (
              <textarea
                className="border p-2 w-full rounded mb-2 text-sm sm:text-base"
                placeholder="Enter Address"
              />
            )}
            {activeStep === 3 && (
              <OrderSummaryPage onBack={handleBack} onNext={handleContinue} />
            )}
          </CheckoutStep>
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
