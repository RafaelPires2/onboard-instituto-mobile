import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const WrapperButton = styled.TouchableOpacity`
  width: ${wp('80%')}px;
  height: 47px;
  background-color: ${({ theme }: any) => theme.COLORS.BTN_COLOR};
  border-radius: 6px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
