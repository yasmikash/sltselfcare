import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ProgressBar } from "react-native-paper";

import AuthContext from "../context/AuthContext";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "./Screen";

export default function Dashboard() {
  const { accounts } = useContext(AuthContext);

  return (
    <Screen style={styles.container}>
      <Card style={[styles.connectionContainer, styles.margin]}>
        <AppText size="medium">Connection: {accounts[0].telephoneNo}</AppText>
        <AppText>(Broadband + Voice)</AppText>
      </Card>
      <Card style={[styles.statusContainer, styles.margin]}>
        <AppText
          size="medium"
          style={{
            flex: 1,
          }}
        >
          Voice Status:
        </AppText>
        <AppText
          size="medium"
          style={{
            color: colors.success,
          }}
        >
          Active
        </AppText>
      </Card>
      <Card style={styles.margin}>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
          }}
        >
          <AppText
            size="medium"
            style={{
              flex: 1,
            }}
          >
            Broadband Status:
          </AppText>
          <AppText
            size="medium"
            style={{
              color: colors.success,
            }}
          >
            Active
          </AppText>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              marginRight: 20,
            }}
          >
            <ProgressBar
              progress={0.5}
              color={colors.success}
              style={{
                height: 8,
                borderRadius: 5,
                marginVertical: 10,
              }}
            />
            <AppText>Total Remaining:</AppText>
            <AppText>25 GB</AppText>
          </View>
          <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <AppText>Day time remaining: 10GB</AppText>
            <AppText>Night time remaining: 10GB</AppText>
            <AppButton
              small
              text="Extend Data"
              style={{
                marginTop: 10,
              }}
            />
            <AppButton
              small
              text="More"
              style={{
                marginTop: 10,
              }}
            />
          </View>
        </View>
      </Card>
      <Card style={styles.billingContainer}>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <AppText size="medium">Current Billing Details</AppText>
            <AppText>Monthly Rental</AppText>
            <AppText>Rs. 2,900.00</AppText>
          </View>
          <View>
            <AppText size="medium">As at 2020/08/26</AppText>
            <AppText>Billed Value</AppText>
            <AppText>Rs. -45.76</AppText>
          </View>
        </View>
        <View>
          <AppText
            size="medium"
            style={{
              alignSelf: "center",
              marginBottom: 10,
            }}
          >
            Total Amount: Rs. -45.76
          </AppText>
          <AppButton text="PAY NOW" />
        </View>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  connectionContainer: {},
  statusContainer: {
    flexDirection: "row",
  },
  billingContainer: {},
  margin: {
    marginBottom: 20,
  },
});
