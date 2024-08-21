import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DVH, DVW, font, moderateScale } from "../ui-utils";
import { Ionicons } from "@expo/vector-icons";

type NBrokenLineProps = {
  bgColor: string;
  submitted: boolean;
  lastLengthOfData: number;
  item: {
    title: string;
  };
  index: number;
  textColor: string;
};

export const NBrokenLine: React.FC<NBrokenLineProps> = ({
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
      <View
        style={{
          width: "100%",
          justifyContent: "center",
        }}>
        <Text
          style={[
            styles.contentTitle,
            {
              color: textColor,
            },
          ]}>
          {item.title}
        </Text>
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
    marginLeft: DVW(-3),
  },
});
