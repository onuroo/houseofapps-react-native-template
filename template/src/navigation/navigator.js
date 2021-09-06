import React, {useEffect, useState, useMemo} from 'react';
import {View, StyleSheet, Keyboard, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import PropTypes from 'prop-types';

import {useSafeArea} from 'react-native-safe-area-context';

import {size} from '../helpers/statics';

import TabbarButton from './tabbar_button';
import NavigationActions from './navigation_actions';

import {
  LoginScreen,
  LandingScreen,
  SplashScreen,
  HomeScreen,
  ProfileScreen,
} from './screens';

import {
  ModalScreenTransition,
  ScreenTransition,
  ModalTransition,
  SearchScreenTransition,
  AppTransition,
} from './animations';

import AuthHooks from '../hooks/auth.hooks';

const Tab = createBottomTabNavigator();

const MyTabBar = ({state, navigation}) => {
  const {navigatePush, tabNavigate} = NavigationActions();
  const {tabBarContainerStyle} = styles();

  const onPress = route => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
    });

    if (!event.defaultPrevented) {
      tabNavigate(route.name);
    }
  };

  const {routes} = state;
  const tabs = routes;

  const [showTabBar, setShowTabBar] = useState(true);

  useEffect(() => {
    if (Platform.OS === 'android') {
      Keyboard.addListener('keyboardDidShow', () => setShowTabBar(false));
      Keyboard.addListener('keyboardDidHide', () => setShowTabBar(true));
      // cleanup function
      return () => {
        Keyboard.removeListener('keyboardDidShow');
        Keyboard.removeListener('keyboardDidHide');
      };
    }
  }, []);

  const insets = useSafeArea();

  let height = size(70);

  height += insets.bottom;

  const appIsLoaded = true;

  return useMemo(() => {
    const button = showTabBar && appIsLoaded && (
      <View
        style={[tabBarContainerStyle, {height, paddingBottom: insets.bottom}]}>
        {tabs.map(tab => {
          return (
            <TabbarButton
              key={tab.name}
              route={tab}
              onPress={() => onPress(tab)}
              onLongPress={() => {}}
              activeTabIndex={state.index}
            />
          );
        })}
      </View>
    );
    return button;
  }, [showTabBar, appIsLoaded, state]);
};

MyTabBar.propTypes = {
  state: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

const RootStack = createStackNavigator();

const ScreensNavigator = props => {
  const {authState} = AuthHooks();

  const options = {
    headerShown: false,
    tabBarVisible: false,
  };
  const tabBarOptions = {
    headerShown: false,
  };

  return (
    <RootStack.Navigator
      initialRouteName={authState.isAuthenticated ? 'TabScreens' : 'Login'}>
      <RootStack.Screen
        name="TabScreens"
        component={TabScreens}
        options={{...tabBarOptions, ...AppTransition}}
      />
      <RootStack.Screen
        name="Splash"
        component={SplashScreen}
        options={{...options}}
      />
      <RootStack.Screen
        name="Login"
        component={LoginScreen}
        options={{...options, ...ModalScreenTransition}}
      />
      <RootStack.Screen
        name="Landing"
        component={LandingScreen}
        options={{...options, ...ScreenTransition}}
      />
    </RootStack.Navigator>
  );
};

const TabScreens = () => {
  return (
    <Tab.Navigator
      unmountInactiveScreens
      headerMode="none"
      lazy={false}
      tabBar={props => {
        return <MyTabBar {...props} />;
      }}>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="ProfileTab" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = () => {
  return StyleSheet.create({
    tabBarContainerStyle: {
      width: '100%',
      height: size(70),
      flexDirection: 'row',
      backgroundColor: 'white',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: -8,
      },
      shadowOpacity: 0.05,
      shadowRadius: 4.84,
      elevation: 16,
    },
  });
};

export default ScreensNavigator;
