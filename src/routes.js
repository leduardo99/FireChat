import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '~/pages/Login';
import Register from '~/pages/Register';

const LoginNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Register,
});

const SwitchNavigator = createSwitchNavigator({
  LoginNavigator,
});

const Routes = createAppContainer(SwitchNavigator);

export default Routes;
