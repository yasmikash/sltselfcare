import React, { useContext } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";

import AppContext from "../context/AppContext";

import AppText from "./AppText";

export default function PopUpMenu({ items, navigation }) {
  const { popUpMenu, setPopUpMenu } = useContext(AppContext);
  return (
    <View style={styles.container}>
      {items.map((item) => {
        return (
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate(item.route);
              setPopUpMenu(!popUpMenu);
            }}
            key={item.name}
          >
            <View style={styles.item}>
              <AppText size="medium">{item.name}</AppText>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: colors.primary3,
    padding: 10,
    top: 0,
    right: 10,
    elevation: 10,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  item: {
    marginVertical: 10,
  },
});
