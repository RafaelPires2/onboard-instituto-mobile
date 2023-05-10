import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ButtonColor = {
  BTN_PRIMARY: '#EE7B30',
  BTN_ALERT: '#C00505',
  BTN_SUCCESS: '#006400',
  BTN_DETAILS: '#5D6683',
};

type ButtonVariant = 'BTN_PRIMARY' | 'BTN_ALERT' | 'BTN_SUCCESS' | 'BTN_DETAILS';
interface ButtonProps {
  width: string;
  variant: ButtonVariant;
}

export const WrapperButton = styled.TouchableOpacity<ButtonProps>`
  display: flex;
  flex-direction: row;
  border-radius: 6px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: ${({ width }) => width}%;

  ${(props) => {
    return `background-color: ${ButtonColor[props.variant]};`;
  }}
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;
