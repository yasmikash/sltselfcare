import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

export default function Separator() {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <AppText size="medium" style={styles.text}>
        OR
      </AppText>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  line: {
    backgroundColor: colors.light,
    height: 1.2,
    width: "40%",
  },
  text: {
    marginLeft: 5,
    marginRight: 5,
  },
});
