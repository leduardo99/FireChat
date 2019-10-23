import React from 'react';

import { StatusBar, KeyboardAvoidingView } from 'react-native';

import ButtonBackHandler from '~/components/ButtonBackHandler';

import {
  Container,
  Form,
  Input,
  Button,
  TextButton,
  LoginText,
  ButtonLogin,
  Logo,
} from './styles';

import logo from '../../logo.png';

const Register = ({ navigation }) => (
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
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" secureTextEntry />
        <Input placeholder="Confirmar senha" secureTextEntry />

        <Button>
          <TextButton>Registrar</TextButton>
        </Button>

        <ButtonLogin onPress={() => navigation.navigate('Login')}>
          <LoginText>Logar-se</LoginText>
        </ButtonLogin>
      </Form>
    </KeyboardAvoidingView>
  </Container>
);

Register.navigationOptions = ({ navigation }) => ({
  headerTransparent: true,
  headerLeft: <ButtonBackHandler backHandler={() => navigation.goBack()} />,
});

export default Register;
