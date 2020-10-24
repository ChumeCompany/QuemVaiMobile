import React,{useEffect,useState,useContext} from 'react';

import {Tittle} from "../Perfil/styles";
import {Container} from "../Login/styles";
import {Blank} from "../Cadastro/styles";
import { AppLoading } from 'expo';
import {Label,ImageBubble,PickerArea,PickerText,View,ButtonText,Button} from "./styles";

import { AuthContext } from "../../contexts/auth";

import {UserManagerContext} from "../../contexts/userManagerInfo/index";

export default function fotoUpdate() {
  const [userInfo,setUserInfo] = useState({davi:""});
  const [loading,setLoading] = useState(false);

  const {signOut, getInfo, token} = useContext(AuthContext);
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
  },[]);

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
     <PickerArea>
      <PickerText>
        Escolha uma foto
      </PickerText>
     </PickerArea>
     <View>
     <Button>
      <ButtonText>Salvar</ButtonText>
    </Button>
    <Blank></Blank>
    <Button>
      <ButtonText>Excluir foto</ButtonText>
    </Button>
    </View>
   </Container>
  );
}