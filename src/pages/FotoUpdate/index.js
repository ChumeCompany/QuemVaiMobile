import React,{useEffect,useState,useContext} from 'react';

import {Tittle} from "../Perfil/styles";
import {Container} from "../Login/styles";
import {Blank} from "../Cadastro/styles";
import { AppLoading } from 'expo';
import {Label,ImageBubble,PickerArea,PickerText,View,ButtonText,Button} from "./styles";
import { Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-community/async-storage";

import { AuthContext } from "../../contexts/auth";

import {UserManagerContext} from "../../contexts/userManagerInfo/index";

export default function fotoUpdate() {
  const [userInfo,setUserInfo] = useState({davi:""});
  const [loading,setLoading] = useState(false);
  const [saving,setSaving] = useState(false);
  const [excluinding,setExcluding] = useState(false);

  const {signOut, getInfo, token} = useContext(AuthContext);
  const {apagarFoto,atualizarFoto} = useContext(UserManagerContext);

  useEffect(()=>{
    async () => {
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
    }
   async function initialize(){
      try{
        const response = await getInfo(token);
        setUserInfo(response);
        setLoading(true);
      }
      catch(err){
        signOut();
        alert(err);
      }
    }
    initialize();
  },[]);

  useEffect(()=>{
    async function initialize(){
      try{
        const response = await getInfo(token);
        setUserInfo(response);
        setLoading(true);
      }
      catch(err){
        signOut();
        alert(err);
      }
    }
    initialize();
  },[saving]);

  useEffect(()=>{
    async function initialize(){
      try{
        const response = await getInfo(token);
        setUserInfo(response);
        setLoading(true);
      }
      catch(err){
        signOut();
        alert(err);
      }
    }
    initialize();
  },[excluinding]);


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


  if(loading == false){
    return (<AppLoading/>);
  }
 return (
   <Container>
     <Tittle>
       Altere sua foto
     </Tittle>
     <Label>
       Sua foto de perfil
     </Label>
     <ImageBubble source={{uri:userInfo["info"]["photos"]}} />
     <PickerArea onPress={()=>pickImage()}>
      <PickerText>
        Escolha uma foto
      </PickerText>
     </PickerArea>
     <View>
     <Button onPress={()=>{atualizarFoto();setSaving(true)}} >
      <ButtonText>Salvar</ButtonText>
    </Button>
    <Blank></Blank>
    <Button onPress={()=>{apagarFoto(); setExcluding(true)}}>
      <ButtonText>Excluir foto</ButtonText>
    </Button>
    </View>
   </Container>
  );
}