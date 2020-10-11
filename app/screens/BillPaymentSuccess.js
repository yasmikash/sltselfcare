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
          width: "90%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <AppText size="medium">Connection Number: 011-2122322</AppText>
            <AppText
              style={{
                color: colors.lightSecondary,
              }}
            >
              Today at 12.00 PM
            </AppText>
          </View>
          <AppText size="medium">Rs. 2,000.00</AppText>
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
