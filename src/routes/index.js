import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth";



import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import PerfilRoutes from "./perfil.routes";

function Routes() {
  const { signed,perfil,search } = useContext(AuthContext);
  if (signed == true) {
    if(perfil == false){
    return <AppRoutes />;
    }
    return <PerfilRoutes/>
  }
    return <AuthRoutes/>;
  
}

export default Routes;
