import React, { useContext, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Checkbox } from "react-native-paper";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";

import AuthContext from "../context/AuthContext";

import routes from "../routes/routes";
import AppText from "../components/AppText";
import Card from "../components/Card";
import AppField from "../components/form/AppField";
import Separator from "../components/Separator";
import SocialIcons from "../components/SocialIcons";
import TextButton from "../components/TextButton";

import Screen from "../screens/Screen";
import colors from "../config/colors";

export default function SignInScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);

  const [remeber, setRemember] = useState(true);

  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </View>
      <Card>
        <View style={styles.inputContainer}>
          <Formik
            validationSchema={Yup.object().shape({
              username: Yup.string().required().label("Username"),
              password: Yup.string().required().label("Password"),
            })}
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={(values) => {
              const user = {};
              user.username = values.username;
              user.password = values.password;
              user.name = "Yasmika Saubhagya";
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
                        status={remeber ? "checked" : "unchecked"}
                        onPress={() => {
                          setRemember(!remeber);
                        }}
                        color={colors.light}
                        uncheckedColor={colors.gradientEndSolid}
                      />
                      <AppText>Remember Me</AppText>
                    </View>

                    <AppText>Forgot Password?</AppText>
                  </View>
                  <AppButton
                    onPress={handleSubmit}
                    style={{
                      marginTop: 15,
                    }}
                    text="Sign In"
                  />
                </>
              );
            }}
          </Formik>
        </View>

        <Separator />
        <SocialIcons />
      </Card>
      <View style={styles.footerContainer}>
        <TextButton
          onPress={() => navigation.navigate(routes.SIGN_UP)}
          text="Haven't got an account? Sign Up"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logoContainer: {
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  cardStyle: {
    alignItems: "center",
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
    flex: 1,
  },
});
