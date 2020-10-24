import React, { useState, useEffect } from "react";
import { StyleSheet, View, Modal, Dimensions, Alert } from "react-native";
import * as Location from "expo-location";

import MapView, { Marker } from "react-native-maps";
import colors from "../config/colors";
import { Button } from "react-native-paper";

const deviceHeight = Dimensions.get("window").height;

export default function MapModal({ modalVisibility, closeHandler }) {
  useEffect(() => {
    getLocationPermission();
    console.log("ss");
  }, []);

  const getLocationPermission = async () => {
    const { granted } = await Location.requestPermissionsAsync();
    if (!granted) {
      Alert.alert(
        "Allow Location Permission",
        "Please allow location permission get your current location.",
        [
          {
            text: "Allow",
            onPress: () => {
              getLocationPermission();
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      const location = await Location.getCurrentPositionAsync();
      setCoordinate(location.coords);
    }
  };

  const [coordinate, setCoordinate] = useState(false);

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
        >
          {coordinate ? <Marker coordinate={coordinate} /> : null}
        </MapView>

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
