import React from "react";
import { Link } from "react-router-dom";

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className='flex justify-center px-4 md:px-8'>
      <div className='w-full md:w-3/4'>
        <div className='flex items-center flex-col-reverse md:flex-row justify-between'>
          {/* back button */}
          <div className='w-full md:w-40 mt-2 md:mt-0'>
            <button
              onClick={() => handleClick()}
              className={`btn-white w-full h-12 ${
                currentStep === steps.length ? "mx-auto" : ""
              }`}
            >
              {currentStep === 1 ? (
                <Link to='/getaccredit1'>Back</Link>
              ) : (
                "Back"
              )}
            </button>
          </div>
          {/* next button */}
          <div className='w-full md:w-40'>
            <button
              onClick={() => handleClick("next")}
              className={`btn-red w-full h-12 ${
                currentStep == steps.length ? "hidden" : ""
              }`}
            >
              {currentStep === steps.length ? "Confirm" : "Save and Proceed"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepperControl;
