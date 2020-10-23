import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
`;
export const HeaderView = styled.View`
  flex-direction: row;
`;
export const SearchBar = styled.TextInput.attrs({
  placeholderFontFamily: "Poppins_400Regular",
  placeholderFontSize: 16,
  placeholderTextColor: "#404040",
})`
  width: 73.33%;
  margin-top: 72px;
  height: 52px;
  box-shadow: 11.81589px 12.26986px 10.907943px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: white;
  margin-left: 20px;
  padding-left: 50px;
  position: absolute;
`;

export const ImageBubble = styled.Image`
  width: 62px;
  height: 62px;

  box-shadow: 48px 48px 48px rgba(0, 0, 0, 1);
  border-radius: 100px;
`;

export const IconButton = styled.TouchableOpacity`
  margin-top: 84.5px;
  margin-left: 30px;
  box-shadow: 11.81589px 12.26986px 10.907943px rgba(0, 0, 0, 0.25);
`;
export const PerfilButton = styled.TouchableOpacity`
  margin-left: 72%;
  margin-top: 67px;
`;
