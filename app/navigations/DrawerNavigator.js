import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import HomeNavigator from "./HomeNavigator";
import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../routes/routes";
import AppDrawer from "../components/AppDrawer";
import ProfileNavigator from "./ProfileNavigator";
import EBillNavigator from "./EBillNavigator";
import ServicesNavigator from "./ServicesNavigator";
import BroadbandNavigator from "./BroadbandNavigator";
import ConnectionsNavigator from "./ConnectionsNavigator";
import PromotionsNavigator from "./PromotionsNavigator";
import ContactNavigator from "./ContactNavigator";
import ComplaintsNavigator from "./ComplaintsNavigator";

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => {
          return <AppDrawer {...props} />;
        }}
        drawerStyle={{
          backgroundColor: colors.dark,
        }}
        drawerContentOptions={{
          activeTintColor: colors.light,
          inactiveTintColor: colors.inactive,
        }}
      >
        <Drawer.Screen
          options={{
            drawerIcon: ({ color }) => {
              return <Icon name="home" color={color} />;
            },
          }}
          name={routes.HOME}
          component={HomeNavigator}
        />

        <Drawer.Screen
          options={{
            drawerIcon: ({ color }) => {
              return <Icon name="vector-square" color={color} />;
            },
          }}
          name={routes.CONNECTIONS_HOME}
          component={ConnectionsNavigator}
        />

        <Drawer.Screen
          options={{
            drawerIcon: ({ color }) => {
              return <Icon name="account" color={color} />;
            },
          }}
          name={routes.PROFILE}
          component={ProfileNavigator}
        />

        <Drawer.Screen
          options={{
            drawerIcon: ({ color }) => {
              return <Icon name="email-newsletter" color={color} />;
            },
          }}
          name={routes.EBill}
          component={EBillNavigator}
        />
        <Drawer.Screen
          options={{
            drawerIcon: ({ color }) => {
              return <Icon name="power-plug" color={color} />;
            },
          }}
          name={routes.SERVICES}
          component={ServicesNavigator}
        />
        <Drawer.Screen
          options={{
            drawerIcon: ({ color }) => {
              return <Icon name="access-point-network" color={color} />;
            },
          }}
          name={routes.BROADBAND}
          component={BroadbandNavigator}
        />
        <Drawer.Screen
          options={{
            drawerIcon: ({ color }) => {
              return <Icon name="decagram" color={color} />;
            },
          }}
          name={routes.PROMOTIONS}
          component={PromotionsNavigator}
        />
        <Drawer.Screen
          options={{
            drawerIcon: ({ color }) => {
              return <Icon name="alert-octagon" color={color} />;
            },
          }}
          name={routes.COMPLAINTS}
          component={ComplaintsNavigator}
        />
        <Drawer.Screen
          options={{
            drawerIcon: ({ color }) => {
              return <Icon name="email-edit" color={color} />;
            },
          }}
          name={routes.CONTACT}
          component={ContactNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
