import React, { useContext } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AuthContext from "../context/AuthContext";

import AppText from "./AppText";
import colors from "../config/colors";

export default function DrawerHeader() {
  const { user, setUser, setAccounts, accounts } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profile}>
          <Image
            style={styles.image}
            source={require("../../assets/user.jpg")}
          />
          <AppText size="medium">{user.username}</AppText>
        </View>
        <TouchableOpacity
          onPress={() => {
            setUser(null);
            setAccounts([]);
          }}
          style={styles.logout}
        >
          <MaterialCommunityIcons
            name="logout"
            size={30}
            color={colors.light}
          />
          <AppText>Sign Out</AppText>
        </TouchableOpacity>
      </View>
      <View style={styles.accountsContainer}>
        {accounts.length ? (
          accounts.map((account) => {
            return (
              <AppText key={account.telephoneNo + account.accountNo}>
                {account.telephoneNo}
              </AppText>
            );
          })
        ) : (
          <AppText>NO ACCOUNTS</AppText>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  profileContainer: {
    flexDirection: "row",
    paddingBottom: 5,
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 5,
  },
  logout: {},
  accountsContainer: {
    borderTopColor: colors.lightSecondary,
    borderTopWidth: 1,
    paddingTop: 5,
  },
});
