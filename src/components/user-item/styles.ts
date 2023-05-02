import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const WrapperCardUserList = styled.View`
  display: flex;
  background-color: #fff;
  width: ${wp('100%')}px;
  align-items: center;
  gap: 10px;
`;
