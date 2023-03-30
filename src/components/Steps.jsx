import React from "react";

const StepByStepGuide = ({ steps }) => {
  return (
    <div>
      {steps.map((step, index) => (
        <div key={index}>
          <h2>Step {index + 1}: {step.title}</h2>
          <p>{step.description}</p>
          <img src={step.image} style={{height:"300px"}} alt="img" />
        </div>
      ))}
    </div>
  );
};

export default StepByStepGuide;
