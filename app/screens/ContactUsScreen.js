import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import * as Linking from "expo-linking";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "./Screen";

export default function ContactUsScreen() {
  return (
    <Screen style={styles.container}>
      <Card>
        <Button
          onPress={() => Linking.openURL("tel:1212")}
          icon="phone-in-talk"
          mode="outlined"
          color={colors.light}
          labelStyle={{
            fontSize: 20,
            letterSpacing: 0,
          }}
          style={{
            borderColor: colors.gradientEndSolid,
            backgroundColor: colors.gradientEnd,
            borderWidth: 1,
            marginTop: 10,
          }}
        >
          1212
        </Button>
        <Button
          onPress={() => Linking.openURL("mailto:1212@slt.com.lk")}
          icon="email"
          mode="outlined"
          uppercase={false}
          color={colors.light}
          labelStyle={{
            fontSize: 20,
            letterSpacing: 0,
          }}
          style={{
            borderColor: colors.gradientEndSolid,
            backgroundColor: colors.gradientEnd,
            borderWidth: 1,
            marginTop: 10,
          }}
        >
          1212@slt.com.lk
        </Button>
        <Button
          onPress={() =>
            Linking.openURL("sms:0111212121?body=Hello SLT! I need to know...")
          }
          icon="cellphone-message"
          mode="outlined"
          uppercase={false}
          color={colors.light}
          labelStyle={{
            fontSize: 20,
            letterSpacing: 0,
          }}
          style={{
            borderColor: colors.gradientEndSolid,
            backgroundColor: colors.gradientEnd,
            borderWidth: 1,
            marginTop: 10,
          }}
        >
          011-1212121
        </Button>
      </Card>
      <Card style={styles.margin}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.iconBackground}>
            <MaterialCommunityIcons
              name="facebook"
              size={35}
              color={colors.light}
            />
          </View>
          <View style={styles.iconBackground}>
            <MaterialCommunityIcons
              name="youtube"
              size={35}
              color={colors.light}
            />
          </View>
          <View style={styles.iconBackground}>
            <MaterialCommunityIcons
              name="twitter"
              size={35}
              color={colors.light}
            />
          </View>
          <View style={styles.iconBackground}>
            <MaterialCommunityIcons
              name="instagram"
              size={35}
              color={colors.light}
            />
          </View>
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
    marginTop: 20,
  },
  iconBackground: {
    backgroundColor: colors.gradientEndSolid,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 100,
  },
});
