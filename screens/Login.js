import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CustomButton } from "../components";
import { images, COLORS, SIZES, FONTS } from "../constants";
const Login = ({ navigation }) => {
  function LoginHeader() {
    return (
      <View style={{ height: SIZES.height > 700 ? "65%" : "60%" }}>
        {/* Login background */}
        <ImageBackground
          source={images.loginBackground}
          style={{ flex: 1, justifyContent: "flex-end" }}
          resizeMode="cover"
        >
          {/* <LinearGradient start={{x:0,y:0}}
        end={{x:0,y:1}}
        color={[
            COLORS.transparent,
            COLORS.black
        ]} 
        // style={{
        //     height:200,
        //     justifyContent:'flex-end',
        //       paddingHorizontal:SIZES.padding
        // }}
        > 
        </LinearGradient> */}

          <Text
            style={{
              width: "80%",
              color: COLORS.white,
              ...FONTS.largeTitle,
              lineHeight: 45,
            }}
          >
            Cooking a Delicious Food Easily
          </Text>
        </ImageBackground>
      </View>
    );
  }

  function LoginDetail() {
    return (
      <View style={{ flex: 1, paddingHorizontal: SIZES.padding }}>
        {/* Description */}
        <Text
          style={{
            marginTop: SIZES.radius,
            width: "70%",
            color: COLORS.gray,
            ...FONTS.body3,
          }}
        >
          Discover more than 2000 food recipes in your hands and cooking it
          easily!
        </Text>

        {/* Button        */}
        <View style={{ flex: 1, justifyContent: "center " }}>
          {/* Login  */}
          <CustomButton
            buttonText="Login"
            buttonContainerStyle={{
                paddingVertical: 18,
                borderRadius:20
            }}
            colors={[COLORS.darkGreen, COLORS.lime]}
            onPress={() => navigation.replace("Home")}
          />
          {/* SignUp  */}
          <CustomButton
            buttonText="Sign Up"
            colors={[]}
            buttonContainerStyle={{marginTop:SIZES.radius,
                paddingVertical: 18,
                borderRadius:20,
                borderColor:COLORS.darkLime,
                borderWidth:1
            }}
            onPress={() => navigation.replace("Home")}
          />
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
    >
      <StatusBar barStyle="light-content" />
      {/* Header Section of the Login  */}
      {LoginHeader()}

      {/* Details Section of the Login */}
      {LoginDetail()}
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
