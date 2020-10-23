import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopTab = createMaterialTopTabNavigator();

import Perfil from "../pages/Perfil";
import UpdatePassword from "../pages/PasswordUpdate";
import UpdateFoto from "../pages/FotoUpdate";
import Historico from "../pages/Historico";
import Favorites from "../pages/Favorites";

export default function PerfilTab() {
  return (
    <TopTab.Navigator
      swipeEnabled={true}
      swipeVelocityImpact={0.2}
      tabBarOptions={{
        style: {
          backgroundColor: "#33D7A3",
          height: "11%",
        },
        activeTintColor: "#F16A49",
        inactiveTintColor: "#fff",
        scrollEnabled: true,
        labelStyle: {
          marginTop: 50,
          marginLeft: -65,
          fontFamily: "Poppins_500Medium",
          fontSize:16,
          textTransform:"capitalize"
        },
        indicatorStyle: {
          width: 55,
          marginLeft: 34,
          borderWidth: 2,
          borderColor: "#F16A49",
          borderRadius: 1,
        },
      }}
    >
      <TopTab.Screen name="Perfil" component={Perfil} />
      <TopTab.Screen name="Atualizar Senha" component={UpdatePassword} />
      <TopTab.Screen name="Atualizar Foto" component={UpdateFoto} />
      <TopTab.Screen name="Meu Histórico" component={Historico} />
      <TopTab.Screen name="Favoritos" component={Favorites} />
    </TopTab.Navigator>
  );
}
