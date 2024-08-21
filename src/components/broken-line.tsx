import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DVW, font, moderateScale } from "../ui-utils";
import { Ionicons } from "@expo/vector-icons";

type BrokenLineProps = {
  bgColor: string;
  submitted: boolean;
  lastLengthOfData: number;
  item: {
    title: string;
  };
  index: number;
  textColor: string;
};

export const BrokenLine: React.FC<BrokenLineProps> = ({
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
            paddingVertical: submitted ? moderateScale(13) : moderateScale(10),
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
      <View>
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
      {/* <View>
        {lastLengthOfData && lastLengthOfData !== index && (
          <View
            style={[
              styles.line,
              {
                borderColor: bgColor,
              },
            ]}
          />
        )}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentTitle: {
    fontSize: font.size12,
    textAlign: "center",
    marginHorizontal: DVW(1),
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
    // height: DVH(0.5),
    // width: DVW(10),
    borderStyle: "dashed",
    borderWidth: DVW(1),
  },
});
