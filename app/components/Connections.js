import React, { useContext } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AuthContext from "../context/AuthContext";

import AppText from "./AppText";
import Card from "./Card";
import Row from "./Row";
import colors from "../config/colors";

export default function Connections() {
  const { accounts, setAccounts } = useContext(AuthContext);

  const deleteAccountHadler = (accountNo) => {
    const newAccounts = accounts.filter((account) => {
      return accountNo != account.accountNo;
    });
    setAccounts(newAccounts);
  };
  return (
    <Card
      style={{
        paddingHorizontal: 0,
        marginBottom: 20,
      }}
    >
      <View
        style={{
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <AppText size="large">My Connections</AppText>
      </View>

      {accounts.map((account) => (
        <Row
          key={account.accountNo + account.nicNo}
          style={{
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 1,
              }}
            >
              <AppText size="medium">Voice + Broadband</AppText>
              <AppText size="medium">{account.telephoneNo}</AppText>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                onPress={() =>
                  Alert.alert(
                    "Delete Account",
                    "Are you sure you want to delete this account?",
                    [
                      {
                        text: "Delete",
                        onPress: () => {
                          deleteAccountHadler(account.accountNo);
                        },
                      },
                    ],
                    { cancelable: true }
                  )
                }
                name="delete"
                size={25}
                color={colors.light}
                style={{
                  marginRight: 10,
                }}
              />
            </View>
            <MaterialCommunityIcons
              name="settings"
              size={25}
              color={colors.light}
            />
          </View>
        </Row>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({});
