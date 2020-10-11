import React, { useContext } from "react";
import { Image, StyleSheet, View, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AuthContext from "../context/AuthContext";

import Screen from "../screens/Screen";
import AppText from "../components/AppText";
import Card from "../components/Card";
import colors from "../config/colors";
import Connections from "../components/Connections";

export default function ProfileScreen() {
  const { user } = useContext(AuthContext);

  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <Card
            style={{
              position: "relative",
              marginBottom: 20,
            }}
          >
            <MaterialCommunityIcons
              name="settings"
              color={colors.light}
              size={30}
              style={{
                position: "absolute",
                right: 10,
                top: 10,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/user.jpg")}
                style={styles.image}
              />
              <View>
                <AppText size="medium">{user.username}</AppText>
                <AppText>yasmikash@gmail.com</AppText>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <MaterialCommunityIcons
                name="google"
                size={15}
                color={colors.light}
              />
              <AppText
                style={{
                  marginLeft: 10,
                }}
              >
                Google Connected
              </AppText>
            </View>
          </Card>
          <Connections />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
});
