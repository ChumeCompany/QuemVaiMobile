import React, { useContext, useState, useEffect } from "react";
import { Platform, View,ActivityIndicator} from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-community/async-storage";

import {
  Label,
  AreaLine,
  LineText,
  SubmitText,
  AreaSubmit,
  Input,
  Container,
} from "../Login/styles";
import {
  Tittle,
  Bubble,
  AreaCell,
  Ddd,
  CellNumber,
  ScrollView,
  Avatar,
  BotaoAvatar,
  Blank,
} from "./styles";

import { SignupContext } from "../../contexts/signUp";

export default function Cadastro({ navigation }) {
  const { signUp } = useContext(SignupContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [ddd, setDdd] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

  useEffect(() => {
    (async () => {
      if (Platform.OS == "android") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Desculpa precisamos da permissão para usar a foto");
        }
      } else if (Platform.OS == "ios") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Desculpa precisamos da permissão para usar a foto");
        }
      }
    })();
  }, []);

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
      base64:true
    });
    const image = 'data:image/jpeg;base64,' + result["base64"];
    await AsyncStorage.setItem("@photo",image);
    if (!result.cancelled) {
      photo="";
    }
  }

 async function actionSignup() {
    setLoading(false);
    if (confirmPassword != password) {
      alert("Sua senha está diferente");
    } else if (
      !email ||
      !name ||
      !nickname ||
      !ddd ||
      !cellPhone ||
      !password
    ) {
      alert("Verifique se há campos em branco");
    } else {
      try{
       await signUp(email, name, nickname, ddd, cellPhone, password);
       setLoading(true);
      }
      catch(err){
        alert(err);
      }
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
      <ScrollView>
      <Bubble source={require("../../images/utils/Vector.png")} />
        <Tittle>Cadastre-se</Tittle>
        <Label>Email:</Label>
        <Input
          placeholder="Digite seu email"
          keyboardType="email-address"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Label>Nome:</Label>
        <Input
          placeholder="Digite seu nome"
          autoCorrect={false}
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <Label>Apelido:</Label>

        <Input
          placeholder="Digite seu apelido"
          autoCorrect={false}
          value={nickname}
          onChangeText={(text) => setNickname(text)}
        />

        <Label>Celular:</Label>

        <AreaCell>
          <Ddd
            keyboardType="numeric"
            placeholder="DDD"
            autoCorrect={false}
            value={ddd}
            onChangeText={(text) => setDdd(text)}
          />
          <CellNumber
            keyboardType="numeric"
            placeholder="Digite seu nome"
            autoCorrect={false}
            value={cellPhone}
            onChangeText={(text) => setCellPhone(text)}
          />
        </AreaCell>

        <Label>Adicione uma foto:</Label>

        <BotaoAvatar onPress={() => pickImage()}>
          <Avatar source={require("../../images/utils/avatar.png")} />
        </BotaoAvatar>

        <Label>Senha:</Label>

        <Input
          placeholder="Digite sua senha"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Label>Confirme sua senha:</Label>

        <Input
          placeholder="Digite sua senha"
          autoCorrect={false}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        <AreaSubmit onPress={() => actionSignup()}>
          <SubmitText>Confirmar</SubmitText>
        </AreaSubmit>

        <AreaLine
          onPress={() => {
            navigation.goBack();
          }}
        >
          <LineText>Voltar</LineText>
        </AreaLine>

        <Blank></Blank>
      </ScrollView>
    </Container>
  );
}
