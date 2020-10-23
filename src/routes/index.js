import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth";

import AuthRoutes from "./auth.routes";
//import AppRoutes from "./app.routes";
import PerfilRoutes from "./perfil.routes";

function Routes() {
  const { signed } = useContext(AuthContext);
  if (signed == true) {
    return <AppRoutes />;
  }
  return <PerfilRoutes/>;
}

export default Routes;
