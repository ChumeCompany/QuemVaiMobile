import React, { useContext, useEffect,useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { AppLoading } from 'expo';
import { View,ActivityIndicator } from 'react-native';

import { AuthContext } from "../../contexts/auth";


import {
  SearchBar,
  Container,
  HeaderView,
  ImageBubble,
  IconButton,
  PerfilButton,
} from "./styles";

function Home() {
  const { signOut, getInfo, token,perfilNavigation,searchNavigation } = useContext(AuthContext);
  const [infoUser,SetInfoUser] = useState({davi:1});
  const [load,setLoad] = useState(false);
  
  useEffect(() => {
    async function initialize(){
    try {
      const result = await getInfo(token);
      SetInfoUser(result);
      setLoad(true);
    } catch (err) {
      signOut();
    }
}
initialize();
  }, []);
  if(load == false){
    return(
      <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
      <ActivityIndicator color="#f16b4a" size={40} />
    </View>
    );
  }
  return (
    <Container>
      <MapView
        style={{ width: "100%", height: "100%", position: "absolute" }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -23.490796,
          longitude: -46.571763,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      />
      <HeaderView>
        <SearchBar placeholder="Pesquisar" />
        <IconButton onPress={() => signOut()}>
          <Ionicons name="ios-search" size={28} color={"#F06543"} />
        </IconButton>
        <PerfilButton onPress={()=>perfilNavigation()} >
          <ImageBubble source={{uri:infoUser["info"]["photos"]}} />
        </PerfilButton>
      </HeaderView>
    </Container>
  );
}

export default Home;
