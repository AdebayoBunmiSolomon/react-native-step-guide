import { useEffect, useState } from "react";
import { IDataTypeProps } from "./Stepper";

export const useStepper = (data: IDataTypeProps[]) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [submittedStepsIndex, setSubmittedStepsIndex] = useState<number[]>([0]);

  const nextStep = () => {
    if (activeStepIndex !== data.length - 1) {
      setActiveStepIndex(activeStepIndex + 1);
    } else if (activeStepIndex === data.length - 1) {
      //nothing should happen
    }
  };

  const prevStep = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(activeStepIndex - 1);
      removeLastSubmittedStep();
    }
  };

  //   const prevStep = () => {
  //     if (activeStepIndex < data.length - 1 && activeStepIndex !== 0) {
  //       setActiveStepIndex(activeStepIndex - 1);
  //     } else if (activeStepIndex === data.length - 1) {
  //       setActiveStepIndex(activeStepIndex - 1);
  //     }
  //     removeLastSubmittedStep();
  //   };

  const addSubmittedSteps = (submittedStep: number) => {
    if (!submittedStepsIndex.includes(submittedStep)) {
      setSubmittedStepsIndex([...submittedStepsIndex, submittedStep]);
    } else {
      //perform something here
    }
  };

  const removeLastSubmittedStep = () => {
    // if (submittedStepsIndex.length > 0) {
    const newArray = [...submittedStepsIndex];
    newArray.pop();
    setSubmittedStepsIndex(newArray);
    // } else {
    //   alert("No more steps to remove.");
    // }
  };

  useEffect(() => {
    addSubmittedSteps(activeStepIndex);
    console.log("Submitted steps index", submittedStepsIndex);
    console.log("Active step index", activeStepIndex);
  }, [activeStepIndex]);

  return {
    activeStepIndex,
    nextStep,
    prevStep,
    submittedStepsIndex,
  };
};
