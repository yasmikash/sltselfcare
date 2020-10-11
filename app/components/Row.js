import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";

export default function Row({ style, children }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    height: "auto",
    width: "100%",
    padding: 10,
  },
});
