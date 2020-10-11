import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import AppText from "../AppText";

export default function AppField({ style, error, errorVisibility, ...props }) {
  return (
    <>
      <TextInput
        selectionColor={colors.textSecondary}
        style={[styles.container, style]}
        {...props}
        selectionColor={colors.gradientEndSolid}
      />

      {error && errorVisibility && (
        <View style={styles.errorContainer}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={15}
            color={colors.light}
          />
          <AppText style={styles.errorText}>{error}</AppText>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    width: "100%",
    padding: 10,
    fontSize: 17,
    borderRadius: 5,
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 2,
  },
  errorText: {
    marginLeft: 5,
  },
});
