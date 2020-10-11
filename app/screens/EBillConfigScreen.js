import React, { useState } from "react";
import { StyleSheet, View, Switch } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Card from "../components/Card";
import AppField from "../components/form/AppField";
import colors from "../config/colors";
import Screen from "./Screen";

export default function EBillConfigScreen() {
  const [sms, setSms] = useState(true);
  const [email, setEmail] = useState(true);

  const toggleSms = () => {
    setSms(!sms);
  };

  const toggleEmail = () => {
    setEmail(!email);
  };

  return (
    <Screen style={styles.container}>
      <Card style={styles.margin}>
        <AppText
          size="large"
          style={{
            marginBottom: 10,
          }}
        >
          eBill (Activation/Deactivation)
        </AppText>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AppText size="medium">eBill Email</AppText>
            <Switch
              trackColor={{
                false: colors.inactive,
                true: colors.inactive,
              }}
              thumbColor={email ? colors.gradientEndSolid : colors.light}
              onValueChange={toggleEmail}
              value={email}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AppText size="medium">eBill SMS</AppText>
            <Switch
              trackColor={{
                false: colors.inactive,
                true: colors.inactive,
              }}
              thumbColor={sms ? colors.gradientEndSolid : colors.light}
              onValueChange={toggleSms}
              value={sms}
            />
          </View>
        </View>
      </Card>
      <Card style={styles.margin}>
        <AppText
          size="large"
          style={{
            marginBottom: 10,
          }}
        >
          Change eBilling Email Address
        </AppText>
        <AppText size="medium">Existing Email: yasmikash@gmail.com</AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AppText
            size="medium"
            style={{
              width: "30%",
            }}
          >
            New Email:
          </AppText>
          <AppField
            placeholder="Enter New Email"
            style={{
              flex: 1,
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            alignItems: "flex-end",
          }}
        >
          <AppButton
            text="Change"
            style={{
              width: "30%",
            }}
          />
        </View>
      </Card>
      <Card>
        <AppText
          size="large"
          style={{
            marginBottom: 10,
          }}
        >
          Change eBilling Phone Number
        </AppText>
        <AppText size="medium">Existing Phone Number: 0713434567</AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AppText
            size="medium"
            style={{
              width: "40%",
            }}
          >
            New Phone No.:
          </AppText>
          <AppField
            placeholder="Enter New Phone No."
            keyboardType="phone-pad"
            style={{
              flex: 1,
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            alignItems: "flex-end",
          }}
        >
          <AppButton
            text="Change"
            style={{
              width: "30%",
            }}
          />
        </View>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  margin: {
    marginBottom: 20,
  },
});
