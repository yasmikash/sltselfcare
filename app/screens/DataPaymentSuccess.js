import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

import AppText from "../components/AppText";
import colors from "../config/colors";
import routes from "../routes/routes";

import SuccessScreen from "./SuccessScreen";

export default function ServiceRequestSuccess({ navigation }) {
  return (
    <SuccessScreen heading="Payment Successful">
      <View
        style={{
          marginTop: 10,
        }}
      >
        <AppText size="medium">Connection Number: 011-2122324</AppText>
        <AppText
          size="medium"
          style={{
            alignSelf: "center",
          }}
        >
          10 GB
        </AppText>
        <AppText size="medium">Added to your account successfully.</AppText>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <AppText
            style={{
              flex: 1,
              color: colors.lightSecondary,
            }}
          >
            Today at 12.00
          </AppText>
          <AppText>Rs. 500.00</AppText>
        </View>
      </View>
      <Button
        onPress={() => navigation.navigate(routes.HOME)}
        icon="arrow-left-circle"
        mode="outlined"
        color={colors.light}
        labelStyle={{
          fontSize: 15,
          letterSpacing: 0,
        }}
        style={{
          borderColor: colors.gradientEndSolid,
          borderWidth: 1,
          marginVertical: 30,
        }}
      >
        Download Receipt and Go Back Home
      </Button>
    </SuccessScreen>
  );
}
