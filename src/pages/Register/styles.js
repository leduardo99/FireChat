import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
`;

export const Form = styled.View`
  width: 300px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  border-radius: 15px;
`;

export const Input = styled.TextInput`
  background: #ddd;
  width: 300px;
  color: black;

  border-radius: 5px;

  margin: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 300px;
  height: 35px;

  margin-top: 10px;
  background: #7149c1;

  border-radius: 5px;

  flex-direction: row;

  align-items: center;
  justify-content: center;

  elevation: 4;
`;

export const TextButton = styled.Text`
  color: #ffff;
  font-size: 16px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const LoginText = styled.Text`
  color: #d0d0d0;
  font-size: 16px;
`;

export const Logo = styled.Image`
  height: ${Dimensions.get('window').height * 0.13};
  margin-vertical: ${Dimensions.get('window').height * 0.1};
  width: ${Dimensions.get('window').height * 0.11 * (1950 / 662)};
`;

// export const LogoSmall = styled.Image`
//   height: ${Dimensions.get('window').height * 0.13};
//   margin-vertical: ${Dimensions.get('window').height * 0.1};
//   width: ${Dimensions.get('window').height * 0.11 * (1950 / 662)};
// `;
