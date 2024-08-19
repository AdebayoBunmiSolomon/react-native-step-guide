import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DVH, DVW, moderateScale, verticalScale } from "./ui-utils";
import { Ionicons } from "@expo/vector-icons";

export interface IDataTypeProps {
  title: string;
}
[];

export type stepperPropType = {
  data: IDataTypeProps[];
  activeStep: number;
  submittedSteps: number[];
  inactiveBgColor?: string;
  activeBgColor?: string;
  submittedBgColor?: string;
};

export const FormStepper: React.FC<stepperPropType> = ({
  data,
  activeStep,
  submittedSteps,
  inactiveBgColor,
  activeBgColor,
  submittedBgColor,
}) => {
  const subSteps = submittedSteps && submittedSteps.map((item) => item);
  const lastLengthOfData = data && data.length - 1;

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
      if (subSteps[index]) {
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

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {data &&
        data.map((item, index) => {
          const { submitted, bgColor } = getActiveStepColorAndIcon(index);
          return (
            <View style={styles.mainContainer}>
              <View style={styles.container}>
                <View
                  style={[
                    styles.contentContainer,
                    {
                      backgroundColor: bgColor,
                      paddingVertical: submitted
                        ? moderateScale(13)
                        : moderateScale(10),
                    },
                  ]}>
                  <Text style={styles.text}>
                    {submitted ? (
                      <Ionicons
                        name='checkmark-circle-sharp'
                        size={moderateScale(15)}
                        color={"white"}
                      />
                    ) : (
                      index + 1
                    )}
                  </Text>
                </View>

                <Text style={styles.contentTitle}>{item.title}</Text>
              </View>
              {lastLengthOfData && lastLengthOfData !== index && (
                <View
                  style={[
                    styles.line,
                    {
                      backgroundColor: bgColor,
                    },
                  ]}
                />
              )}
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    gap: verticalScale(5),
  },
  contentTitle: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    backgroundColor: "#fafffe",
  },
  contentContainer: {
    borderRadius: 100,
    paddingHorizontal: moderateScale(15),
  },
  text: {
    fontSize: moderateScale(17),
    fontWeight: "600",
    color: "white",
  },
  line: {
    height: DVH(0.2),
    width: DVW(10),
    marginTop: verticalScale(-40),
    marginLeft: DVW(-3),
  },
});
