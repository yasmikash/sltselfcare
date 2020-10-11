import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthContext from "../context/AuthContext";
import AppContext from "../context/AppContext";

import routes from "../routes/routes";
import colors from "../config/colors";
import MenuButton from "../components/MenuButton";
import BackButton from "../components/BackButton";
import DottedMenu from "../components/DottedMenu";
import EBillScreen from "../screens/EBillScreen";
import EBillHistoryScreen from "../screens/EBillHistoryScreen";
import EBillConfigScreen from "../screens/EBillConfigScreen";
import PayBillScreen from "../screens/PayBillScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import BillPaymentSuccess from "../screens/BillPaymentSuccess";

const Stack = createStackNavigator();

export default function EBillNavigator({ navigation }) {
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
        name={routes.MY_EBILL}
        component={EBillScreen}
      />
      <Stack.Screen
        options={{
          headerLeft: () => {
            return <BackButton onPress={() => navigation.goBack()} />;
          },
          headerRight: () => {
            return (
              <DottedMenu
                onPress={() => {
                  console.log("dotted menu pressed");
                }}
              />
            );
          },
        }}
        name={routes.EBillHistory}
        component={EBillHistoryScreen}
      />
      <Stack.Screen
        options={{
          headerLeft: () => {
            return <BackButton onPress={() => navigation.goBack()} />;
          },
          headerRight: () => {
            return (
              <DottedMenu
                onPress={() => {
                  console.log("dotted menu pressed");
                }}
              />
            );
          },
        }}
        name={routes.EBillConfig}
        component={EBillConfigScreen}
      />
      <Stack.Screen
        options={{
          headerLeft: () => {
            return <BackButton onPress={() => navigation.goBack()} />;
          },
          headerRight: () => {
            return (
              <DottedMenu
                onPress={() => {
                  console.log("dotted menu pressed");
                }}
              />
            );
          },
        }}
        name={routes.PAY_EBILL}
        component={PayBillScreen}
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
        }}
        name={routes.BILL_PAYMENT_SUCCESS}
        component={BillPaymentSuccess}
      />
    </Stack.Navigator>
  );
}
