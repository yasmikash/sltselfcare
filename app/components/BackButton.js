import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function BackButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons
        name="keyboard-backspace"
        color={colors.light}
        size={35}
      />
    </TouchableOpacity>
  );
}
