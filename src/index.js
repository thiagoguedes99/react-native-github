import React from 'react';
import Router from './routes';

import {StatusBar} from 'react-native';

const App = () => (
  <React.Fragment>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Router />
  </React.Fragment>
);

export default App;
