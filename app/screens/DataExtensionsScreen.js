import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";

import AppText from "../components/AppText";
import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "./Screen";
import Separator from "../components/Separator";
import routes from "../routes/routes";

export default function DataExtensionsScreen({ navigation }) {
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
            Web Starter
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
        <AppText>Day Time: 5 GB</AppText>
        <AppText>Night Time: 5 GB</AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <AppText
            size="large"
            style={{
              flex: 1,
              fontWeight: "bold",
            }}
          >
            Rs. 500.00
          </AppText>
          <AppButton
            onPress={() =>
              navigation.navigate(routes.ADD_DATA, {
                routeName: routes.DATA_PAYMENT_SUCCESS,
              })
            }
            text="Add Data"
            small
            style={{
              width: "30%",
            }}
          />
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
            Web Plus
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
        <AppText>Day Time: 5 GB</AppText>
        <AppText>Night Time: 5 GB</AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <AppText
            size="large"
            style={{
              flex: 1,
              fontWeight: "bold",
            }}
          >
            Rs. 500.00
          </AppText>
          <AppButton
            onPress={() =>
              navigation.navigate(routes.ADD_DATA, {
                routeName: routes.DATA_PAYMENT_SUCCESS,
              })
            }
            text="Add Data"
            small
            style={{
              width: "30%",
            }}
          />
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
            Max Downloader
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
        <AppText>Day Time: 5 GB</AppText>
        <AppText>Night Time: 5 GB</AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <AppText
            size="large"
            style={{
              flex: 1,
              fontWeight: "bold",
            }}
          >
            Rs. 500.00
          </AppText>
          <AppButton
            onPress={() =>
              navigation.navigate(routes.ADD_DATA, {
                routeName: routes.DATA_PAYMENT_SUCCESS,
              })
            }
            text="Add Data"
            small
            style={{
              width: "30%",
            }}
          />
        </View>
      </Card>
      <Separator />
      <AppButton
        onPress={() =>
          navigation.navigate(routes.ADD_CUSTOM_DATA, {
            routeName: routes.DATA_PAYMENT_SUCCESS,
          })
        }
        text="Add Custom Data"
        style={{
          width: "80%",
        }}
      />
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
