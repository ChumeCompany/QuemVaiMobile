import React,{useContext,useState} from "react";
import { Ionicons } from "@expo/vector-icons";
import { View,Modal } from 'react-native';
import {InfosContext} from "../../../contexts/userManagerInfo/info";

import {Cards} from "../../Favorites/components/Cards";
import {Info } from "../../Favorites/styles";
import {Text,ButtonView,By,Image,authorName} from "../styles";

import Model from "./Modal";

export default function ItemCard({data}){
  const [modal,setModal] = useState(false);
  return (
    <Cards>
      <View style={{flexDirection:"row"}} > 
      <Text>{data["name_event"]}</Text>
      <ButtonView onPress={()=>setModal(true)}>
        <Ionicons name={"ios-search"} size={24} color={"#000"} />
        <Modal transparent={true} animationType="fade" visible={modal} >
          <Model/>
        </Modal>
      </ButtonView>
      </View>
      <View style={{flexDirection:"row"}}>
        <Ionicons name={"md-map"} size={24} color={"#000"} style={{marginTop:-1,marginLeft:19}} />
        <Info>{data["address"]}</Info>
      </View>
      <View style={{flexDirection:"row",marginTop:15}}>
        <Ionicons name={"ios-basketball"} size={24} color={"#000"} style={{marginTop:-1,marginLeft:19}} />
        <Info>{data["SportsName"]}</Info>
      </View>
      <View style={{flexDirection:"row",marginTop:15}}>
        <Ionicons name={"md-locate"} size={24} color={"#000"} style={{marginTop:-1,marginLeft:19}} />
        <Info>{data["SpaceName"]}</Info>
      </View>
      <View style={{flexDirection:"row",marginTop:20}}>
        <Image source={{uri:data["photos"]}} /> 
        <By>Por:{"\n"+data["author"]}</By>


        
      </View>
    </Cards>
  );
}