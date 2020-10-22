import React, { useContext, useEffect,useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

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
  const { signOut, getInfo, token } = useContext(AuthContext);
  const [infoUser,SetInfoUser] = useState(null);
  
  useEffect(() => {
    async function initialize(){
    try {
      const result = await getInfo(token);
      SetInfoUser(result);
    } catch (err) {
      signOut();
    }
}
initialize();
  }, []);
  
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
        <PerfilButton>
          <ImageBubble source={{uri:"https://quemvai.blob.core.windows.net/fotos/5722e02d-3b52-901b-475c-28f24840fbd3.jpg"}} />
        </PerfilButton>
      </HeaderView>
    </Container>
  );
}

export default Home;
