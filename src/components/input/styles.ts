import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const ContainerInput = styled.View``;

export const CustomLabel = styled.Text`
  font-size: 12px;
  margin-bottom: 8px;
  color: #f1f1f2;
`;

export const CustomInput = styled.TextInput`
  background-color: ${({ theme }: any) => theme.COLORS.BG_SECONDARY};
  border-radius: 6px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 12px;
  width: ${wp('80%')}px;
  height: 47px;
`;
