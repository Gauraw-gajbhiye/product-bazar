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
      // Last step completed → navigate to Payment
      navigate("/payment");
    }
  };

  const handleBack = () => {
    if (activeStep > 1) setActiveStep((prev) => prev - 1);
  };

  return (
    <div className="pt-20 max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
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
                className="border p-2 w-full rounded mb-2"
                placeholder="Enter Email or Phone"
              />
            )}
            {activeStep === 2 && (
              <textarea
                className="border p-2 w-full rounded mb-2"
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
