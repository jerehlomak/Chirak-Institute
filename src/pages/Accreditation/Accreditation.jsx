import React, { useState } from "react";
import { StepperContext } from "../../context/StepperContext";
import { Navbar, StepperControl, Stepper } from "../../components";
import {
  Course,
  Experience,
  Payment,
  QualificationForm,
  Referees,
  Selection,
} from "../../components";

const Accreditation = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  const steps = [
    "Preferred Course Selection",
    "Qualification",
    "Working Experience",
    "Preferred Course",
    "Referees",
    "Payment",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Selection />;
      case 2:
        return <QualificationForm />;
      case 3:
        return <Experience />;
      case 4:
        return <Course />;
      case 5:
        return <Referees />;
      case 6:
        return <Payment />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction == "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <div className='background'>
      <div className='container'>
        <div className='container'>
          <Navbar />
        </div>
      </div>

      <div className='container w-full mx-auto  md:flex p-4'>
        <div className='hidden md:flex md:flex-col w-1/3 justify-start items-start'>
          <Stepper steps={steps} currentStep={currentStep} />
        </div>
        <div className='flex flex-col w-full md:w-2/3 p-4 bg-white shadow-2xl rounded-md mx-auto justify-center md:items-start'>
          {/* display components */}
          <div className='my-0 md:my-10 md:p-10'>
            <StepperContext.Provider
              value={{
                userData,
                setUserData,
                finalData,
                setFinalData,
              }}
            >
              {displayStep(currentStep)}
            </StepperContext.Provider>

            <StepperControl
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accreditation;
