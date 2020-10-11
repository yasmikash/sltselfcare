import React, { useContext } from "react";

import AuthContext from "../context/AuthContext";

import Dashboard from "./Dashboard";
import NoConnectionsScreen from "./NoConnectionsScreen";

export default function HomeScreen(props) {
  const { accounts } = useContext(AuthContext);

  if (accounts.length) {
    return <Dashboard {...props} />;
  }

  return <NoConnectionsScreen {...props} />;
}
