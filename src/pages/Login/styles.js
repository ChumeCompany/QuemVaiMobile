import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const LogoArea = styled.View`
  width: 100%;
  height: 35%;
  position: absolute;
  background-color: #3edaa8;
  margin-bottom:32px; 
`;

export const Oval = styled.View`
  margin-top: 33%;
  background-color: #3edaa8;
  width: 110px;
  height: 110px;
  align-self: center;
  position: absolute;
  border-radius: 50px;
  transform: scaleX(5.55);
`;

export const Logo = styled.Image`
  align-self: center;
  margin-top: 7%;
  width: 189px;
  height: 189px;
`;

export const Tittle = styled.Text`
  align-self: flex-start;
  margin-left: 2.7%;
  font-family: "Poppins_600SemiBold";
  color: #ffff;
  font-size: 24px;
  margin-top: 220px;
`;
export const QuemVaiText = styled.Text`
  font-family: "Poppins_600SemiBold";
  color: #ed461d;
  font-size: 24px;
`;
export const Label = styled.Text`
  font-size: 20px;
  font-family: "Poppins_500Medium";
  margin-top: 12%;
  margin-bottom: 8px;
  align-self: flex-start;
  margin-left: 4.4%;
`;

export const Input = styled.TextInput`
  width: 91%;
  height: 48px;
  margin: 0.93%;
  margin-left: 4.4%;
  background: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  padding-left: 10px;
  font-size: 16px;
  font-family: "Poppins_400Regular";
`;

export const AreaSubmit = styled.TouchableOpacity`
  margin-top: 54px;
  width: 91%;
  height: 53px;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: #f16b4a;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: "Poppins_500Medium";
`;

export const AreaLine = styled.TouchableOpacity`
  width: 91%;
  height: 53px;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  border-width: 1.5px;
  border-color: #f16b4a;
  border-radius: 8px;
`;

export const LineText = styled.Text`
  color: #f16b4a;
  font-size: 18px;
  font-family: "Poppins_500Medium";
`;
export const AreaLink = styled.TouchableOpacity`
  margin-top: 45px;
  justify-content: center;
  align-self: center;
  align-items: center;
  margin-bottom: 52px;
`;
export const LinkText = styled.Text`
  align-self: center;
  color: #f16b4a;
  font-family: "Poppins_500Medium";
  font-size: 18px;
`;
export const ScrollView = styled.ScrollView``;
