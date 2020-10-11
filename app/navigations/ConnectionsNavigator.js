import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthContext from "../context/AuthContext";
import AppContext from "../context/AppContext";

import routes from "../routes/routes";
import colors from "../config/colors";
import MenuButton from "../components/MenuButton";
import BackButton from "../components/BackButton";
import NoRegisteredConnectionsScreen from "../screens/NoRegisteredConnectionsScreen";
import AddConnectionScreen from "../screens/AddConnectionScreen";
import ServiceRequestScreen from "../screens/ServiceRequestScreen";
import ServiceRequestSuccess from "../screens/ServiceRequestSuccess";
import ConnectionsHomeScreen from "../screens/ConnectionsHomeScreen";
import ServicesNavigator from "./ServicesNavigator";

const Stack = createStackNavigator();

export default function ConnectionsNavigator({ navigation }) {
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
        name={routes.MY_CONNECTIONS}
        component={ConnectionsHomeScreen}
      />

      <Stack.Screen
        options={{
          headerLeft: false,
        }}
        name={routes.MY_CONNECTIONS_HOME}
        component={ConnectionsHomeScreen}
      />

      <Stack.Screen
        options={{
          headerLeft: false,
        }}
        name={routes.NO_REGISTERED_CONNECTIONS}
        component={NoRegisteredConnectionsScreen}
      />
      <Stack.Screen
        options={{
          headerLeft: () => {
            return <BackButton onPress={() => navigation.goBack()} />;
          },
        }}
        name={routes.ADD_CONNECTION}
        component={AddConnectionScreen}
      />

      <Stack.Screen
        options={{
          headerLeft: () => {
            return <BackButton onPress={() => navigation.goBack()} />;
          },
        }}
        name={routes.CONNECTIONS}
        component={ServicesNavigator}
      />
    </Stack.Navigator>
  );
}
