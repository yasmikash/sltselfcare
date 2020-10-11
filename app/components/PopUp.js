import React from "react";
import { StyleSheet, View, Modal, Dimensions } from "react-native";
import colors from "../config/colors";

const deviceHeight = Dimensions.get("window").height;

export default function PopUp({ visible, children }) {
  return (
    <>
      {visible && <View style={styles.backdrop}></View>}
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.container}>{children}</View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: colors.primary2,
    alignSelf: "center",
    marginTop: "50%",
    padding: 15,
    shadowRadius: 10.84,
    borderRadius: 5,
  },
  backdrop: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "100%",
    height: deviceHeight,
    zIndex: 1,
  },
});
