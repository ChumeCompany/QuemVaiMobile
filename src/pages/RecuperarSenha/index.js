import React, { useContext, useState } from "react";
import { View,ActivityIndicator } from 'react-native';

import {
  Label,
  AreaLine,
  LineText,
  SubmitText,
  AreaSubmit,
  Input,
  Container,
} from "../Login/styles";
import { Tittle, Bubble, Blank } from "../Cadastro/styles";

import { SignupContext } from "../../contexts/signUp/index";

export default function RecuperarSenha({ navigation }) {
  const { recoveryPassword } = useContext(SignupContext);
  const [loading,setLoading] = useState(true); 
  const [email, setEmail] = useState("");

  async function activeRecovery() {
    if (!email) {
      alert("Verifique se há campos em branco");
    } else {
      setLoading(false);
      await recoveryPassword(email);
      setEmail("");
      setLoading(true);
      
    }
  }
  if(loading == false){
    return(
      <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
        <ActivityIndicator color="#f16b4a" size={40} />
      </View>
    );
  }
  return (
    <Container>
      <Bubble source={require("../../images/utils/Vector.png")} />
      <Tittle>Recupere sua senha</Tittle>
      <Label>Email:</Label>
      <Input
        placeholder="Digite seu email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Blank></Blank>

      <AreaSubmit onPress={() => activeRecovery()}>
        <SubmitText>Enviar</SubmitText>
      </AreaSubmit>
      <AreaLine
        onPress={() => {
          navigation.goBack();
        }}
      >
        <LineText>Voltar</LineText>
      </AreaLine>
    </Container>
  );
}
