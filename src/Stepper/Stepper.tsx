import React, { useEffect, useRef } from "react";
import { View, ScrollView } from "react-native";
import { verticalScale } from "../ui-utils";
import { VerticalStepper } from "../components/vertical-stepper";
import { HorizontalStepper } from "../components/horizontal-stepper";

export interface IDataTypeProps {
  title: string;
}
[];

export type stepperPropType = {
  formSteps: IDataTypeProps[];
  activeStep: number;
  submittedSteps: number[];
  inactiveBgColor?: `#${string}`;
  activeBgColor?: `#${string}`;
  submittedBgColor?: `#${string}`;
  stepperType?: "horizontal-title" | "vertical-title";
};

export const FormStepper: React.FC<stepperPropType> = ({
  formSteps,
  activeStep,
  submittedSteps,
  inactiveBgColor,
  activeBgColor,
  submittedBgColor,
  stepperType,
}) => {
  const subSteps = submittedSteps && submittedSteps.map((item) => item);
  const lastLengthOfData = formSteps && formSteps.length - 1;
  const scrollViewRef = useRef<ScrollView | any>(null);
  const itemRefs = useRef<(View | null)[]>([]);

  const getActiveStepColorAndIcon = (index: number) => {
    let color = "";

    //for activeness
    if (activeStep === index) {
      color = "crimson";
      return {
        bgColor: activeBgColor ? activeBgColor : color,
        submitted: false,
      };
    } else {
      //for submitted
      if (subSteps.includes(index)) {
        color = "green";
        return {
          bgColor: submittedBgColor ? submittedBgColor : color,
          submitted: true,
        };
      } else {
        color = "#bab5b5";
        return {
          bgColor: inactiveBgColor ? inactiveBgColor : color,
          submitted: false,
        };
      }
    }
  };

  const scrollToSubmitted = () => {
    if (scrollViewRef.current && itemRefs.current[activeStep]) {
      itemRefs.current[activeStep]?.measureLayout(
        scrollViewRef.current,
        (x: number, y: number) => {
          scrollViewRef.current?.scrollTo({ x, animated: true });
        }
      );
    }
  };

  useEffect(() => {
    if (stepperType === "horizontal-title") {
      scrollToSubmitted();
    }
  }, [activeStep, stepperType]);

  return (
    <View
      style={{
        marginVertical: verticalScale(10),
        paddingTop: verticalScale(50),
      }}>
      {!stepperType || stepperType === "vertical-title" ? (
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: verticalScale(10),
          }}>
          {formSteps &&
            formSteps.map((item, index) => {
              const { submitted, bgColor } = getActiveStepColorAndIcon(index);
              return (
                <View key={index}>
                  <VerticalStepper
                    bgColor={bgColor}
                    submitted={submitted}
                    lastLengthOfData={lastLengthOfData}
                    item={item}
                    index={index}
                    textColor={bgColor}
                  />
                </View>
              );
            })}
        </View>
      ) : stepperType === "horizontal-title" ? (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}>
          {formSteps &&
            formSteps.map((item, index) => {
              const { submitted, bgColor } = getActiveStepColorAndIcon(index);
              return (
                <View key={index} ref={(el) => (itemRefs.current[index] = el)}>
                  <HorizontalStepper
                    bgColor={bgColor}
                    submitted={submitted}
                    lastLengthOfData={lastLengthOfData}
                    item={item}
                    index={index}
                    textColor={bgColor}
                  />
                </View>
              );
            })}
        </ScrollView>
      ) : null}
    </View>
  );
};
