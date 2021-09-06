import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text, Image} from 'react-native';

import {size} from '../helpers/statics';
import Colors from '../consts/colors';

import TabBarKey from './tabbar_keys';
import GetTabIcon from './tabbar_icons';

const DefaultButton = props => {
  const {activeTabIndex, route, onPress, onLongPress} = props;
  const {name} = route;

  const {tabBarButtonContainerStyle, imageStyle} = styles();

  const {icon, opacity} = GetTabIcon(name, activeTabIndex);

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={tabBarButtonContainerStyle}>
      <View>
        <Image source={icon} style={[imageStyle, {opacity}]} />
      </View>
      <Text style={{opacity, fontSize: size(12)}}>{TabBarKey[name]}</Text>
    </TouchableOpacity>
  );
};
const TabbarButton = props => {
  const {activeTabIndex, route, onPress, onLongPress} = props;

  return (
    <DefaultButton
      onPress={onPress}
      onLongPress={onLongPress}
      route={route}
      activeTabIndex={activeTabIndex}
    />
  );
};

const styles = () => {
  return StyleSheet.create({
    tabBarButtonContainerStyle: {
      paddingTop: size(15),
      paddingBottom: size(15),
      height: size(70),
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'flex-end',
    },
    tabBarCustomButtonContainerStyle: {
      paddingTop: size(15),
      paddingBottom: size(25),
      height: size(85),
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'flex-end',
      borderTopLeftRadius: size(15),
    },
    imageStyle: {
      height: size(25),
      width: size(25),
      marginBottom: size(7),
      resizeMode: 'cover',
      opacity: 0.5,
    },
    plusImageStyle: {
      height: size(21),
      width: size(21),
      resizeMode: 'cover',
    },
    plusImageContainerStyle: {
      backgroundColor: Colors.lightBlue,
      height: size(50),
      width: size(50),
      borderRadius: 50,
      borderColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    pluseImageBorderViewStyle: {
      borderColor: 'white',
      height: size(61),
      width: size(61),
      borderRadius: 61,
      borderWidth: size(15),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: size(-15),
    },
    badgeContainer: {
      position: 'absolute',
      backgroundColor: Colors.red,
      width: size(18),
      height: size(18),
      borderRadius: size(18),
      zIndex: 2,
      right: -5,
      top: -5,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

export default TabbarButton;
