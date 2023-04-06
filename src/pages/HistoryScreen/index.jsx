import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HistoryCard from '../../components/HistoryCard';

// create a component
const HistoryPage = () => {
  return (
    <View style={styles.container}>
      <HistoryCard />
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
export default HistoryPage;
