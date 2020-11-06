import React,{useState,useContext,useEffect} from 'react';
import { View,FlatList,ActivityIndicator } from 'react-native';

import {Tittle} from "../Perfil/styles";
import { Container } from "../Login/styles";
import {InfosContext} from "../../contexts/userManagerInfo/info";
import ItemCard from "./components/ItemCard";

export default function Historico() {
  const [loading,setLoading] = useState(false);
  const [list,setList] = useState({"true":true});
  const {getHistoric} = useContext(InfosContext);
  
  useEffect(()=>{
    async function initialize(){
      try{
        const list = await getHistoric();
        setList(list);
        setLoading(true);
      }
      catch(err){
        alert(err);
      }
    }
    initialize();
  },[]);

  if(loading == false){
    return (
      <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
        <ActivityIndicator color="#f16b4a" size={40} />
      </View>
    );
  }
 return (
   <Container>
     <Tittle>Seu Histórico</Tittle>
      
      <FlatList
       data={list}
       keyExtractor={(item)=>`"${item.id}"`}
       renderItem={({item})=> <ItemCard data={item} />}
     /> 
   </Container>
  );
}