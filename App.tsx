import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { FormStepper } from "./Stepper";
import { formData } from "./form-data";
import { useStepper } from "./useStepper";
import { moderateScale, verticalScale } from "./ui-utils";

export default function App() {
  const { activeStepIndex, nextStep, submittedStepsIndex, prevStep } =
    useStepper(formData);
  return (
    <View style={styles.container}>
      <FormStepper
        data={formData}
        activeStep={activeStepIndex}
        submittedSteps={submittedStepsIndex}
        submittedBgColor='#28a745'
        activeBgColor='crimson'
      />
      <TouchableOpacity onPress={() => nextStep()} style={styles.button}>
        <Text>Next</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => prevStep()} style={styles.button}>
        <Text>Prev</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: verticalScale(50),
  },
  button: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
    marginBottom: verticalScale(10),
    backgroundColor: "#bab5b5",
  },
});
