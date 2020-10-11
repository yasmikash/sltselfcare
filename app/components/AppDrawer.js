import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import AppText from "./AppText";
import DrawerHeader from "./DrawerHeader";

export default function AppDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerHeader />
      <DrawerItemList
        {...props}
        labelStyle={{
          fontSize: 14,
        }}
      />
    </DrawerContentScrollView>
  );
}
