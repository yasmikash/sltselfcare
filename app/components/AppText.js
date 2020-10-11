import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

export default function AppText({ children, size, style, ...props }) {
  let fontStyle = {};

  switch (size) {
    case "medium":
      fontStyle.fontSize = 17;
      break;
    case "large":
      fontStyle.fontSize = 18;
      break;
    case "xlarge":
      fontStyle.fontSize = 20;
      break;
    default:
      fontStyle.fontSize = 14;
      break;
  }

  return (
    <Text style={[fontStyle, styles.text, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.light,
  },
});
