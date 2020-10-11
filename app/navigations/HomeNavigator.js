import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "../routes/routes";
import HomeScreen from "../screens/HomeScreen";
import AuthContext from "../context/AuthContext";
import colors from "../config/colors";
import MenuButton from "../components/MenuButton";
import AddConnectionScreen from "../screens/AddConnectionScreen";
import BackButton from "../components/BackButton";
import ServicesNavigator from "./ServicesNavigator";

const Stack = createStackNavigator();

export default function HomeNavigator({ navigation }) {
  const { user } = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.dark,
          elevation: 2,
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
          title: user.username,
        }}
        name={routes.HOME}
        component={HomeScreen}
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
