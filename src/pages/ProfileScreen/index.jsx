import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PersonalDetails from '../../components/ProfileDetails';
import {styles} from './index.style';
import MenuIcon from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';

// create a component
const ProfilePage = ({navigation}) => {
  const handleHistoryNavigate = () => {
    navigation.navigate('HistoryTab');
  };

  const handleProfileEditNavigation = () => {
    navigation.navigate('ProfileEditScreen');
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View style={{paddingVertical: 20, paddingHorizontal: 25}}>
            <MenuIcon name="menu" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <PersonalDetails
        handleHistoryNavigate={handleHistoryNavigate}
        handleProfileEditNavigation={handleProfileEditNavigation}
      />
    </View>
  );
};

//make this component available to the app
export default ProfilePage;
