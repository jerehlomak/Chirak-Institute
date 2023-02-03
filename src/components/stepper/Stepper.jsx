import React, { useState, useEffect, useRef } from 'react'

const Stepper = ({ steps, currentStep }) => {
    //create a new state for new step
    const [newStep, setNewStep] = useState([])
    const stepRef = useRef()

    useEffect(() => {
        //update step function 
        const updateStep = (stepNumber, steps) => {
            const newSteps = [...steps]
            let count = 0

            while (count < newSteps.length) {
                //current step
                if (count == stepNumber) {
                    newSteps[count] = {
                        ...newSteps[count],
                        highlighted: true,
                        selected: true,
                        completed: true,
                    }
                    count++;
                }
                //step completed
                else if (count < stepNumber) {
                    newSteps[count] = {
                        ...newSteps[count],
                        highlighted: false,
                        selected: true,
                        completed: true,
                    }
                    count++;
                }
                //step pending
                else {
                    newSteps[count] = {
                        ...newSteps[count],
                        highlighted: false,
                        selected: false,
                        completed: false,
                    }
                    count++;
                }
            }
            return newSteps;
        }

        // interate through steps array
        const stepsState = steps.map((step, index) => 
            Object.assign({}, {
                description: step,
                completed: false,
                highlighted: index == 0 ? true : false,
                selected: index == 0 ? true : false,
            })
        )
        stepRef.current = stepsState
        const current = updateStep(currentStep - 1, stepRef.current)
        setNewStep(current)

    }, [steps, currentStep])

    const displaySteps = newStep.map((step, index) => {
        return (
            <div key={index} className={index == newStep.length -1 ? 'w-full flex md:flex-col items-center' : 'flex items-center'}>
            <div className='relative flex flex-col md:flex-row items-center text-gray-500'>
                <div className={`rounded-full transition duration-500 ease-in-out
                    border-2 border-gray-400 h-10 w-10 flex items-center justify-center py-3
                    ${step.selected ? "text-white font-bold rounded-full border-2 h-10 w-10 border-red-600" : ""}
                    `}>
                    {/* display number */} 
                    {step.completed ? (
                        <span className='text-red-600 font-bold text-xl'>&#10003;</span>
                    ): (
                        index + 1
                    )}
                    
                </div>
                <div className={`absolute text-gray-400  text-start  md:ml-14 w-32 text-sm font-medium
                            ${step.highlighted ? "text-gray-900" : "text-gray-400"}
                    `}>
                    {/* display description */}
                    {step.description}
                </div>
            </div>
            <div className={`flex-auto mt-12 border-b-2 border-red-600 transition duration-500 ease-in-out
                    ${step.completed ? 'border-red-600' : 'border-gray-400'}
            `}>
                {/* display line */}
            </div>
        </div>
        )
    })

  return (
    <div className='mx-4 p-4 flex md:flex-col justify-between items-center'>
        {displaySteps}
    </div>
  )
}

export default Stepper