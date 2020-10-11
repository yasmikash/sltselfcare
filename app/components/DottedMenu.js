import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function BackButton({ onPress, active = false }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons
        name={active ? "dots-vertical-circle" : "dots-vertical"}
        color={colors.light}
        size={35}
      />
    </TouchableOpacity>
  );
}
