import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Screen from "./Screen";
import Card from "../components/Card";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { Picker } from "@react-native-community/picker";

export default function DataPurchaseHistoryScren() {
  const [year, setYear] = useState();

  return (
    <Screen style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 10,
        }}
      >
        <AppText
          size="large"
          style={{
            flex: 1,
          }}
        >
          Purchase History
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
            Extra Data
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
        <AppText>Added by yasmikash (Using SLT SelfCare)</AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AppText
            style={{
              flex: 1,
            }}
          >
            2020-08-01 06:45 PM
          </AppText>
          <AppText
            size="medium"
            style={{
              fontWeight: "bold",
            }}
          >
            Rs. 500.00
          </AppText>
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
            Extra Data
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
        <AppText>Added by yasmikash (Using SLT SelfCare)</AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AppText
            style={{
              flex: 1,
            }}
          >
            2020-08-01 06:45 PM
          </AppText>
          <AppText
            size="medium"
            style={{
              fontWeight: "bold",
            }}
          >
            Rs. 500.00
          </AppText>
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
            Extra Data
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
        <AppText>Added by yasmikash (Using SLT SelfCare)</AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AppText
            style={{
              flex: 1,
            }}
          >
            2020-08-01 06:45 PM
          </AppText>
          <AppText
            size="medium"
            style={{
              fontWeight: "bold",
            }}
          >
            Rs. 500.00
          </AppText>
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
            Extra Data
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
        <AppText>Added by yasmikash (Using SLT SelfCare)</AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AppText
            style={{
              flex: 1,
            }}
          >
            2020-08-01 06:45 PM
          </AppText>
          <AppText
            size="medium"
            style={{
              fontWeight: "bold",
            }}
          >
            Rs. 500.00
          </AppText>
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
    marginBottom: 20,
  },
});
