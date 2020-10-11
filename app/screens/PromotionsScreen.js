import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";

import Card from "../components/Card";
import Promotion from "../components/Promotion";
import colors from "../config/colors";
import Screen from "./Screen";

export default function PromotionsScreen() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [promoImage, setPromoImage] = useState();

  return (
    <Screen style={styles.container}>
      <Promotion
        visibility={modalVisibility}
        image={promoImage}
        closeHandler={() => {
          setModalVisibility(false);
        }}
      />
      <Card style={styles.margin}>
        <Image
          source={require("../../assets/promo_1.jpg")}
          style={styles.promoImage}
        />
        <Button
          onPress={() => {
            setModalVisibility(true);
            setPromoImage(require("../../assets/promo_1.jpg"));
          }}
          icon="arrow-right-bold"
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
          See More Details
        </Button>
      </Card>
      <Card style={styles.margin}>
        <Image
          source={require("../../assets/promo_2.jpg")}
          style={styles.promoImage}
        />
        <Button
          onPress={() => {
            setModalVisibility(true);
            setPromoImage(require("../../assets/promo_2.jpg"));
          }}
          icon="arrow-right-bold"
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
          See More Details
        </Button>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  margin: {
    marginBottom: 20,
  },
  promoImage: {
    width: "100%",
    height: 200,
  },
});
