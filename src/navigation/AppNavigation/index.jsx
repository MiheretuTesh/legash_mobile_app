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

// Screens for Tab navigation
const Dashboard = React.lazy(() => import('../../components/Dashboard'));


const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
};

export default AppNavigation;
