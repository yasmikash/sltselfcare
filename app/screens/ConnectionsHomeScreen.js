import React, { useContext } from "react";

import AuthContext from "../context/AuthContext";

import ConnectionsScreen from "./ConnectionsScreen";
import NoRegisteredConnectionsScreen from "./NoRegisteredConnectionsScreen";

export default function ConnectionsHomeScreen({ navigation }) {
  const { accounts } = useContext(AuthContext);

  if (accounts.length) {
    return <ConnectionsScreen navigation={navigation} />;
  } else {
    return <NoRegisteredConnectionsScreen navigation={navigation} />;
  }
}
