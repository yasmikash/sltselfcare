import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { RadioButton } from "react-native-paper";
import AppButton from "../components/AppButton";

import AppText from "../components/AppText";
import Card from "../components/Card";
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
        <AppText
          style={{
            alignSelf: "flex-end",
          }}
        >
          2020/08/26
        </AppText>
        <AppText size="medium">Web Starter Package: 10 GB</AppText>
        <Card
          style={{
            alignSelf: "center",
            marginVertical: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <AppText
              size="medium"
              style={{
                flex: 1,
              }}
            >
              Amount:
            </AppText>
            <AppText size="medium">Rs. 500.00</AppText>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <AppText
              size="medium"
              style={{
                flex: 1,
              }}
            >
              Tax:
            </AppText>
            <AppText size="medium">Rs. 20.00</AppText>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <AppText
              size="medium"
              style={{
                flex: 1,
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              Total:
            </AppText>
            <AppText size="medium">Rs. 520.00</AppText>
          </View>
        </Card>
        <AppText
          size="medium"
          style={{
            marginBottom: 10,
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <RadioButton
            value="bill"
            status={paymentMethod === "bill" ? "checked" : "unchecked"}
            onPress={() => setPaymentMethod("bill")}
            color={colors.light}
            uncheckedColor={colors.gradientEndSolid}
          />
          <AppText size="medium">Add To Bill</AppText>
        </View>
        <AppButton
          onPress={() =>
            navigation.navigate(routes.PAY_NOW, {
              routeName: routes.DATA_PAYMENT_SUCCESS,
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
