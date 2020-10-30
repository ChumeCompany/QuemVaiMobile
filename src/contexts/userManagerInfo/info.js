import React, { createContext, useContext, useState } from "react";
import api from "../../services/api";

import { AuthContext } from "../auth";
export const InfosContext = createContext({});

function InfoContextProvider({ children }) {
  const { token } = useContext(AuthContext);

  async function getFavorites() {
    try {
      const response = await api.get("/favorites/get/place", {
        headers: { "x-auth-token": token },
      });
      return response.data;
    } catch (err) {
      alert(err);
    }
  }
  return (
    <InfosContext.Provider value={{ getFavorites }}>
      {children}
    </InfosContext.Provider>
  );
}

export default InfoContextProvider;
