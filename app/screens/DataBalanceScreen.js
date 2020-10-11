import React from "react";
import { StyleSheet, View } from "react-native";
import { ProgressBar } from "react-native-paper";

import AppText from "../components/AppText";
import Screen from "./Screen";
import Card from "../components/Card";
import colors from "../config/colors";

export default function DataBalanceScreen() {
  return (
    <Screen style={styles.container}>
      <AppText size="large">Package: WEB STARTER</AppText>

      <Card style={styles.margin}>
        <AppText size="medium">Package Summary</AppText>
        <ProgressBar
          progress={0.375}
          color={colors.success}
          style={{
            height: 6,
            borderRadius: 5,
            marginVertical: 10,
          }}
        />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <AppText
            style={{
              flex: 1,
            }}
          >
            Used Data: 15 GB
          </AppText>
          <AppText
            style={{
              color: colors.success,
            }}
          >
            37.5%
          </AppText>
        </View>
        <AppText>Remaining Data: 25 GB</AppText>
        <AppText>Total Volume Data: 40 GB</AppText>
      </Card>
      <Card style={styles.margin}>
        <AppText size="medium">Day Time Data Usage</AppText>
        <ProgressBar
          progress={0.5}
          color={colors.success}
          style={{
            height: 6,
            borderRadius: 5,
            marginVertical: 10,
          }}
        />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <AppText
            style={{
              flex: 1,
            }}
          >
            Used Data: 10 GB
          </AppText>
          <AppText
            style={{
              color: colors.success,
            }}
          >
            50%
          </AppText>
        </View>
        <AppText>Remaining Data: 10 GB</AppText>
        <AppText>Total Volume Data: 20 GB</AppText>
      </Card>
      <Card style={styles.margin}>
        <AppText size="medium">Night Time Data Usage</AppText>
        <ProgressBar
          progress={0.75}
          color={colors.success}
          style={{
            height: 6,
            borderRadius: 5,
            marginVertical: 10,
          }}
        />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <AppText
            style={{
              flex: 1,
            }}
          >
            Used Data: 5 GB
          </AppText>
          <AppText
            style={{
              color: colors.success,
            }}
          >
            75%
          </AppText>
        </View>
        <AppText>Remaining Data: 10 GB</AppText>
        <AppText>Total Volume Data: 20 GB</AppText>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  margin: {
    marginTop: 20,
  },
});
