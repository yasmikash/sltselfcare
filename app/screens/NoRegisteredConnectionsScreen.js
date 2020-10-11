import React from "react";
import { StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./Screen";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Separator from "../components/Separator";
import colors from "../config/colors";
import routes from "../routes/routes";

export default function NoRegisteredConnectionsScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Image
        source={require("../../assets/background.png")}
        style={styles.image}
      />
      <AppText size="xlarge">No Registered Connections</AppText>
      <MaterialCommunityIcons
        name="hand-pointing-down"
        size={50}
        color={colors.light}
        style={{
          marginVertical: 20,
        }}
      />
      <AppButton
        onPress={() => navigation.navigate(routes.ADD_CONNECTION)}
        text="Add New Connection"
        style={{
          width: "50%",
        }}
      />
      <Separator />
      <AppButton
        onPress={() => navigation.navigate(routes.CONNECTIONS)}
        text="Request New Connection"
        style={{
          width: "60%",
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: "70%",
    height: 300,
  },
});
