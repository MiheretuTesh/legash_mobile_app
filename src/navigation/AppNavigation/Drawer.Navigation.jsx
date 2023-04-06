import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {Component} from 'react';
import HomeScreen from './Tab.Navigation';
import CustomDrawer from '../../components/CustomDrawer';
import {Button, View, Text} from 'react-native';
import {
  HomeScreenStack,
  HistoryScreenStack,
  ProfileScreenStack,
  LoginStack,
  RegisterStack,
} from './Stack';
import COLORS from '../../constants/colors';

// create a component
const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          width: 290,
        },
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.mainColor,
        drawerActiveTintColor: COLORS.whiteColor,
        drawerInactiveTintColor: COLORS.txtColor,
        drawerLabelStyle: {
          //   marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreenStack} />
      <Drawer.Screen name="Login" component={LoginStack} />
      <Drawer.Screen name="Register" component={RegisterStack} />
    </Drawer.Navigator>
  );
};

//make this component available to the app
export default AppDrawer;
