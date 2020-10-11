import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthContext from "../context/AuthContext";
import AppContext from "../context/AppContext";

import routes from "../routes/routes";
import colors from "../config/colors";
import MenuButton from "../components/MenuButton";
import BackButton from "../components/BackButton";
import DottedMenu from "../components/DottedMenu";
import ServicesScreen from "../screens/ServicesScreen";
import ServiceUpgradeScreen from "../screens/ServiceUpgradeScreen";
import ServiceUpgradeSuccess from "../screens/ServiceUpgradeSuccess";
import ServiceRequestScreen from "../screens/ServiceRequestScreen";
import ServiceRequestSuccess from "../screens/ServiceRequestSuccess";

const Stack = createStackNavigator();

export default function ServicesNavigator({ navigation }) {
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
        }}
        name={routes.MY_SERVICES}
        component={ServicesScreen}
      />

      <Stack.Screen
        options={{
          headerLeft: () => {
            return <BackButton onPress={() => navigation.goBack()} />;
          },
        }}
        name={routes.SERVICE_UPGRADE}
        component={ServiceUpgradeScreen}
      />

      <Stack.Screen
        options={{
          headerLeft: false,
        }}
        name={routes.SERVICE_UPGRADE_SUCCESS}
        component={ServiceUpgradeSuccess}
      />

      <Stack.Screen
        options={{
          headerLeft: () => {
            return <BackButton onPress={() => navigation.goBack()} />;
          },
        }}
        name={routes.SERVICE_REQUEST}
        component={ServiceRequestScreen}
      />

      <Stack.Screen
        options={{
          headerLeft: false,
        }}
        name={routes.SERVICE_REQUEST_SUCCESS}
        component={ServiceRequestSuccess}
      />
    </Stack.Navigator>
  );
}
