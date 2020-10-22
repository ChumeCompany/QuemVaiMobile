import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Bubble, Tittle } from "../Cadastro/styles";
import { Container } from "../Login/styles";
import { FilterButton, TittleView, Cards } from "./styles";

function Eventos() {
  return (
    <Container>
      <Bubble source={require("../../images/utils/Vector.png")} />
      <TittleView>
        <Tittle>Esportes</Tittle>
        <FilterButton>
          <MaterialCommunityIcons
            name="filter-outline"
            size={20}
            color={"#000"}
          />
        </FilterButton>
      </TittleView>
      <Cards></Cards>
    </Container>
  );
}

export default Eventos;
