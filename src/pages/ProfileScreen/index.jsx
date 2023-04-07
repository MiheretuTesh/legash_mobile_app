import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PersonalDetails from '../../components/ProfileDetails';
import {styles} from './index.style';

// create a component
const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <PersonalDetails />
    </View>
  );
};

//make this component available to the app
export default ProfilePage;
