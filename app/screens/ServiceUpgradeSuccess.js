import React from "react";
import { Button } from "react-native-paper";

import AppText from "../components/AppText";
import colors from "../config/colors";
import routes from "../routes/routes";
import SuccessScreen from "./SuccessScreen";

export default function ServiceUpgradeSuccess({ navigation }) {
  return (
    <SuccessScreen navigation={navigation} heading="Request Successful">
      <AppText
        size="medium"
        style={{
          marginTop: 10,
        }}
      >
        Connection Number: 011-1232124
      </AppText>
      <AppText size="medium">Request No: 2231233</AppText>
      <AppText
        style={{
          color: colors.lightSecondary,
          marginTop: 10,
        }}
      >
        Today at 12.00 PM
      </AppText>
      <Button
        onPress={() => navigation.navigate(routes.MY_SERVICES)}
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
        Back to Services
      </Button>
    </SuccessScreen>
  );
}
