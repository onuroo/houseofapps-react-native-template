import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const LandingScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Landing</Text>
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

export default LandingScreen;
