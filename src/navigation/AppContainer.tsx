import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import PlayScreen from '../screens/PlayScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      navigationOptions: () => ({ header: null }),
      screen: HomeScreen,
    },
    Play: {
      navigationOptions: () => ({ headerTintColor: 'black' }),
      screen: PlayScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
