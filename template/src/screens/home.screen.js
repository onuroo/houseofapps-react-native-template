import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Home</Text>
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

export default HomeScreen;
