import React, { createContext, useContext, useState } from "react";
import api from "../../services/api";

import { AuthContext } from "../auth";
export const InfosContext = createContext({});

function InfoContextProvider({ children }) {
  const { token } = useContext(AuthContext);

  async function removeFavorites(id){
    try{
      const response = await api.delete(`/favorites/remove/place/${id}`,{headers:{"x-auth-token":token}});
    }
    catch(err){
      alert(err);
    }
  }
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
  async function getHistoric(){
    try{
      const response = await api.get("/historic/get/all",{headers:{"x-auth-token":token}});
      return response.data;
    }
    catch(err){
      alert(err);
    }
  }
  return (
    <InfosContext.Provider value={{ getFavorites,removeFavorites,getHistoric }}>
      {children}
    </InfosContext.Provider>
  );
}

export default InfoContextProvider;
