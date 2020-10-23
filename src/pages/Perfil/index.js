import React,{useState,useContext} from "react";
import { ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Container,
  Label,
  SubmitText,
  AreaSubmit,
  AreaLine,
  LineText,
} from "../Login/styles";
import { AreaCell, Blank } from "../Cadastro/styles";
import { Tittle, Input, Ddd, CellNumber, Icon } from "./styles";

export default function Perfil() {
  return (
    <Container>
      <ScrollView>
        <Tittle>Perfil</Tittle>
        <Label>Nome</Label>
        <AreaCell>
          <Input placeholder="Digite seu nome" />
          <Icon>
            <MaterialIcons name="edit" size={32} color={"#000"} />
          </Icon>
        </AreaCell>

        <Label>Apelido</Label>

        <AreaCell>
          <Input placeholder="Digite seu apelido" />
          <Icon>
            <MaterialIcons name="edit" size={32} color={"#000"} />
          </Icon>
        </AreaCell>

        <Label>Email</Label>
        <AreaCell>
          <Input placeholder="Digite seu email" />
          <Icon>
            <MaterialIcons name="edit" size={32} color={"#000"} />
          </Icon>
        </AreaCell>

        <Label>Celular</Label>
        <AreaCell>
          <Ddd placeholder="DDD" />
          <CellNumber placeholder="Digite seu numero" />
          <Icon>
            <MaterialIcons name="edit" size={32} color={"#000"} />
          </Icon>
        </AreaCell>

        <Blank></Blank>
        <AreaSubmit>
          <SubmitText>Editar dados</SubmitText>
        </AreaSubmit>
        <AreaLine>
          <LineText>Deletar Conta</LineText>
        </AreaLine>
        <Blank></Blank>
      </ScrollView>
    </Container>
  );
}
