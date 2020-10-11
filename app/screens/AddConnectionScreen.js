import React, { useContext, useState } from "react";
import { StyleSheet, ToastAndroid } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AuthContext from "../context/AuthContext";

import Screen from "./Screen";
import AppText from "../components/AppText";
import Card from "../components/Card";
import AppField from "../components/form/AppField";
import AppButton from "../components/AppButton";
import PopUp from "../components/PopUp";

export default function AddConnectionScreen() {
  const { accounts, setAccounts } = useContext(AuthContext);

  const [popUp, setPopUp] = useState(false);
  const [account, setAccount] = useState();

  return (
    <Screen style={styles.container}>
      <PopUp visible={popUp}>
        <AppText size="medium">
          Please enter the OTP number received to your mobile number to verify
          the connection.
        </AppText>
        <Formik
          validationSchema={Yup.object().shape({
            otpNumber: Yup.string().required().label("OTP number"),
          })}
          initialValues={{
            otpNumber: "",
          }}
          onSubmit={(values) => {
            if (values) {
              setPopUp(false);
              ToastAndroid.showWithGravityAndOffset(
                "Broadband Account Added",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                20,
                100
              );
              setAccounts([...accounts, account]);
            }
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
                <AppField
                  placeholder="OTP Number"
                  keyboardType="number-pad"
                  value={values.otpNumber}
                  onChangeText={handleChange("otpNumber")}
                  error={errors.otpNumber}
                  onBlur={() => setFieldTouched("otpNumber")}
                  errorVisibility={touched.otpNumber}
                  style={{
                    marginTop: 10,
                  }}
                />

                <AppButton
                  white
                  text="VERIFY"
                  onPress={handleSubmit}
                  style={{
                    marginTop: 10,
                  }}
                />
              </>
            );
          }}
        </Formik>
      </PopUp>
      <Card>
        <Formik
          validationSchema={Yup.object().shape({
            accountNo: Yup.string().required().label("Account number"),
            telephoneNo: Yup.string().required().label("Telephone number"),
            nicNo: Yup.string().required().label("NIC number"),
          })}
          initialValues={{
            accountNo: "",
            telephoneNo: "",
            nicNo: "",
          }}
          onSubmit={(values) => {
            if (values) {
              setAccount(values);
              setPopUp(true);
            }
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
                <AppField
                  placeholder="SLT Account Number"
                  keyboardType="number-pad"
                  value={values.accountNo}
                  onChangeText={handleChange("accountNo")}
                  error={errors.accountNo}
                  onBlur={() => setFieldTouched("accountNo")}
                  errorVisibility={touched.accountNo}
                />

                <AppField
                  placeholder="Telephone Number"
                  keyboardType="phone-pad"
                  onChangeText={handleChange("telephoneNo")}
                  error={errors.telephoneNo}
                  onBlur={() => setFieldTouched("telephoneNo")}
                  errorVisibility={touched.telephoneNo}
                  style={{
                    marginTop: 10,
                  }}
                />

                <AppField
                  placeholder="NIC Number"
                  keyboardType="number-pad"
                  onChangeText={handleChange("nicNo")}
                  error={errors.nicNo}
                  onBlur={() => setFieldTouched("nicNo")}
                  errorVisibility={touched.nicNo}
                  style={{
                    marginTop: 10,
                  }}
                />

                <AppButton
                  onPress={handleSubmit}
                  style={{
                    marginTop: 20,
                  }}
                  text="Add Account"
                />
              </>
            );
          }}
        </Formik>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
