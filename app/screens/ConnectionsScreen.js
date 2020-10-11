import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Screen from "./Screen";
import AppButton from "../components/AppButton";
import Separator from "../components/Separator";
import routes from "../routes/routes";
import Connections from "../components/Connections";

export default function ConnectionsScreen({ navigation }) {
  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <Connections />
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
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 10,
  },
});
