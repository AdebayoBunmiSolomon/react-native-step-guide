import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DVH, DVW, font, moderateScale } from "../ui-utils";

type DotOnlyStepperProps = {
  bgColor: string;
  submitted: boolean;
  lastLengthOfData: number;
  item: string;
  index: number;
  textColor: string;
};

export const DotOnlyStepper: React.FC<DotOnlyStepperProps> = ({
  bgColor,
  submitted,
  lastLengthOfData,
  index,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View
          style={[
            styles.contentContainer,
            {
              backgroundColor: bgColor,
              paddingVertical: submitted ? moderateScale(7) : moderateScale(7),
            },
          ]}></View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    width: DVW(18),
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentTitle: {
    maxWidth: "60%",
    fontSize: font.size8,
    textAlign: "center",
  },
  contentContainer: {
    borderRadius: 100,
    paddingHorizontal: moderateScale(7),
  },
  text: {
    fontSize: moderateScale(10),
    fontWeight: "600",
    color: "white",
  },
  line: {
    height: DVH(0.4),
    width: DVW(17),
    marginLeft: DVW(-1),
  },
});
