import React from 'react';
import AppNavigator from './navigation/routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => (
  <GestureHandlerRootView style={{flex: 1}}>
    <AppNavigator />
  </GestureHandlerRootView>
);

export default App;
