import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from "@expo/vector-icons";

const AppTab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

import Home from "../pages/Home";
import Esportes from "../pages/Esportes";
import Eventos from "../pages/Eventos";
import Quadras from "../pages/Quadras";
import Amigos from "../pages/Amigos";

//

import Perfil from "../pages/Perfil";

const icons = {
  Home: {
    name: "ios-home",
  },
  Esportes: {
    name: "ios-baseball",
  },
  Amigos: {
    name: "md-people",
  },
  Eventos: {
    name: "md-calendar",
  },
  Quadras: {
    name: "ios-navigate",
  },
};


function AppRoutes() {
  return (
    <AppTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Ionicons name={name} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#fff",
        },
        activeTintColor: "#F16A49",
        inactiveTintColor: "#A9A9A9",
      }}
    >
      <AppTab.Screen name="Home" component={Home} />
      <AppTab.Screen name="Esportes" component={Esportes} />
      <AppTab.Screen name="Eventos" component={Eventos} />
      <AppTab.Screen name="Quadras" component={Quadras} />
      <AppTab.Screen name="Amigos" component={Amigos} />
    </AppTab.Navigator>
  );
}



export default AppRoutes;
