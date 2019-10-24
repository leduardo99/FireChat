import React, { useState } from 'react';

import { StatusBar, KeyboardAvoidingView } from 'react-native';

import Auth from '~/services/firebase/Auth';

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

const Register = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmit = () => {
    const data = { username, email, password };

    Auth.register(data);

    navigation.navigate('Login');
  };

  return (
    <Container
      source={{
        uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
      }}
      resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <Form>
          <Logo source={logo} resizeMode="cover" />
          <Input
            placeholder="Usuário"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <Input
            placeholder="E-mail"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Input
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Input
            placeholder="Confirmar senha"
            secureTextEntry
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />

          <Button onPress={handleSubmit}>
            <TextButton>Registrar</TextButton>
          </Button>

          <ButtonLogin onPress={() => navigation.navigate('Login')}>
            <LoginText>Logar-se</LoginText>
          </ButtonLogin>
        </Form>
      </KeyboardAvoidingView>
    </Container>
  );
};

Register.navigationOptions = ({ navigation }) => ({
  headerTransparent: true,
  headerLeft: <ButtonBackHandler backHandler={() => navigation.goBack()} />,
});

export default Register;
