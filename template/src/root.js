import React, {useContext} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import ScreensNavigator from './navigation/navigator';
import {AppProvider, AppContext} from './contexts/app.context';

const MyTheme = {
  dark: false,
  colors: {
    background: 'rgb(255, 255, 255)',
  },
};

const Root = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <AppProvider>
          <RouterComponent />
        </AppProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const RouterComponent = () => {
  const {authState} = useContext(AppContext);

  return <ScreensNavigator isAuthenticated={authState.isAuthenticated} />;
};

export default Root;
