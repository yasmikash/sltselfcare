import React from "react";
import { Button } from "react-native-paper";

import AppText from "../components/AppText";
import colors from "../config/colors";
import routes from "../routes/routes";
import SuccessScreen from "./SuccessScreen";

export default function ServiceRequestSuccess({ navigation }) {
  return (
    <SuccessScreen navigation={navigation} heading="Request Successful">
      <AppText
        size="medium"
        style={{
          marginVertical: 10,
        }}
      >
        Reference No.: ref8829388
      </AppText>
      <AppText
        size="medium"
        style={{
          textAlign: "center",
        }}
      >
        Complaints were submitted successfully. We will contact you soon.
      </AppText>
      <AppText
        style={{
          color: colors.lightSecondary,
          marginTop: 10,
        }}
      >
        Today at 12.30 PM
      </AppText>
      <Button
        onPress={() => navigation.navigate(routes.MY_COMPLAINTS)}
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
        Back to Complaints
      </Button>
    </SuccessScreen>
  );
}
