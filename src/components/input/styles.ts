import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const WrapperInput = styled.View`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

export const CustomLabel = styled.Text`
  font-size: 12px;
  color: #f1f1f2;
  width: ${wp('80%')}px;
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }: any) => theme.COLORS.BG_SECONDARY};
  border-radius: 6px;
  padding: 10px;
  font-size: 16px;
  width: ${wp('80%')}px;
  height: 47px;
`;

export const TextError = styled.Text`
  font-size: 14px;
  color: red;
`;

export const WrapperInputOption = styled.View`
  background-color: ${({ theme }: any) => theme.COLORS.BG_SECONDARY};
  border-radius: 6px;
  font-size: 16px;
  width: ${wp('80%')}px;
  color: #f1f1f2;
  margin-top: 8px;
  margin-bottom: 26px;
`;
