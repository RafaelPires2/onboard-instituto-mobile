import styled from 'styled-components/native';

export const WrapperFloatButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: green;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  bottom: 70px;
  z-index: 10;
`;

export const TextFloatButton = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: white;
`;