import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-community/picker";

import Screen from "../screens/Screen";
import Card from "../components/Card";
import AppText from "../components/AppText";
import Row from "../components/Row";
import colors from "../config/colors";

export default function EBillHistoryScreen() {
  const [year, setYear] = useState();
  return (
    <Screen style={styles.container}>
      <Card>
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
            }}
          >
            Billing History
          </AppText>
          <Picker
            selectedValue={year}
            style={{
              height: 50,
              width: 105,
              color: colors.light,
            }}
            onValueChange={(itemValue, itemIndex) => setYear(itemValue)}
            mode="dropdown"
          >
            <Picker.Item label="2020" value="2020" />
            <Picker.Item label="2019" value="2019" />
            <Picker.Item label="2018" value="2018" />
            <Picker.Item label="2017" value="2017" />
          </Picker>
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
              January
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
              February
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
              March
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
              April
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
              May
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
              June
            </AppText>
            <AppText size="medium">Rs. 1,000.00</AppText>
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
});
