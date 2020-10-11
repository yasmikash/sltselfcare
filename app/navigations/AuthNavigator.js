import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "../routes/routes";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={routes.SIGN_IN} component={SignInScreen} />
        <Stack.Screen name={routes.SIGN_UP} component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
