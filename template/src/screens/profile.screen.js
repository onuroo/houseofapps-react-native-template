import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Profile</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    alignSelf: 'center',
  },
});

export default ProfileScreen;
