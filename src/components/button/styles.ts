import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const ContainerButton = styled.TouchableOpacity`
  width: ${wp('80%')}px;
  height: 57px;
  background-color: ${({ theme }: any) => theme.COLORS.BTN_COLOR};
  border-radius: 6px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
