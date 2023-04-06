//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const LoginPage = React.lazy(() => import('../../pages/LoginScreen'));
const RegisterPage = React.lazy(() => import('../../pages/RegisterScreen'));

const ProfilePage = React.lazy(() => import('../../pages/ProfileScreen'));
const HistoryPage = React.lazy(() => import('../../pages/HistoryScreen'));
const HomePage = React.lazy(() => import('../../pages/HomeScreen'));
const DetailsPage = React.lazy(() => import('../../pages/DetailsScreen'));
// Create stack navigator
const Stack = createStackNavigator();

const HomeScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="HomeScreen" component={HomePage} />
      <Stack.Screen name="Details" component={DetailsPage} />
    </Stack.Navigator>
  );
};

const HistoryScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="History" component={HistoryPage} />
      {/* <Stack.Screen name="Register" component={RegisterForm} /> */}
    </Stack.Navigator>
  );
};

const ProfileScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="Profile" component={ProfilePage} />
      {/* <Stack.Screen name="Register" component={ProfileDetailsForm} /> */}
    </Stack.Navigator>
  );
};

const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="Login" component={LoginPage} />
      {/* <Stack.Screen name="Register" component={RegisterForm} /> */}
    </Stack.Navigator>
  );
};

const RegisterStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="Register" component={RegisterPage} />
    </Stack.Navigator>
  );
};

export {
  HomeScreenStack,
  HistoryScreenStack,
  ProfileScreenStack,
  LoginStack,
  RegisterStack,
};
