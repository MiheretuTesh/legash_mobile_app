import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
// import { AuthDrawer, AppDrawer } from './Drawer.Navigation';
import { AppDrawer } from './Drawer.Navigation';
import { AuthDrawer } from './Drawer.Navigation';

const getToken = async () => {
  const token = await AsyncStorage.getItem('token');
  return token;
};

const AppNavigation = ({ token }) => {
  // const {isLoading, error, token} = useQuery('erer', getToken);
  const { isLoginSuccess } = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      {token || isLoginSuccess ? (
        <AuthDrawer token={token} />
      ) : (
        <AppDrawer token={token} isLoginSuccess={isLoginSuccess} />
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
