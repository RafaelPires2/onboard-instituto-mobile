import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const WrapperButton = styled.View`
  display: flex;
  width: ${wp('100%')}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.COLORS.BG_SECONDARY};
  gap: 5px;
  padding: 5px;
`;
