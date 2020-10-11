import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Checkbox, Button } from "react-native-paper";

import AppText from "../components/AppText";
import Screen from "./Screen";
import colors from "../config/colors";
import Card from "../components/Card";
import AppField from "../components/form/AppField";
import routes from "../routes/routes";

export default function ServiceUpgradeScreen({ navigation }) {
  const [voice, setVoice] = useState(true);
  const [broadband, setBroadband] = useState(true);
  const [peoTV, setPeoTV] = useState(false);

  return (
    <Screen style={styles.container}>
      <Card style={styles.container}>
        <AppText size="large">Current Connection: 011-2544256</AppText>
        <AppText size="medium">(Voice + Broadband)</AppText>
        <View
          style={{
            alignSelf: "flex-start",
          }}
        >
          <AppText
            size="medium"
            style={{
              marginVertical: 10,
            }}
          >
            Requesting Service:
          </AppText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox.Android
              disabled
              status={voice ? "checked" : "unchecked"}
              onPress={() => {
                setVoice(!voice);
              }}
              color={colors.light}
              uncheckedColor={colors.gradientEndSolid}
            />
            <AppText size="medium">Voice</AppText>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox.Android
              disabled
              status={broadband ? "checked" : "unchecked"}
              onPress={() => {
                setBroadband(!broadband);
              }}
              color={colors.light}
              uncheckedColor={colors.gradientEndSolid}
            />
            <AppText size="medium">Broadband</AppText>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox.Android
              status={peoTV ? "checked" : "unchecked"}
              onPress={() => {
                setPeoTV(!peoTV);
              }}
              color={colors.light}
              uncheckedColor={colors.gradientEndSolid}
            />
            <AppText size="medium">Peo TV</AppText>
          </View>
        </View>
        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            alignSelf: "flex-start",
            alignItems: "center",
          }}
        >
          <AppText size="medium">Username:</AppText>
          <AppField
            placeholder="Enter Username"
            value="yasmikash"
            editable={false}
            style={{
              flex: 1,
              marginLeft: 10,
            }}
          />
        </View>
        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            alignSelf: "flex-start",
            alignItems: "center",
          }}
        >
          <AppText size="medium">NIC:</AppText>
          <AppField
            placeholder="Enter NIC"
            value="962262920V"
            editable={false}
            style={{
              flex: 1,
              marginLeft: 10,
            }}
          />
        </View>
        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            alignSelf: "flex-start",
            alignItems: "center",
          }}
        >
          <AppText size="medium">Contact No.:</AppText>
          <AppField
            placeholder="Enter Contact No."
            keyboardType="phone-pad"
            style={{
              flex: 1,
              marginLeft: 10,
            }}
          />
        </View>
        <Button
          onPress={() => navigation.navigate(routes.SERVICE_UPGRADE_SUCCESS)}
          icon="server"
          mode="outlined"
          color={colors.light}
          labelStyle={{
            fontSize: 15,
            letterSpacing: 0,
          }}
          style={{
            backgroundColor: colors.gradientEndSolid,
            borderColor: colors.gradientEndSolid,
            borderWidth: 1,
            marginTop: 20,
          }}
        >
          Request Service Upgrade
        </Button>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
