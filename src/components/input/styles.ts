import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const ContainerInput = styled.TextInput`
  width: ${wp('80%')}px;
  height: 47px;
  background-color: ${({ theme }: any) => theme.COLORS.BG_SECONDARY};
  border-radius: 6px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 12px;
`;
