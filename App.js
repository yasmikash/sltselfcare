import React, { useState } from "react";

import AuthContext from "./app/context/AuthContext";
import AppContext from "./app/context/AppContext";

import AuthNavigator from "./app/navigations/AuthNavigator";
import DrawerNavigator from "./app/navigations/DrawerNavigator";

export default function App() {
  const [user, setUser] = useState();
  const [accounts, setAccounts] = useState([]);
  const [popUpMenu, setPopUpMenu] = useState(false);

  return (
    <AuthContext.Provider value={{ user, accounts, setUser, setAccounts }}>
      <AppContext.Provider value={{ popUpMenu, setPopUpMenu }}>
        {!user ? <AuthNavigator /> : <DrawerNavigator />}
      </AppContext.Provider>
    </AuthContext.Provider>
  );
}
