import { widthPercentageToDP } from "react-native-responsive-screen";
import styled from "styled-components/native";

export const ItemSeparatorSmall = styled.View`
  width: ${widthPercentageToDP('100%')}px;
  height: 6px;
`;

export const ItemSeparatorMedium = styled.View`
  width: ${widthPercentageToDP('100%')}px;
  height: 12px;
`;

export const ItemSeparatorLarge = styled.View`
  width: ${widthPercentageToDP('100%')}px;
  height: 16px;
`;