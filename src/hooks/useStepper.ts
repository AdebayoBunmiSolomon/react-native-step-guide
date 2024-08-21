import { useEffect, useState } from "react";
import { IDataTypeProps } from "../Stepper/Stepper";

export const useStepper = (data: IDataTypeProps[]) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [submittedStepsIndex, setSubmittedStepsIndex] = useState<number[]>([]);

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

  const addSubmittedSteps = (submittedStep: number) => {
    if (!submittedStepsIndex.includes(submittedStep)) {
      setSubmittedStepsIndex([...submittedStepsIndex, submittedStep]);
    } else {
      //perform something here
    }
  };

  const removeLastSubmittedStep = () => {
    const newArray = [...submittedStepsIndex];
    newArray.pop();
    setSubmittedStepsIndex(newArray);
  };

  useEffect(() => {
    addSubmittedSteps(activeStepIndex);
  }, [activeStepIndex]);

  return {
    activeStepIndex,
    nextStep,
    prevStep,
    submittedStepsIndex,
  };
};
