import React, { useState, useContext, useEffect } from "react";
import { ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../../contexts/auth";

import { View, ActivityIndicator } from "react-native";

import { UserManagerContext } from "../../contexts/userManagerInfo/index";

import {
  Container,
  Label,
  SubmitText,
  AreaSubmit,
  AreaLine,
  LineText,
} from "../Login/styles";
import { AreaCell, Blank } from "../Cadastro/styles";
import {
  Tittle,
  Input,
  Ddd,
  CellNumber,
  Icon,
  VoltarArea,
  SairArea,
  VoltarTxt,
  SairTxt,
} from "./styles";

export default function Perfil({ navigate }) {
  const [loading, SetLoading] = useState(false);
  const [infoUser, setInfoUser] = useState({ davi: 1 });
  const [saving, setSaving] = useState(false);

  const [editNome, setEditNome] = useState(false);
  const [editApelido, setEditApelido] = useState(false);
  const [editCellphone, setEditCellphone] = useState(false);
  const [editEmail, setEditEmail] = useState(false);

  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [ddd, setDDD] = useState("");
  const [email, setEmail] = useState("");

  const { signOut, getInfo, token, homeNavigation } = useContext(AuthContext);
  const { alterarDados, deletarUsuario } = useContext(UserManagerContext);

  useEffect(() => {
    async function initialize() {
      try {
        const response = await getInfo(token);
        setInfoUser(response);
        SetLoading(true);
      } catch (err) {
        signOut();
        alert(err);
      }
    }
    initialize();
  }, []);
  useEffect(() => {
    async function initialize() {
      try {
        SetLoading(false);
        const response = await getInfo(token);
        setInfoUser(response);
        SetLoading(true);
      } catch (err) {
        signOut();
        alert(err);
      }
    }
    initialize();
  }, [saving]);

  if (loading == false) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ActivityIndicator color="#f16b4a" size={40} />
      </View>
    );
  } else {
    return (
      <Container>
        <ScrollView>
          <View style={{ flexDirection: "row" }}>
            <Tittle>Perfil</Tittle>
            <VoltarArea onPress={() => homeNavigation()}>
              <VoltarTxt>Voltar</VoltarTxt>
            </VoltarArea>
            <SairArea onPress={() => signOut()}>
              <SairTxt>Sair</SairTxt>
            </SairArea>
          </View>
          <Label>Nome</Label>
          <AreaCell>
            <Input
              placeholder={infoUser["info"]["name"]}
              value={nome}
              onChangeText={(text) => setNome(text)}
              editable={editNome}
            />
            <Icon
              onPress={() => {
                editNome ? setEditNome(false) : setEditNome(true);
              }}
            >
              <MaterialIcons name="edit" size={32} color={"#000"} />
            </Icon>
          </AreaCell>

          <Label>Apelido</Label>

          <AreaCell>
            <Input
              placeholder={infoUser["info"]["username"]}
              value={apelido}
              onChangeText={(text) => setApelido(text)}
              editable={editApelido}
            />
            <Icon
              onPress={() => {
                editApelido ? setEditApelido(false) : setEditApelido(true);
              }}
            >
              <MaterialIcons name="edit" size={32} color={"#000"} />
            </Icon>
          </AreaCell>

          <Label>Email</Label>
          <AreaCell>
            <Input
              placeholder={infoUser["info"]["email"]}
              value={email}
              onChangeText={(text) => setEmail(text)}
              editable={editEmail}
            />
            <Icon
              onPress={() => {
                editEmail ? setEditEmail(false) : setEditEmail(true);
              }}
            >
              <MaterialIcons name="edit" size={32} color={"#000"} />
            </Icon>
          </AreaCell>

          <Label>Celular</Label>
          <AreaCell>
            <Ddd
              placeholder={infoUser["info"]["DDD"].toString()}
              value={ddd}
              editable={editCellphone}
              onChangeText={(text) => setDDD(text)}
            />
            <CellNumber
              placeholder={infoUser["info"]["cellPhoneNumber"].toString()}
              value={cellphone}
              editable={editCellphone}
              onChangeText={(text) => setCellphone(text)}
            />
            <Icon
              onPress={() => {
                editCellphone
                  ? setEditCellphone(false)
                  : setEditCellphone(true);
              }}
            >
              <MaterialIcons name="edit" size={32} color={"#000"} />
            </Icon>
          </AreaCell>

          <Blank></Blank>
          <AreaSubmit
            onPress={async () => {
              SetLoading(false);
              if (editNome == false || nome == "") {
                setNome(infoUser["info"]["name"]);
                if (editApelido == false || apelido == "") {
                  setApelido(infoUser["info"]["username"]);
                }
                if (editEmail == false || email == "") {
                  setEmail(infoUser["info"]["email"]);
                }
                if (editCellphone == false) {
                  if (ddd == "") {
                    setDDD(infoUser["info"]["DDD"]);
                  } else if (cellphone == "") {
                    setCellphone(infoUser["info"]["cellPhoneNumber"]);
                  }
                  setDDD(infoUser["info"]["DDD"]);
                  setCellphone(infoUser["info"]["cellPhoneNumber"]);
                }
              } else if (editApelido == false || apelido == "") {
                setApelido(infoUser["info"]["username"]);
                if (editNome == false || nome == "") {
                  setNome(infoUser["info"]["name"]);
                }
                if (editEmail == false || email == "") {
                  setEmail(infoUser["info"]["email"]);
                }
                if (editCellphone == false) {
                  if (ddd == "") {
                    setDDD(infoUser["info"]["DDD"]);
                  } else if (cellphone == "") {
                    setCellphone(infoUser["info"]["cellPhoneNumber"]);
                  }
                  setDDD(infoUser["info"]["DDD"]);
                  setCellphone(infoUser["info"]["cellPhoneNumber"]);
                }
              } else if (editEmail == false || email == "") {
                setEmail(infoUser["info"]["email"]);
                if (editNome == false || nome == "") {
                  setNome(infoUser["info"]["name"]);
                }
                if (editApelido == false || apelido == "") {
                  setApelido(infoUser["info"]["username"]);
                }
                if (editCellphone == false) {
                  if (ddd == "") {
                    setDDD(infoUser["info"]["DDD"]);
                  } else if (cellphone == "") {
                    setCellphone(infoUser["info"]["cellPhoneNumber"]);
                  }
                  setDDD(infoUser["info"]["DDD"]);
                  setCellphone(infoUser["info"]["cellPhoneNumber"]);
                }
              } else if (editCellphone == false) {
                if (ddd == "") {
                  setDDD(infoUser["info"]["DDD"]);
                } else if (cellphone == "") {
                  setCellphone(infoUser["info"]["cellPhoneNumber"]);
                }
                setDDD(infoUser["info"]["DDD"]);
                setCellphone(infoUser["info"]["cellPhoneNumber"]);

                if (editNome == false || nome == "") {
                  setNome(infoUser["info"]["name"]);
                }
                if (editApelido == false || apelido == "") {
                  setApelido(infoUser["info"]["username"]);
                }
                if (editEmail == false || email == "") {
                  setEmail(infoUser["info"]["email"]);
                }
              }
              console.log(nome, apelido, cellphone, email, ddd);
              try {
                await alterarDados(nome, apelido, cellphone, email, ddd, token);
                setEditApelido(false);
                setEditCellphone(false);
                setEditEmail(false);
                setEditNome(false);
                setSaving(true);
                SetLoading(true);
              } catch (err) {
                alert(err);
                SetLoading(true);
              }
            }}
          >
            <SubmitText> Editar dados</SubmitText>
          </AreaSubmit>
          <AreaLine
            onPress={async () => {
              try{
              SetLoading(false);
              await deletarUsuario();
              await signOut();
              }
              catch(err){
                alert(err);
              }
            }}
          >
            <LineText>Deletar Conta</LineText>
          </AreaLine>
          <Blank></Blank>
        </ScrollView>
      </Container>
    );
  }
}
