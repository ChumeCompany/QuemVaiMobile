import React, { useEffect, createContext, useContext, useState } from "react";
import api from "../../services/api";
import inputValidate from "../utils/inputValidation";

import { AuthContext } from "../auth";

export const SignupContext = createContext({});

function SignupProvider({ children }) {
  const { signIn } = useContext(AuthContext);
  async function signUp(
    email,
    name,
    nickname,
    ddd,
    cellphone,
    photo,
    password
  ) {
    const emailValidate = inputValidate.validateEmail(email);
    const dddValidate = inputValidate.validateDDD(ddd);
    const cellphoneValidate = inputValidate.validateCellphone(cellphone);
    
    if (
      emailValidate == false ||
      dddValidate == false ||
      cellphoneValidate == false
    ) {
      alert(
        `Atenção verifique se esses campos atende o que ele pede'\n'Email: tem que ser um email'\n'DDD tem que ser um valor com dois números'\n'O celular tem que ser o numero do seu celular com nove dígitos`
      );
    } else {
      if (typeof photo != "string") {
        let data = {
          cellPhoneNumber: parseInt(cellphone),
          email: email,
          DDD: parseInt(ddd),
          name: name,
          username: nickname,
        };
        try {
          
          const response = await api.post("/login/signup/user", data, {
            headers: { "x-password": password },
          });
          signIn(email, password);
          alert("Deu certo");
        } catch (err) {
          alert(err);
        }
      } else {
        let data = {
          cellPhoneNumber: parseInt(cellphone),
          email: email,
          DDD: parseInt(ddd),
          name: name,
          username: nickname,
          photos: photo,
        };
        try {
          
          const response = await api.post("/login/signup/user", data, {
            headers: { "x-password": password },
          });
          
          signIn(email, password);
          alert("Deu certo");
        } catch (err) {
          alert(err);
        }
      }
    }
  }
  async function recoveryPassword(email) {
    const emailValidate = inputValidate.validateEmail(email);
    if (emailValidate == false) {
      alert("Verifique se esse email é válido");
    } else {
      let data = { email: email };

      try {
       const response =  await api.post("/login/unlockpass", data);
        alert("Um email com sua nova senha foi enviada ao seu email");
      } catch (err) {
        alert(err);
      }
    }
  }
  return (
    <SignupContext.Provider value={{ signUp, recoveryPassword }}>
      {children}
    </SignupContext.Provider>
  );
}

export default SignupProvider;
