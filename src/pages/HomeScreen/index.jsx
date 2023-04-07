import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import DashboardCard from '../../components/DashboardCard';
import {styles} from './index.style';

// create a component
const HomePage = () => {
  return (
    <View style={styles.container}>
      <DashboardCard />
    </View>
  );
};

//make this component available to the app
export default HomePage;
