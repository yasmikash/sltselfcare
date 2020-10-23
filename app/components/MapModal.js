import React, { useState } from "react";
import { StyleSheet, View, Modal, Dimensions } from "react-native";

import MapView from "react-native-maps";
import colors from "../config/colors";
import { Button } from "react-native-paper";

const deviceHeight = Dimensions.get("window").height;

export default function MapModal({ modalVisibility, closeHandler }) {
  return (
    <Modal visible={modalVisibility} animationType="slide">
      <View style={styles.container}>
        <MapView
          region={{
            latitude: 7.8731,
            longitude: 80.7718,
            latitudeDelta: 3,
            longitudeDelta: 3,
          }}
          style={{
            width: "100%",
            height: "80%",
            borderBottomWidth: 2,
            borderBottomColor: colors.gradientEndSolid,
            elevation: 10,
          }}
        ></MapView>

        <Button
          onPress={closeHandler}
          icon="map-check"
          mode="outlined"
          color={colors.light}
          labelStyle={{
            fontSize: 16,
            letterSpacing: 0,
          }}
          style={{
            borderColor: colors.gradientEndSolid,
            borderWidth: 1,
            marginTop: 30,
          }}
        >
          Set Location
        </Button>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.gradientStartSolid,
    height: deviceHeight,
  },
});
