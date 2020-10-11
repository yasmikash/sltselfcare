import React from "react";
import { StyleSheet, View } from "react-native";

import Card from "../components/Card";
import AppText from "../components/AppText";
import Screen from "./Screen";
import AppField from "../components/form/AppField";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";

export default function CheckoutScreen({ navigation, route }) {
  return (
    <Screen style={styles.container}>
      <AppText size="large">Card Information</AppText>

      <Formik
        validationSchema={Yup.object().shape({
          name: Yup.string().required().label("Full name"),
          cardNumber: Yup.string().required().min(16).label("Card number"),
          cvv: Yup.string().required().min(3).label("CVV"),
          expiryDate: Yup.string().required().min(7).label("Expiry date"),
        })}
        initialValues={{
          name: "",
          cardNumber: "",
          cvv: "",
          expiryDate: "",
        }}
        onSubmit={(values) => {
          navigation.navigate(route.params.routeName);
        }}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          setFieldTouched,
          touched,
        }) => {
          return (
            <>
              <Card
                style={{
                  marginVertical: 10,
                }}
              >
                <AppText style={styles.labelSpacing}>
                  Full name of the Card Holder
                </AppText>

                <AppField
                  placeholder="Enter Full Name"
                  value={values.name}
                  onChangeText={handleChange("name")}
                  error={errors.name}
                  onBlur={() => setFieldTouched("name")}
                  errorVisibility={touched.name}
                />

                <AppText
                  style={[
                    styles.labelSpacing,
                    {
                      marginTop: 10,
                    },
                  ]}
                >
                  Card number
                </AppText>
                <AppField
                  placeholder="4111 1111 1111 1111"
                  value={values.cardNumber}
                  onChangeText={handleChange("cardNumber")}
                  error={errors.cardNumber}
                  onBlur={() => setFieldTouched("cardNumber")}
                  errorVisibility={touched.cardNumber}
                  maxLength={16}
                  keyboardType="number-pad"
                />

                <View>
                  <AppText
                    style={[
                      styles.labelSpacing,
                      {
                        marginTop: 10,
                      },
                    ]}
                  >
                    CVV
                  </AppText>
                  <AppField
                    placeholder="123"
                    value={values.cvv}
                    onChangeText={handleChange("cvv")}
                    error={errors.cvv}
                    onBlur={() => setFieldTouched("cvv")}
                    errorVisibility={touched.cvv}
                    maxLength={3}
                    keyboardType="number-pad"
                    style={{
                      width: "40%",
                    }}
                  />
                </View>

                <AppText
                  style={[
                    styles.labelSpacing,
                    {
                      marginTop: 10,
                    },
                  ]}
                >
                  Expiry date
                </AppText>

                <AppField
                  placeholder="MM/YYYY"
                  value={values.expiryDate}
                  onChangeText={handleChange("expiryDate")}
                  error={errors.expiryDate}
                  onBlur={() => setFieldTouched("expiryDate")}
                  errorVisibility={touched.expiryDate}
                  maxLength={7}
                  style={{
                    width: "40%",
                  }}
                />
              </Card>

              <AppButton
                onPress={handleSubmit}
                text="Proceed To Pay"
                style={{
                  marginVertical: 20,
                  width: "70%",
                }}
              />
            </>
          );
        }}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  labelSpacing: {
    marginBottom: 5,
  },
});
