import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import AppContext from "../context/AppContext";

import AppText from "../components/AppText";
import Screen from "./Screen";
import Card from "../components/Card";
import AppButton from "../components/AppButton";
import Row from "../components/Row";
import PopUpMenu from "../components/PopUpMenu";
import routes from "../routes/routes";

export default function EBillScreen({ navigation }) {
  const { popUpMenu } = useContext(AppContext);

  return (
    <Screen style={styles.container}>
      {popUpMenu && (
        <PopUpMenu
          items={[
            {
              name: "Billing History",
              route: routes.EBillHistory,
            },
            {
              name: "eBill Configuration",
              route: routes.EBillConfig,
            },
          ]}
          navigation={navigation}
        />
      )}
      <Card style={styles.margin}>
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
          <AppButton
            onPress={() => navigation.navigate(routes.PAY_EBILL)}
            text="PAY NOW"
          />
        </View>
      </Card>
      <Card style={styles.margin}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <AppText
            style={{
              flex: 1,
            }}
            size="medium"
          >
            Last Payment Date:
          </AppText>
          <AppText size="medium">2020/07/07</AppText>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <AppText
            style={{
              flex: 1,
            }}
            size="medium"
          >
            Last Payment Amount:
          </AppText>
          <AppText size="medium">Rs. 2,000.00</AppText>
        </View>
      </Card>
      <Card
        style={{
          paddingHorizontal: 0,
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <AppText size="large">Previous Billing Information</AppText>
        </View>
        <Row
          style={{
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <AppText
              style={{
                flex: 1,
              }}
              size="medium"
            >
              July, 2020
            </AppText>
            <AppText size="medium">Rs. 1,450.00</AppText>
          </View>
        </Row>
        <Row
          style={{
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <AppText
              style={{
                flex: 1,
              }}
              size="medium"
            >
              June, 2020
            </AppText>
            <AppText size="medium">Rs. 1,500.00</AppText>
          </View>
        </Row>
        <Row
          style={{
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <AppText
              style={{
                flex: 1,
              }}
              size="medium"
            >
              May, 2020
            </AppText>
            <AppText size="medium">Rs. 2,500.00</AppText>
          </View>
        </Row>
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
