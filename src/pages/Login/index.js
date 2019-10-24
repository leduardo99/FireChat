import React, { useState } from 'react';

import {
  StatusBar,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';

import Auth from '~/services/firebase/Auth';

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

const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);

    Auth.onSignIn(email, password)
      .then(() => setSubmitting(false))
      .catch(err => {
        setSubmitting(false);
        console.log(err);
      });
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

          <Button
            onPress={handleSubmit}
            disabled={submitting}
            submitting={submitting}>
            {!submitting && <TextButton>ENTRAR</TextButton>}
            {submitting && <ActivityIndicator color="white" />}
          </Button>
          <ButtonRegister onPress={() => navigation.navigate('Register')}>
            <RegisterText>Registrar-se</RegisterText>
          </ButtonRegister>
        </Form>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Login;
