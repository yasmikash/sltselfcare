import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Constants from "expo-constants";
import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";

const deviceHeight = Dimensions.get("window").height;
const statusBarHeight = Constants.statusBarHeight;

export default function Screen({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      <>
        <LinearGradient
          colors={[colors.gradientStart, colors.gradientEnd]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: deviceHeight,
          }}
        />
        {children}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    position: "relative",
  },
});
