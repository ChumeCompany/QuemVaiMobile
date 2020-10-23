import React, {createContext, useContext, useState } from "react";
import api from "../../services/api";
import { AuthContext } from "../auth";
import {validatePassword,validateCellphone,validateDDD,validateEmail} from "../utils/inputValidation";

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

  async function alterarDados(name,username,cellphoneNumber,email,DDD,token){
    const dddStatus = validateDDD(DDD);
    const emailStatus = validateEmail(email);
    const cellphoneNumberStatus = validateCellphone(cellphoneNumber);

    if(dddStatus == false || emailStatus == false || cellphoneNumberStatus == false){
      alert("Verifique se os dados foram preenchidos direito");
    }
    let data = {"cellPhoneNumber": cellphoneNumber,"email": email,"user_email_confirm":email,"DDD": DDD,"name": name,"username":username};
    const result = await api.put("/user/update/me",data,{headers:{"x-auth-token":token}});
    alert("Deu certo");
  }

  return(
    <UserManagerContext.Provider value={{updatePassword,alterarDados}}>
      {children}
    </UserManagerContext.Provider>
  )
}
export default UserManagerProvider;