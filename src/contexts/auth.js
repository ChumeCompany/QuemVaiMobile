import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";
import inputValidation from "../contexts/utils/inputValidation";
import AsyncStorage from "@react-native-community/async-storage";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [signed, setSigned] = useState(false);
  const [token, setToken] = useState("");
  const [perfil,setPerfil] = useState(false);
  const [search,setSearch] = useState(false);
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    async function loadStorage() {
      const storageToken = await AsyncStorage.getItem("@QuemVai");
      if (storageToken) {
        setSigned(true);
        setToken(storageToken);
      }
    }
    loadStorage();
  }, []);

  async function signOut() {
    try {
      await AsyncStorage.clear();
      setSigned(false);
      setToken("");
      setUserInfo("");
      setPerfil(false);
    } catch (err) {
      alert(err);
    }
  }
  function perfilNavigation(){
    setPerfil(true);
  }
  function searchNavigation(status){
    setSearch(status);
  }

  async function getInfo(token) {
    try {
      const response = await api.get("/user/bring/me", {
        headers: { "x-auth-token": token },
      });
      return response.data;
    } catch (err) {
      return err;
    }
  }
  async function signIn(email, password) {
    const result = inputValidation.validateLogin(email, password);
    if (result) {
      let data = { email: email };
      try {
        const response = await api.post("/login/signin/user", data, {
          headers: { "x-password": password },
        });
        setToken(response.data["User token"]);
        await AsyncStorage.setItem("@QuemVai", token);
        setSigned(true);
      } catch (err) {
        try {
          await AsyncStorage.clear();
        } catch (err) {
          console.log(err);
        }
        setSigned(false);
        setToken("");

        alert("Verifique se o email ou senha estão corretos", "Aviso");
      }
    } else {
      alert("Verifique se os campos abaixo estão preenchido corretamente");
    }
  }

  return (
    <AuthContext.Provider
      value={{ signed, userInfo, token,setToken, signIn, signOut, getInfo,searchNavigation,perfilNavigation,perfil,search }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
