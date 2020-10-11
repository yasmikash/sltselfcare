import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Button } from "react-native-paper";

import Screen from "../screens/Screen";
import Card from "../components/Card";
import AppText from "../components/AppText";
import colors from "../config/colors";
import routes from "../routes/routes";

export default function ServicesScreen({ navigation }) {
  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
      <Card>
        <AppText size="large">Current Connection: 011-2332345</AppText>
        <AppText size="medium">(Voice + Broadband)</AppText>
        <Button
          onPress={() => {
            navigation.navigate(routes.SERVICE_UPGRADE);
          }}
          icon="server"
          mode="outlined"
          color={colors.light}
          labelStyle={{
            fontSize: 15,
            letterSpacing: 0,
          }}
          style={{
            borderColor: colors.gradientEndSolid,
            borderWidth: 1,
            marginTop: 10,
          }}
        >
          Request Service Upgrade
        </Button>
        <Button
          onPress={() => navigation.navigate(routes.SERVICE_REQUEST)}
          icon="server-plus"
          mode="outlined"
          color={colors.light}
          labelStyle={{
            fontSize: 15,
            letterSpacing: 0,
          }}
          style={{
            borderColor: colors.gradientEndSolid,
            borderWidth: 1,
            marginTop: 10,
          }}
        >
          Request New Service
        </Button>
      </Card>
      </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
