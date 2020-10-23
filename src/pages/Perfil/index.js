import React,{useState,useContext,useEffect} from "react";
import { ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../../contexts/auth";

import {UserManagerContext} from "../../contexts/userManagerInfo/index";

import { AppLoading } from 'expo';

import {
  Container,
  Label,
  SubmitText,
  AreaSubmit,
  AreaLine,
  LineText,
} from "../Login/styles";
import { AreaCell, Blank } from "../Cadastro/styles";
import { Tittle, Input, Ddd, CellNumber, Icon } from "./styles";

export default function Perfil({navigate}) {
  const [loading,SetLoading]=useState(false);
  const [infoUser,setInfoUser]=useState({davi:1});

  const [editNome,setEditNome] = useState(false);
  const [editApelido,setEditApelido] = useState(false);
  const [editCellphone,setEditCellphone] = useState(false);
  const [editEmail,setEditEmail] = useState(false);

  const [nome,setNome] = useState("");
  const [apelido,setApelido] = useState("");
  const [cellphone,setCellphone] = useState("");
  const [ddd,setDDD] = useState("");
  const [email,setEmail] = useState("");

  const {signOut, getInfo, token} = useContext(AuthContext);
  const {alterarDados} = useContext(UserManagerContext);

 
  useEffect(()=>{
    async function initialize(){
      try{
        const response = await getInfo(token);
        setInfoUser(response);
        SetLoading(true);
      }
      catch(err){
        signOut();
        alert(err);
      }
    }
    initialize();
  },[]);
  
  if(loading == false){
    return (
      <AppLoading/>
    );
  }
  else{
  return (
    <Container>
      <ScrollView>
        <Tittle>Perfil</Tittle>
        <Label>Nome</Label>
        <AreaCell>
          <Input placeholder={"Digite seu nome"} value={infoUser["info"]["name"]} onChangeText={(text)=>setNome(text)}  editable={editNome} />
          <Icon onPress={()=>{editNome ? setEditNome(false):setEditNome(true)}}>
            <MaterialIcons name="edit" size={32} color={"#000"} />
          </Icon>
        </AreaCell>

        <Label>Apelido</Label>

        <AreaCell>
          <Input placeholder={"Digite seu apelido"} value={infoUser["info"]["username"]} onChangeText={(text)=>setApelido(text)}  editable={editApelido} />
          <Icon onPress={()=>{editApelido ? setEditApelido(false):setEditApelido(true)}}>
            <MaterialIcons name="edit" size={32} color={"#000"} />
          </Icon>
        </AreaCell>

        <Label>Email</Label>
        <AreaCell>
          <Input placeholder={"Digite seu email"} value={infoUser["info"]["email"]} onChangeText={(text)=>setEmail(text)}  editable={editEmail} />
          <Icon onPress={()=>{editEmail ? setEditEmail(false):setEditEmail(true)}}>
            <MaterialIcons name="edit" size={32} color={"#000"} />
          </Icon>
        </AreaCell>

        <Label>Celular</Label>
        <AreaCell>
          <Ddd placeholder={"DDD"} editable={editCellphone} onChangeText={(text)=>setDDD(text)}   />
          <CellNumber placeholder={"Celular"} editable={editCellphone} onChangeText={(text)=>setCellphone(text)}   />
          <Icon onPress={()=>{editCellphone ? setEditCellphone(false) : setEditCellphone(true)}}>
            <MaterialIcons name="edit" size={32} color={"#000"} />
          </Icon>
        </AreaCell>

        <Blank></Blank>
        <AreaSubmit >
          <SubmitText onPress={()=>{alterarDados(nome,apelido,cellphone,email,ddd,token);navigate.navigation("Perfil")}} >Editar dados</SubmitText>
        </AreaSubmit>
        <AreaLine>
          <LineText>Deletar Conta</LineText>
        </AreaLine>
        <Blank></Blank>
      </ScrollView>
    </Container>
  );
  }
}
