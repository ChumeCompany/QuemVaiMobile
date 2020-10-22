import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";

import Routes from "./src/routes/index";
import AuthProvider from "./src/contexts/auth";
import SignUpProvider from "./src/contexts/signUp";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <AuthProvider>
        <SignUpProvider>
          <Routes />
        </SignUpProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
