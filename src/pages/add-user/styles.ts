import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const WrapperPageAddUser = styled.View`
  display: flex;
  align-items: center;
  width: ${widthPercentageToDP('100%')}px;
  height: ${heightPercentageToDP('100%')}px;
  background-color: ${(props) => props.theme.COLORS.BG_PRIMARY};
`;

export const MarginTop = styled.View`
  height: ${heightPercentageToDP('10%')}px;
`;
