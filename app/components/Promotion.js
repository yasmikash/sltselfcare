import React from "react";
import {
  StyleSheet,
  Modal,
  View,
  Image,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";

import colors from "../config/colors";
import AppText from "./AppText";

export default function Promotion({ visibility, image, closeHandler }) {
  return (
    <Modal visible={visibility} animationType="slide">
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={closeHandler}>
          <MaterialCommunityIcons
            name="close"
            size={35}
            color={colors.light}
            style={styles.closeIcon}
          />
        </TouchableNativeFeedback>
        <AppText
          size="xlarge"
          style={{
            marginBottom: 20,
          }}
        >
          Promotion
        </AppText>

        <ScrollView>
          <Image source={image} style={styles.image} />
          <AppText
            style={{
              marginTop: 10,
              textAlign: "justify",
              paddingHorizontal: 10,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ut consectetur felis. Ut interdum ante vitae turpis porta
            sollicitudin. Suspendisse nec mauris vitae felis iaculis tincidunt
            non non felis. Aenean auctor ac purus vel mattis. Proin eleifend
            viverra ullamcorper. Sed fringilla condimentum urna, in iaculis
            libero auctor at. Integer tincidunt eros lectus, ac sodales erat
            tristique feugiat. Nulla bibendum lacus a tellus semper dapibus.
            Integer blandit nisi at felis mattis, vel dapibus dolor placerat.
            Mauris mollis finibus viverra. Aenean nec magna magna. Vivamus nec
            scelerisque sapien, nec pretium mauris. Pellentesque elementum erat
            consequat, tincidunt ex sit amet, iaculis turpis. Donec imperdiet
            sodales nunc id sagittis. Integer et erat nec neque blandit
            condimentum eget ut sapien. Nam diam massa, feugiat id augue sit
            amet, varius commodo turpis. Quisque a eleifend justo. Morbi pretium
            magna vel risus porta commodo. Maecenas cursus magna eget maximus
            pellentesque. Duis vel placerat arcu. Donec at nulla a est
            condimentum congue. Vivamus purus enim, porttitor non velit a,
            consectetur placerat mauris. Vivamus nec scelerisque sapien, nec
            pretium mauris. Pellentesque elementum erat consequat, tincidunt ex
            sit amet, iaculis turpis. Donec imperdiet sodales nunc id sagittis.
            Integer et erat nec neque blandit condimentum eget ut sapien. Nam
            diam massa, feugiat id augue sit amet, varius commodo turpis.
            Quisque a eleifend justo. Morbi pretium magna vel risus porta
            commodo. Maecenas cursus magna eget maximus pellentesque. Duis vel
            placerat arcu. Donec at nulla a est condimentum congue. Vivamus
            purus enim, porttitor non velit a, consectetur placerat mauris.
          </AppText>
          <Button
            onPress={() => {}}
            uppercase={false}
            icon="phone"
            mode="outlined"
            color={colors.light}
            labelStyle={{
              fontSize: 15,
              letterSpacing: 0,
            }}
            style={{
              borderColor: colors.gradientEndSolid,
              backgroundColor: colors.gradientEnd,
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            Contact For More Details
          </Button>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gradientStartSolid,
    position: "relative",
    padding: 10,
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  image: {
    width: "100%",
    height: 300,
  },
});
