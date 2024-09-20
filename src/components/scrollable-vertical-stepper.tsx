import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DVH, DVW, font, moderateScale, verticalScale } from "../ui-utils";
import { Ionicons } from "@expo/vector-icons";

type ScrollableVerticalStepperProps = {
  doNotShowTitle?: boolean;
  bgColor: string;
  submitted: boolean;
  lastLengthOfData: number;
  item: string;
  index: number;
  textColor: string;
};

export const ScrollableVerticalStepper: React.FC<
  ScrollableVerticalStepperProps
> = ({
  doNotShowTitle,
  bgColor,
  submitted,
  lastLengthOfData,
  item,
  index,
  textColor,
}) => {
  return (
    <View style={styles.mainContainer}>
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
      {doNotShowTitle === true || undefined ? null : (
        <View
          style={{
            width: "100%",
            alignSelf: "center",
            marginLeft: DVW(-2),
          }}>
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
  mainContainer: {
    flexDirection: "column",
    width: DVW(18),
    justifyContent: "center",
    marginBottom: verticalScale(5),
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
  },
  text: {
    fontSize: moderateScale(10),
    fontWeight: "600",
    color: "white",
  },
  line: {
    height: DVH(0.2),
    width: DVW(12),
    marginLeft: DVW(-1),
  },
});
