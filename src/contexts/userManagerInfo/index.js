import React, {createContext, useContext, useState } from "react";
import api from "../../services/api";
import { AuthContext } from "../auth";
import {validatePassword} from "../utils/inputValidation";

import AsyncStorage from "@react-native-community/async-storage";

export const UserManagerContext = createContext({});

function UserManagerProvider({children}){
  const { token,setToken } = useContext(AuthContext);
  async function updatePassword(password){
    const result = validatePassword(password);
    if(result == false){
      alert("A senha tem que ter no mínimo 8 caracteres");
    }
    try{
    const response = await api.put("/user/unlockpass/me",{},{headers:{"x-new-password":password,"x-auth-token":token}});
    await AsyncStorage.setItem("@QuemVai",response.data[" New token"]);
    setToken(response.data[" New token"]);
    alert("Senha atualizada com sucesso");
  }
    catch(err){
      alert(err);
    }
  }
  return(
    <UserManagerContext.Provider value={{updatePassword}}>
      {children}
    </UserManagerContext.Provider>
  )
}
export default UserManagerProvider;