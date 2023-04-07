import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  HomeScreenStack,
  HistoryScreenStack,
  ProfileScreenStack,
  LoginStack,
  RegisterStack,
} from './Stack';

import AppDrawer from './Drawer.Navigation';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
};

export default AppNavigation;
