import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './index.style';

const DashboardCard = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>Dashboard</Text>
    </View>
  );
};

export default DashboardCard;
