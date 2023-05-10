import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ButtonColor = {
  BTN_PRIMARY: '#EE7B30',
  BTN_ALERT: '#C00505',
  BTN_SUCCESS: '#006400',
  BTN_DETAILS: '#5D6683',
};

export type ButtonVariant = 'BTN_DETAILS' | 'BTN_PRIMARY' | 'BTN_ALERT' | 'BTN_SUCCESS';
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

  ${(props) => {
    return `width: ${props.width}%`;
  }}

  ${(props) => {
    return `background-color: ${ButtonColor[props.variant]};`;
  }}
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;
