//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styles} from './index.style';

// create a component
const DonateButton = () => {
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.btnTxt}>Donate</Text>
    </View>
  );
};

//make this component available to the app
export default DonateButton;
