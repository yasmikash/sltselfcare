import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ProgressBar } from "react-native-paper";

import AppContext from "../context/AppContext";

import AppText from "../components/AppText";
import Screen from "./Screen";
import AppButton from "../components/AppButton";
import PopUpMenu from "../components/PopUpMenu";
import routes from "../routes/routes";
import colors from "../config/colors";

export default function BroadbandScreen({ navigation }) {
  const { popUpMenu } = useContext(AppContext);

  return (
    <Screen style={styles.container}>
      {popUpMenu && (
        <PopUpMenu
          items={[
            {
              name: "Data Balance",
              route: routes.DATA_BALANCE,
            },
            {
              name: "Data Extension Plans",
              route: routes.DATA_EXTENSIONS,
            },
            {
              name: "Data Extension History",
              route: routes.DATA_PURCHASE_HISTORY,
            },
          ]}
          navigation={navigation}
        />
      )}
      <AppText size="large">Package: WEB STARTER</AppText>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
          marginVertical: 20,
        }}
      >
        <View>
          <ProgressBar
            progress={0.8}
            color={colors.success}
            style={{
              height: 8,
              borderRadius: 5,
              marginVertical: 10,
            }}
          />
          <AppText
            style={{
              marginBottom: 10,
            }}
          >
            REMAINING: 20 GB
          </AppText>
          <AppText size="medium">Night Time Usage</AppText>
          <AppText size="medium">(00.00 - 05.59)</AppText>
        </View>
        <View>
          <ProgressBar
            progress={0.5}
            color={colors.success}
            style={{
              height: 8,
              borderRadius: 5,
              marginVertical: 10,
            }}
          />
          <AppText
            style={{
              marginBottom: 10,
            }}
          >
            REMAINING: 10 GB
          </AppText>
          <AppText size="medium">Day Time Usage</AppText>
          <AppText size="medium">(06.00 - 23.59)</AppText>
        </View>
      </View>
      <AppButton
        onPress={() => navigation.navigate(routes.DATA_BALANCE)}
        text="More Details"
        style={{
          width: "50%",
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
