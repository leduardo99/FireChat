import React from 'react';

import { StatusBar, KeyboardAvoidingView } from 'react-native';

import {
  Container,
  Form,
  Input,
  Button,
  TextButton,
  RegisterText,
  ButtonRegister,
  Logo,
} from './styles';

import logo from '../../logo.png';

const Login = ({ navigation }) => (
  <Container
    source={{
      uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
    }}
    resizeMode="cover">
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Form>
        <Logo source={logo} resizeMode="cover" />
        <Input placeholder="Usuário" />
        <Input placeholder="Senha" secureTextEntry />

        <Button>
          <TextButton>ENTRAR</TextButton>
        </Button>

        <ButtonRegister onPress={() => navigation.navigate('Register')}>
          <RegisterText>Registrar-se</RegisterText>
        </ButtonRegister>
      </Form>
    </KeyboardAvoidingView>
  </Container>
);

export default Login;
