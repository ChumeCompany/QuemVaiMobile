import React,{useContext,useState,useEffect} from "react";
import { View,FlatList,ActivityIndicator } from 'react-native';

import { Tittle } from "../Perfil/styles";
import { Container } from "../Login/styles";
import ItemCard from "./components/ItemCard";

import {InfosContext} from "../../contexts/userManagerInfo/info";

export default function Favorites() {
  const [loading, setLoading] = useState(false);
  const {getFavorites} = useContext(InfosContext);
  const [lista, setLista] = useState({"true":true});

  useEffect(  ()=>{
      async function iniatilize (){
        try{
      const lista = await getFavorites();
      setLista(lista);
      setLoading(true);
        }
        catch(err){
          alert(err);
        }
    }
   iniatilize();
  },[]);
  useEffect(()=>{
     async function update() {
     try{
    const lista = await getFavorites();
      setLista(lista);
      setLoading(true);
    }
    catch(err){
      alert(err);
    }
  }
  update();
  },[lista])

  if(loading == false){
    return (
      <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
        <ActivityIndicator color="#f16b4a" size={40} />
      </View>
    );
  }
  return (
      <Container>

        <Tittle>Lugares favoritos</Tittle>
        <FlatList
          data={lista}
          keyExtractor={(item)=>`"${item.Space_id}"`}
          renderItem={({item})=><ItemCard data={item}/>}
         />
      </Container>
    );
  
  
}
