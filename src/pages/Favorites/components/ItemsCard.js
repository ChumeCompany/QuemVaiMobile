import React,{useContext,useState,useEffect} from "react";
import { Ionicons } from "@expo/vector-icons";
import { View } from 'react-native';

import { Cards } from "../components/Cards.js";
import { Text, Label, Info, ButtonView, IconButton, IconStar } from "../styles";

function ItemCard(){
  return(
    <View>
        <Cards>
        <Text>Lugares favoritos</Text>
        <Label>Endereço</Label>
        <Info>Rua casa de não sei das quantas</Info>
        <Label>Endereço</Label>
        <Info>Rua casa de não sei das quantas</Info>
        <Label>Endereço</Label>
        <Info>Rua casa de não sei das quantas</Info>
        <ButtonView>
          <IconStar>
            <Ionicons name="md-star" size={26} color="#FFA54F" />
          </IconStar>
          <IconButton>
            <Ionicons name="md-search" size={26} color="#000" />
          </IconButton>
        </ButtonView>
      </Cards>
      </View>
  );
}
export default ItemCard;