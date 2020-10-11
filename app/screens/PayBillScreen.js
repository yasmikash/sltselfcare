import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { RadioButton } from "react-native-paper";
import AppButton from "../components/AppButton";

import AppText from "../components/AppText";
import Card from "../components/Card";
import AppField from "../components/form/AppField";
import colors from "../config/colors";
import routes from "../routes/routes";
import Screen from "../screens/Screen";

export default function AddDataScreen({ navigation }) {
  const [paymentMethod, setPaymentMethod] = useState("visa");
  return (
    <Screen style={styles.container}>
      <Card>
        <AppText
          size="large"
          style={{
            alignSelf: "center",
          }}
        >
          Connection: 011-2332331
        </AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <AppText
            size="medium"
            style={{
              flex: 1,
            }}
          >
            Billed Value: Rs. 1562.00
          </AppText>
          <AppText>As at 2020/08/26</AppText>
        </View>
        <AppField
          placeholder="Enter Amount To Be Paid"
          keyboardType="number-pad"
        />
        <AppText
          size="medium"
          style={{
            marginVertical: 10,
          }}
        >
          Payment Method:
        </AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <RadioButton
            value="visa"
            status={paymentMethod === "visa" ? "checked" : "unchecked"}
            onPress={() => setPaymentMethod("visa")}
            color={colors.light}
            uncheckedColor={colors.gradientEndSolid}
          />
          <AppText size="medium">Visa Card</AppText>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <RadioButton
            value="master"
            status={paymentMethod === "master" ? "checked" : "unchecked"}
            onPress={() => setPaymentMethod("master")}
            color={colors.light}
            uncheckedColor={colors.gradientEndSolid}
          />
          <AppText size="medium">Master Card</AppText>
        </View>

        <AppButton
          onPress={() =>
            navigation.navigate(routes.PAY_NOW, {
              routeName: routes.BILL_PAYMENT_SUCCESS,
            })
          }
          text="Pay Now"
          style={{
            marginTop: 20,
          }}
        />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
