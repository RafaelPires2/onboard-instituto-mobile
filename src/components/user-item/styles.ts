import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const WrapperCardUserList = styled.View`
  display: flex;
  background-color: ${(props) => props.theme.COLORS.BG_SECONDARY};
  width: ${wp('100%')}px;
  align-items: center;
  gap: 5px;
  padding: 10px;
`;


