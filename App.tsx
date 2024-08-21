import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { FormStepper } from "./src/Stepper/Stepper";
import { formData } from "./form-data";
import { useStepper } from "./src/hooks/useStepper";
import { DVW, moderateScale, verticalScale } from "./src/ui-utils";

export default function App() {
  const { activeStepIndex, nextStep, submittedStepsIndex, prevStep } =
    useStepper(formData);
  return (
    <>
      <View style={styles.container}>
        <FormStepper
          data={formData}
          activeStep={activeStepIndex}
          submittedSteps={submittedStepsIndex}
          submittedBgColor='#28a745'
          activeBgColor='#DC143C'
          stepperType='horizontal-title'
        />
        <TouchableOpacity onPress={() => nextStep()} style={styles.button}>
          <Text>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => prevStep()} style={styles.button}>
          <Text>Prev</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    marginHorizontal: DVW(5),
  },
  button: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(10),
    backgroundColor: "#bab5b5",
  },
});
