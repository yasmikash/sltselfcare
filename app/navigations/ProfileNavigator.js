import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthContext from "../context/AuthContext";

import routes from "../routes/routes";
import MenuButton from "../components/MenuButton";
import colors from "../config/colors";
import ProfileScreen from "../screens/ProfileScreen";
import BackButton from "../components/BackButton";

const Stack = createStackNavigator();

export default function ProfileNavigator({ navigation }) {
  const { user } = useContext(AuthContext);
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
        name={routes.MY_PROFILE}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
}
