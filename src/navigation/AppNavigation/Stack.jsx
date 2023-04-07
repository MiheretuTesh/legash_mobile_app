import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const LoginPage = React.lazy(() => import('../../pages/LoginScreen'));
const RegisterPage = React.lazy(() => import('../../pages/RegisterScreen'));

const ProfilePage = React.lazy(() => import('../../pages/ProfileScreen'));
const HistoryPage = React.lazy(() => import('../../pages/HistoryScreen'));
const HomePage = React.lazy(() => import('../../pages/HomeScreen'));
const DetailsPage = React.lazy(() => import('../../pages/DetailsScreen'));

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
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsPage}
        options={() => {
          return {
            tabBarVisible: false,
          };
        }}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="DetailsScreen"
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen
        name="DetailsScreen"
        component={HomePage}
        options={() => {
          return {
            tabBarVisible: false,
          };
        }}
      />
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
      <Stack.Screen name="HistoryScreen" component={HistoryPage} />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsPage}
        options={() => {
          return {
            tabBarVisible: false,
          };
        }}
      />
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
      <Stack.Screen name="ProfileScreen" component={ProfilePage} />
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
      <Stack.Screen name="LoginScreen" component={LoginPage} />
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
      <Stack.Screen name="RegisterScreen" component={RegisterPage} />
    </Stack.Navigator>
  );
};

export {
  HomeStack,
  HomeScreenStack,
  HistoryScreenStack,
  ProfileScreenStack,
  LoginStack,
  RegisterStack,
};
