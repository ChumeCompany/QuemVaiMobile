import React,{useContext,useState,useEffect} from "react";
import { FlatList } from 'react-native';

import { AppLoading } from 'expo';

import { Tittle } from "../Perfil/styles";
import { Container } from "../Login/styles";
import {Cards} from "./components/Cards";
import {ItemCard} from "./components/ItemsCard";

import {InfosContext} from "../../contexts/userManagerInfo/info";

export default function Favorites() {
  const [loading, setLoading] = useState(false);
  const {getFavorites} = useContext(InfosContext);
  const [lista, setLista] = useState({"true":true});

  useEffect(  ()=>{
      async function iniatilize (){
      const lista = await getFavorites();
      setLista(lista);
      setLoading(true);
    }
   iniatilize();
  },[]);

  if(loading == false){
    return <AppLoading/>
  }
  return (
    <Container>
      <Tittle>Lugares favoritos</Tittle>
      <FlatList
        data={lista}
        keyExtractor={(item)=>item.Space_id}
        renderItem={({item})=><ItemCard></ItemCard>}
       />
    </Container>
  );
}
