import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthContext from "../context/AuthContext";
import AppContext from "../context/AppContext";

import routes from "../routes/routes";
import colors from "../config/colors";
import MenuButton from "../components/MenuButton";
import BackButton from "../components/BackButton";
import ComplaintsScreen from "../screens/ComplaintsScreen";

const Stack = createStackNavigator();

export default function PromotionsNavigator({ navigation }) {
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
        name={routes.MY_COMPLAINTS}
        component={ComplaintsScreen}
      />
    </Stack.Navigator>
  );
}
