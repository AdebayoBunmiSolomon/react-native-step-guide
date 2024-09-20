import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DVW, font, moderateScale } from "../ui-utils";
import { Ionicons } from "@expo/vector-icons";

type HorizontalStepperProps = {
  doNotShowTitle?: boolean;
  bgColor: string;
  submitted: boolean;
  lastLengthOfData: number;
  item: string;
  index: number;
  textColor: string;
};

export const HorizontalStepper: React.FC<HorizontalStepperProps> = ({
  doNotShowTitle,
  bgColor,
  submitted,
  lastLengthOfData,
  item,
  index,
  textColor,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.contentContainer,
          {
            backgroundColor: bgColor,
            paddingVertical: submitted ? moderateScale(10) : moderateScale(8),
            paddingHorizontal: submitted
              ? moderateScale(10)
              : moderateScale(11),
            borderColor: bgColor,
            borderWidth: DVW(0.3),
          },
        ]}>
        <Text style={styles.text}>
          {submitted ? (
            <Ionicons
              name='checkmark-circle-sharp'
              size={moderateScale(10)}
              color={"white"}
            />
          ) : (
            index + 1
          )}
        </Text>
      </View>
      {doNotShowTitle === true || undefined ? null : (
        <View>
          <Text
            style={[
              styles.contentTitle,
              {
                color: textColor,
              },
            ]}>
            {item}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentTitle: {
    fontSize: font.size10,
    textAlign: "center",
    marginHorizontal: DVW(1),
  },
  contentContainer: {
    borderRadius: 100,
  },
  text: {
    fontSize: moderateScale(10),
    fontWeight: "600",
    color: "white",
  },
  line: {
    // height: DVH(0.5),
    // width: DVW(10),
    borderStyle: "dashed",
    borderWidth: DVW(1),
  },
});
