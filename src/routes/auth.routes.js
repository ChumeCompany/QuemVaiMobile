import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Recuperar from "../pages/RecuperarSenha";

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={"Login"}
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={"Cadastro"}
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={"Recuperar"}
        component={Recuperar}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}
