import React,{useState,useContext} from 'react';
import { View} from 'react-native';

import {Tittle} from "../Perfil/styles";
import {Container,Label,AreaSubmit,SubmitText,Input} from "../Login/styles";

import {UserManagerContext} from "../../contexts/userManagerInfo/index";

export default function PasswordUpdate() {
  const [newPassword,SetNewPassword] = useState("");
  const [confirmPassword,SetConfirmPassword] = useState("");
  const {updatePassword} = useContext(UserManagerContext);


  async function activeUpdatePassword(){
    if(newPassword!=confirmPassword){
      alert("Verifique se as senhas estão corretas");
    }
     updatePassword(newPassword);
     SetNewPassword("");
     SetConfirmPassword("");
  }

 return (
   <Container>
     <Tittle>
       Atualizar Senha
     </Tittle>
     <Label>
       Senha
     </Label>
     <Input placeholder="Digite sua nova senha" secureTextEntry={true} value={newPassword} onChangeText={(text)=>SetNewPassword(text)}/>
     <Label>
       Senha
     </Label>
     <Input placeholder="Repita sua nova senha aqui" secureTextEntry={true} value={confirmPassword} onChangeText={(text)=>SetConfirmPassword(text)} />
     <View style={{height:60}} ></View>
     <AreaSubmit onPress={()=>activeUpdatePassword()}>
     
     <SubmitText>
       Atualizar Senha
     </SubmitText>
     </AreaSubmit>
     </Container>
  );
}