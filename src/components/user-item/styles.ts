import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const WrapperCardUserList = styled.View`
  flex: 1;
  background-color: #fff;
  width: ${wp('100%')}px;
  height: 70px;
  margin-bottom: 5px;
  align-items: center;
`;
