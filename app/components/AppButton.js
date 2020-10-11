import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import AppText from "./AppText";
import colors from "../config/colors";

export default function AppButton({
  white = false,
  small = false,
  text,
  onPress,
  style,
}) {
  if (white) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: colors.light2,
            },
            style,
          ]}
        >
          <AppText
            size="large"
            style={{
              fontWeight: "bold",
              color: colors.dark,
            }}
          >
            {text}
          </AppText>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  if (small) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.containerSmall, style]}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={[colors.gradientButtonStart, colors.gradientButtonEnd]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "100%",
          }}
        />

        <AppText>{text}</AppText>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <LinearGradient
        // Background Linear Gradient
        colors={[colors.gradientButtonStart, colors.gradientButtonEnd]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />

      <AppText size="large">{text}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    position: "relative",
  },
  containerSmall: {
    overflow: "hidden",
    width: "100%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    position: "relative",
  },
});
