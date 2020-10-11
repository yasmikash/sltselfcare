import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Checkbox, Button } from "react-native-paper";
import { Picker } from "@react-native-community/picker";

import AppText from "../components/AppText";
import Screen from "./Screen";
import colors from "../config/colors";
import Card from "../components/Card";
import AppField from "../components/form/AppField";
import routes from "../routes/routes";

export default function ServiceRequestScreen({ navigation }) {
  const [voice, setVoice] = useState(true);
  const [broadband, setBroadband] = useState(true);
  const [peoTV, setPeoTV] = useState(false);
  const [serviceType, setServiceType] = useState();

  return (
    <Screen style={styles.container}>
      <Card style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AppText
            size="medium"
            style={{
              flex: 1,
            }}
          >
            Service Type:
          </AppText>
          <Picker
            selectedValue={serviceType}
            style={{
              height: 50,
              width: 200,
              color: colors.light,
            }}
            onValueChange={(itemValue, itemIndex) => setServiceType(itemValue)}
            mode="dropdown"
          >
            <Picker.Item label="SLT Fibre" value="fibre" />
            <Picker.Item label="SLT Megaline" value="megaline" />
            <Picker.Item label="SLT 4G LTE" value="4g" />
          </Picker>
        </View>
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
            Requesting Services:
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
          uppercase={false}
          icon="map-marker"
          mode="outlined"
          color={colors.light}
          labelStyle={{
            fontSize: 15,
            letterSpacing: 0,
          }}
          style={{
            borderColor: colors.gradientEndSolid,
            borderWidth: 1,
            marginTop: 20,
          }}
        >
          Select Location
        </Button>
        <Button
          onPress={() => navigation.navigate(routes.SERVICE_REQUEST_SUCCESS)}
          icon="server-plus"
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
          Request New Service
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
