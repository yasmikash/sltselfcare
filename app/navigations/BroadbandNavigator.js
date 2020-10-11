import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthContext from "../context/AuthContext";
import AppContext from "../context/AppContext";

import routes from "../routes/routes";
import colors from "../config/colors";
import MenuButton from "../components/MenuButton";
import BackButton from "../components/BackButton";
import DottedMenu from "../components/DottedMenu";
import BroadbandScreen from "../screens/BroadbandScreen";
import DataBalanceScreen from "../screens/DataBalanceScreen";
import DataPurchaseHistoryScren from "../screens/DataPurchaseHistoryScreen";
import DataExtensionsScreen from "../screens/DataExtensionsScreen";
import AddCustomDataScreen from "../screens/AddCustomDataScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import AddDataScreen from "../screens/AddDataScreen";
import DataPaymentSuccess from "../screens/DataPaymentSuccess";

const Stack = createStackNavigator();

export default function BroadbandNavigator({ navigation }) {
  const { user } = useContext(AuthContext);
  const { popUpMenu, setPopUpMenu } = useContext(AppContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.dark,
          elevation: 2,
        },
        headerRightContainerStyle: {
          marginRight: 10,
        },
        headerLeftContainerStyle: {
          marginLeft: 10,
        },
        headerTintColor: colors.light,
        headerLeft: () => {
          return <MenuButton onPress={() => navigation.toggleDrawer()} />;
        },
      }}
    >
      <Stack.Screen
        options={{
          headerLeft: () => {
            return <BackButton onPress={() => navigation.goBack()} />;
          },
          headerRight: () => {
            return (
              <DottedMenu
                onPress={() => {
                  setPopUpMenu(!popUpMenu);
                }}
                active={popUpMenu}
              />
            );
          },
        }}
        name={routes.MY_BROADBAND}
        component={BroadbandScreen}
      />
      <Stack.Screen
        options={{
          headerLeft: () => {
            return <BackButton onPress={() => navigation.goBack()} />;
          },
          headerRight: () => {
            return <DottedMenu />;
          },
        }}
        name={routes.DATA_BALANCE}
        component={DataBalanceScreen}
      />
      <Stack.Screen
        options={{
          headerLeft: () => {
            return <BackButton onPress={() => navigation.goBack()} />;
          },
          headerRight: () => {
            return <DottedMenu />;
          },
        }}
        name={routes.DATA_PURCHASE_HISTORY}
        component={DataPurchaseHistoryScren}
      />
      <Stack.Screen
        options={{
          headerLeft: () => {
            return <BackButton onPress={() => navigation.goBack()} />;
          },
          headerRight: () => {
            return <DottedMenu />;
          },
        }}
        name={routes.DATA_EXTENSIONS}
        component={DataExtensionsScreen}
      />
      <Stack.Screen
        options={{
          headerLeft: () => {
            return <BackButton onPress={() => navigation.goBack()} />;
          },
          headerRight: () => {
            return <DottedMenu />;
          },
        }}
        name={routes.ADD_CUSTOM_DATA}
        component={AddCustomDataScreen}
      />

      <Stack.Screen
        options={{
          headerLeft: () => {
            return <BackButton onPress={() => navigation.goBack()} />;
          },
        }}
        name={routes.PAY_NOW}
        component={CheckoutScreen}
      />

      <Stack.Screen
        options={{
          headerLeft: () => {
            return <BackButton onPress={() => navigation.goBack()} />;
          },
          headerRight: () => {
            return <DottedMenu />;
          },
        }}
        name={routes.ADD_DATA}
        component={AddDataScreen}
      />

      <Stack.Screen
        options={{
          headerLeft: () => {
            return <BackButton onPress={() => navigation.goBack()} />;
          },
          headerRight: () => {
            return <DottedMenu />;
          },
        }}
        name={routes.DATA_PAYMENT_SUCCESS}
        component={DataPaymentSuccess}
      />
    </Stack.Navigator>
  );
}
