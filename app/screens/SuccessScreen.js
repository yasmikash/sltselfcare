import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../screens/Screen";
import colors from "../config/colors";
import AppText from "../components/AppText";

export default function SuccessScreen({ heading, children }) {
  return (
    <Screen style={styles.container}>
      <MaterialCommunityIcons
        name="check-circle"
        size={150}
        color={colors.light}
      />
      <AppText
        style={{
          fontSize: 30,
        }}
      >
        {heading}
      </AppText>
      {children}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
