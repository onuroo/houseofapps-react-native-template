import {useNavigation, StackActions} from '@react-navigation/native';

import debounce from 'lodash.debounce';

const NavigationActions = () => {
  const navigation = useNavigation();

  const tabNavigate = routeName => {
    navigation.navigate(routeName);
  };

  const navigatePush = (routeName, params = {}, in_stack = false) => {
    navigation.dispatch(
      StackActions.push(routeName.toString(), {
        ...params,
      }),
    );
  };

  const navigatePop = (screenCount = 1) => {
    if (navigation.canGoBack()) {
      navigation.dispatch(StackActions.pop(screenCount));
    }
  };

  const navigateReset = (routeName, params = {}) => {
    navigation.dispatch(StackActions.replace(routeName, params));
  };
  const navigatePoptoTop = (routeName, params = {}) => {
    navigation.reset();
  };

  return {
    navigation,
    tabNavigate: debounce(tabNavigate, 800, {leading: true, trailing: false}),
    navigatePush: debounce(navigatePush, 800, {leading: true, trailing: false}),
    navigatePop: debounce(navigatePop, 800, {leading: true, trailing: false}),
    navigateReset: debounce(navigateReset, 800, {
      leading: true,
      trailing: false,
    }),
    navigatePoptoTop,
  };
};

export default NavigationActions;
