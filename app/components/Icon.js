import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Icon({ name, color }) {
  return <MaterialCommunityIcons name={name} size={30} color={color} />;
}
