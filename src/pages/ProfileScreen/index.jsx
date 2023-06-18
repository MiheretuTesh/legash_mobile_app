import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PersonalDetails from '../../components/ProfileDetails';
import { styles } from './index.style';
import MenuIcon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { logoutUser } from '../../features/auth/auth.Slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// create a component
const ProfilePage = ({ navigation }) => {
  const dispatch = useDispatch();
  // const navigation = useNavigation();

  const { isLogoutFailed, isLogoutSuccess, isLogoutFetching } = useSelector(
    (state) => state.auth
  );

  const handleHistoryNavigate = (str) => {
    if (str === 'history') {
      navigation.navigate('HistoryTab');
    }
    if (str === 'home') {
      navigation.navigate('HomeTab');
    }
  };

  const handleProfileEditNavigation = () => {
    navigation.navigate('EditProfileScreen');
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigation.navigate('HomeTab');
  };

  useEffect(() => {
    if (isLogoutSuccess === true) {
      navigation.navigate('Home');
    }
  }, [isLogoutSuccess]);
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
