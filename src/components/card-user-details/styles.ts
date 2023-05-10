import { widthPercentageToDP } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const ContainerUserDetails = styled.View`
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid black;
  z-index: 10;
  position: absolute;
  top: 100px;
  width: ${widthPercentageToDP('100%')}px;
  background-color: ${(props) => props.theme.COLORS.BG_PRIMARY};
`;
