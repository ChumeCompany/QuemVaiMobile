import React,{useContext,useState} from "react";
import { Ionicons } from "@expo/vector-icons";
import { View,Modal } from 'react-native';
import {InfosContext} from "../../../contexts/userManagerInfo/info";

import {Cards} from "./Cards.js";
import { Text, Label, Info, ButtonView, IconButton, IconStar } from "../styles";
import Model from "../components/Modal";

export default function ItemCard({data}){
  const {removeFavorites} = useContext(InfosContext);
  const [modal,SetModal] = useState(false);
        return(
        <View>
        <Cards>
        <Text>{data.nome}</Text>
          <Label>Endereço</Label>
        <Info>{data.address}</Info>
          <Label>CEP</Label>
        <Info>{data.CEP}</Info>
          <Label>Descrição</Label>
        <Info>{data.description}</Info>
          <ButtonView>
            <IconStar onPress={async()=>{
              try{
              await removeFavorites(data.Space_id);
              }
              catch(err){
                alert(err);
              }
              }}>
              <Ionicons name="md-star" size={26} color="#FFA54F" />
            </IconStar>
            <IconButton onPress={()=>SetModal(true)}>
              <Modal transparent={true} animationType="fade" visible={modal}>
                <View style={{justifyContent:"center",alignItems:"center",marginTop:80}}>
                  <Model/>
                </View>
              </Modal>
              <Ionicons name="md-search" size={26} color="#000" />
            </IconButton>
          </ButtonView>
        </Cards>
      </View>
        );
}