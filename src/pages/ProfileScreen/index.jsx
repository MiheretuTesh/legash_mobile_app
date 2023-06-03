import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PersonalDetails from '../../components/ProfileDetails';
import { styles } from './index.style';
import MenuIcon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { logoutUser } from '../../features/auth/auth.Slice';
import { useDispatch } from 'react-redux';

// create a component
const ProfilePage = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleHistoryNavigate = () => {
    navigation.navigate('HistoryTab');
  };

  const handleProfileEditNavigation = () => {
    navigation.navigate('EditProfileScreen');
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigation.navigate('HomeTab');
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View style={{ paddingVertical: 20, paddingHorizontal: 25 }}>
            <MenuIcon name="menu" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <PersonalDetails
        handleHistoryNavigate={handleHistoryNavigate}
        handleProfileEditNavigation={handleProfileEditNavigation}
        handleLogout={handleLogout}
      />
    </View>
  );
};

//make this component available to the app
export default ProfilePage;
