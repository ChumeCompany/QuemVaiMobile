import React, { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import {
  LogoArea,
  ScrollView,
  Oval,
  Logo,
  Tittle,
  QuemVaiText,
  Container,
  Label,
  Input,
  AreaSubmit,
  AreaLine,
  AreaLink,
  SubmitText,
  LineText,
  LinkText,
} from "./styles.js";

export default function App({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  return (
    <Container>
      <ScrollView>
        <Oval></Oval>
        <LogoArea>
          <Logo source={require("../../images/logo/QuemVaiLogo3.png")} />
        </LogoArea>
        <Tittle>
          Tenha mais lazer{"\n"}com o <QuemVaiText>Quem Vai</QuemVaiText>
        </Tittle>
        <Label>Email:</Label>
        <Input
          placeholder="Digite seu email"
          keyboardType="email-address"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Label>Senha:</Label>
        <Input
          placeholder="Digite sua senha"
          secureTextEntry={true}
          autoCorrect={false}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <AreaSubmit onPress={() => signIn(email, password)}>
          <SubmitText>Entrar</SubmitText>
        </AreaSubmit>

        <AreaLine onPress={() => navigation.navigate("Cadastro")}>
          <LineText>Cadastre-se</LineText>
        </AreaLine>

        <AreaLink onPress={() => navigation.navigate("Recuperar")}>
          <LinkText>Esqueceu sua senha?</LinkText>
        </AreaLink>
      </ScrollView>
    </Container>
  );
}
