import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import AppText from "./AppText";

export default function TextButton({ onPress, text, size = "small" }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText size={size}>{text}</AppText>
    </TouchableOpacity>
  );
}
