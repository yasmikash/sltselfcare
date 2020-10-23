import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import AppButton from "../components/AppButton";

import Screen from "./Screen";
import Card from "../components/Card";
import AppText from "../components/AppText";
import colors from "../config/colors";
import AppField from "../components/form/AppField";
import routes from "../routes/routes";
import MapModal from "../components/MapModal";

export default function ComplaintsScreen({ navigation }) {
  const [modalVisilibity, setModalVisibility] = useState(false);

  return (
    <Screen style={styles.container}>
      <MapModal
        modalVisibility={modalVisilibity}
        closeHandler={() => setModalVisibility(false)}
      />
      <Card>
        <AppText
          size="large"
          style={{
            alignSelf: "center",
          }}
        >
          Connection: 011-2322212
        </AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="cellphone-android"
            size={30}
            color={colors.light}
          />
          <AppField
            placeholder="Contact Number"
            keyboardType="phone-pad"
            style={{
              flex: 1,
              marginTop: 10,
            }}
          />
        </View>
        <Button
          onPress={() => setModalVisibility(true)}
          uppercase={false}
          icon="map-marker"
          mode="outlined"
          color={colors.light}
          labelStyle={{
            fontSize: 15,
            letterSpacing: 0,
          }}
          style={{
            borderColor: colors.gradientEndSolid,
            borderWidth: 1,
            marginTop: 20,
          }}
        >
          Select Your Location
        </Button>
        <MaterialCommunityIcons
          name="account-badge-alert"
          size={30}
          color={colors.light}
          style={{
            marginTop: 10,
            marginBottom: 5,
          }}
        />
        <AppField
          placeholder="Enter Your Complaint Description"
          multiline={true}
          textAlignVertical="top"
          style={{
            height: 150,
          }}
        />

        <AppButton
          onPress={() => navigation.navigate(routes.COMPLAINTS_SUCCESS)}
          text="Submit Complaint"
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
