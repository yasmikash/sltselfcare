import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Screen from "./Screen";
import Card from "../components/Card";
import AppText from "../components/AppText";
import colors from "../config/colors";

export default function DataPurchaseHistoryScren() {
  return (
    <Screen style={styles.container}>
      <Card style={styles.margin}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AppText
            size="large"
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: colors.lightSecondary,
              marginRight: 20,
              marginBottom: 10,
              paddingBottom: 2,
            }}
          >
            Extra Data
          </AppText>
          <AppText
            size="large"
            style={{
              fontWeight: "bold",
              color: colors.success,
            }}
          >
            10 GB
          </AppText>
        </View>
        <AppText>Added by yasmikash (Using SLT SelfCare)</AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AppText
            style={{
              flex: 1,
            }}
          >
            2020-08-01 06:45 PM
          </AppText>
          <AppText
            size="medium"
            style={{
              fontWeight: "bold",
            }}
          >
            Rs. 500.00
          </AppText>
        </View>
      </Card>
      <Card style={styles.margin}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AppText
            size="large"
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: colors.lightSecondary,
              marginRight: 20,
              marginBottom: 10,
              paddingBottom: 2,
            }}
          >
            Extra Data
          </AppText>
          <AppText
            size="large"
            style={{
              fontWeight: "bold",
              color: colors.success,
            }}
          >
            10 GB
          </AppText>
        </View>
        <AppText>Added by yasmikash (Using SLT SelfCare)</AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AppText
            style={{
              flex: 1,
            }}
          >
            2020-08-01 06:45 PM
          </AppText>
          <AppText
            size="medium"
            style={{
              fontWeight: "bold",
            }}
          >
            Rs. 500.00
          </AppText>
        </View>
      </Card>
      <Card style={styles.margin}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AppText
            size="large"
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: colors.lightSecondary,
              marginRight: 20,
              marginBottom: 10,
              paddingBottom: 2,
            }}
          >
            Extra Data
          </AppText>
          <AppText
            size="large"
            style={{
              fontWeight: "bold",
              color: colors.success,
            }}
          >
            10 GB
          </AppText>
        </View>
        <AppText>Added by yasmikash (Using SLT SelfCare)</AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AppText
            style={{
              flex: 1,
            }}
          >
            2020-08-01 06:45 PM
          </AppText>
          <AppText
            size="medium"
            style={{
              fontWeight: "bold",
            }}
          >
            Rs. 500.00
          </AppText>
        </View>
      </Card>
      <Card style={styles.margin}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AppText
            size="large"
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: colors.lightSecondary,
              marginRight: 20,
              marginBottom: 10,
              paddingBottom: 2,
            }}
          >
            Extra Data
          </AppText>
          <AppText
            size="large"
            style={{
              fontWeight: "bold",
              color: colors.success,
            }}
          >
            10 GB
          </AppText>
        </View>
        <AppText>Added by yasmikash (Using SLT SelfCare)</AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AppText
            style={{
              flex: 1,
            }}
          >
            2020-08-01 06:45 PM
          </AppText>
          <AppText
            size="medium"
            style={{
              fontWeight: "bold",
            }}
          >
            Rs. 500.00
          </AppText>
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
