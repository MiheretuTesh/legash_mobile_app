import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Dashboard from '../../components/Dashboard';
// create a component
const HomePage = () => {
  return (
    <View style={styles.container}>
      <Dashboard />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default HomePage;
