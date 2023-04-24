import React from 'react';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ContainerLogin = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: ${wp('100%')}px;
  height: ${hp('100%')}px;
  background-color: #351431;
`;

export const LogoText = styled.Text`
  font-size: 24px;
  margin-bottom: 50px;
  color: white;
`;
