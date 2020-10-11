import React, { useContext, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import AppButton from "../components/AppButton";
import { Checkbox } from "react-native-paper";
import { Formik } from "formik";


import AuthContext from "../context/AuthContext";
import AppText from "../components/AppText";
import Card from "../components/Card";
import AppField from "../components/form/AppField";
import Separator from "../components/Separator";
import SocialIcons from "../components/SocialIcons";

import Screen from "../screens/Screen";
import { ScrollView } from "react-native-gesture-handler";
import TextButton from "../components/TextButton";
import routes from "../routes/routes";
import colors from "../config/colors";

export default function SignInScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);
  const [agreeTos, setAgreeTos] = useState(true);

  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Card style={styles.cardStyle}>
          <View style={styles.inputContainer}>
            <Formik
              initialValues={{
                username: "",
                password: "",
                email: "",
                connectionNumber: "",
              }}
              validate={(values) => {
                const errors = {};
                if (values.username.trim().length < 4) {
                  errors.username = "Invalid Username provided";
                }

                if (values.password.trim().length < 6) {
                  errors.password = "Invalid Password provided";
                }

                return errors;
              }}
              onSubmit={(values) => {
                const user = {};
                user.username = values.username;
                user.password = values.password;
                setUser(user);
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
                      placeholder="Username"
                      autoCapitalize="none"
                      autoCompleteType="username"
                      autoCorrect={false}
                      value={values.username}
                      onChangeText={handleChange("username")}
                      error={errors.username}
                      onBlur={() => setFieldTouched("username")}
                      errorVisibility={touched.username}
                    />
                    <AppField
                      placeholder="Connection Number"
                      autoCapitalize="none"
                      autoCompleteType="username"
                      autoCorrect={false}
                      value={values.username}
                      onChangeText={handleChange("username")}
                      error={errors.username}
                      onBlur={() => setFieldTouched("username")}
                      errorVisibility={touched.username}
                      style={{
                        marginTop: 10,
                      }}
                    />
                    <AppField
                      placeholder="Email"
                      autoCapitalize="none"
                      autoCompleteType="username"
                      autoCorrect={false}
                      value={values.username}
                      onChangeText={handleChange("username")}
                      error={errors.username}
                      onBlur={() => setFieldTouched("username")}
                      errorVisibility={touched.username}
                      style={{
                        marginTop: 10,
                      }}
                    />
                    <AppField
                      placeholder="Password"
                      autoCapitalize="none"
                      autoCompleteType="password"
                      autoCorrect={false}
                      secureTextEntry
                      value={values.password}
                      onChangeText={handleChange("password")}
                      error={errors.password}
                      onBlur={() => setFieldTouched("password")}
                      errorVisibility={touched.password}
                      style={{ 
                        marginTop: 10,
                      }}
                    />
                    <View style={styles.boxContainer}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <Checkbox.Android
                        status={agreeTos ? "checked" : "unchecked"}
                        onPress={() => {
                          setAgreeTos(!agreeTos);
                        }}
                        color={colors.light}
                        uncheckedColor={colors.gradientEndSolid}
                      />
                      <AppText>I agree to Terms of Service</AppText>
                    </View>

                    </View>
                    <AppButton
                      onPress={handleSubmit}
                      style={{
                        marginTop: 15,
                      }}
                      text="Sign Up"
                    />
                  </>
                );
              }}
            </Formik>
          </View>

          <Separator />
          <SocialIcons />
        </Card>
      </ScrollView>

      <View style={styles.footerContainer}>
        <TextButton
          onPress={() => navigation.navigate(routes.SIGN_IN)}
          text="Have an account? Sign In"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 10,
  },
  container: {
    alignItems: "center",
  },
  logoContainer: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  cardStyle: {
    width: "100%",
  },
  inputContainer: {
    alignItems: "center",
  },
  boxContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  footerContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "8%",
  },
});
