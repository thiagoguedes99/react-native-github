import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/main';
import User from './pages/user';

// const routes = createStackNavigator(
//   {
//     Main,
//     User,
//   },
//   {
//     initialRouteName: 'Main',
//   },
// );

// const routes = createStackNavigator(
//   {
//     Main: {
//       screen: Main,
//       title: 'teste',
//     },
//     User,
//   },
//   {
//     initialRouteName: 'Main',
//   },
// );

const routes = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Título do Main',
      },
    },
    User,
  },
  {
    headerLayoutPreset: 'center',
    initialRouteName: 'Main',
    // headerBackTitleVisible: true,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#7159c1',
      },
      headerTintColor: '#FFF',
    },
  },
);

const Router = createAppContainer(routes);

export default Router;
