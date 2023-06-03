import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const LoginForm = React.lazy(() => import('../../components/LoginForm'));
const RegisterForm = React.lazy(() => import('../../components/RegisterForm'));

const AuthNavigation = () => {
  return (
    <View>
      <Text>AuthNavigation</Text>
    </View>
  );
};

export default AuthNavigation;
