import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PersonalDetails from '../../components/ProfileDetails';

// create a component
const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <PersonalDetails />
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
export default ProfilePage;
