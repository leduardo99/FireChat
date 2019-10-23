import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Button } from './styles';

const ButtonBackHandler = ({ backHandler }) => (
  <Button onPress={backHandler}>
    <Icon name="arrow-left" color="#FFFF" size={20} />
  </Button>
);

export default ButtonBackHandler;
