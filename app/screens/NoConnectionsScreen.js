import React from "react";
import { Image, StyleSheet } from "react-native";

import Screen from "../screens/Screen";
import Card from "../components/Card";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import routes from "../routes/routes";

export default function NoConnectionsScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/background.png")}
      />
      <Card style={styles.card}>
        <AppText
          size="xlarge"
          style={{
            marginBottom: 10,
          }}
        >
          No Connections Added
        </AppText>
        <AppButton
          onPress={() => navigation.navigate(routes.ADD_CONNECTION)}
          text="Add Connection"
          style={{
            marginBottom: 10,
          }}
        />
        <AppButton
          onPress={() => navigation.navigate(routes.CONNECTIONS)}
          text="Request New Connection"
        />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: "60%",
    marginBottom: 10,
  },
  card: {
    alignItems: "center",
  },
});
