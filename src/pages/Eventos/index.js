import React from "react";

import { Bubble, Tittle } from "../Cadastro/styles";
import { Container } from "../Login/styles";
import { Cards } from "../Esportes/styles";
function Eventos() {
  return (
    <Container>
      <Bubble source={require("../../images/utils/Vector.png")} />
      <Tittle>Eventos</Tittle>
      <Cards></Cards>
    </Container>
  );
}

export default Eventos;
