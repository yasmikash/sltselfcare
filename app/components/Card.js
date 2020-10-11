import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppField from "./form/AppField";

export default function Card({ style, children }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(79, 118, 195, 0.8)",
    height: "auto",
    width: "95%",
    borderRadius: 5,
    padding: 10,
  },
});
