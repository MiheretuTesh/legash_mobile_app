import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const LoginPage = React.lazy(() => import('../../pages/LoginScreen'));
const RegisterPage = React.lazy(() => import('../../pages/RegisterScreen'));

const ProfilePage = React.lazy(() => import('../../pages/ProfileScreen'));
const ProfileScreenDrawer = React.lazy(() =>
  import('../../pages/ProfileScreenDrawer'),
);
const HistoryPage = React.lazy(() => import('../../pages/HistoryScreen'));
const DetailsPage = React.lazy(() => import('../../pages/DetailsScreen'));
const MyHistoryPage = React.lazy(() => import('../../pages/MyHistoryScreen'));
const ProfileEditPage = React.lazy(() =>
  import('../../pages/ProfileEditScreen'),
);

const Stack = createStackNavigator();

const HistoryScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HistoryScreen"
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="HistoryScreen" component={HistoryPage} />
      <Stack.Screen
        name="Details"
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

const MyHistoryScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyHistory"
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="MyHistory" component={MyHistoryPage} />
    </Stack.Navigator>
  );
};

const ProfileScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="ProfileScreen" component={ProfilePage} />
      <Stack.Screen name="ProfileEditScreen" component={ProfileEditPage} />
    </Stack.Navigator>
  );
};

const ProfileScreenStackDrawer = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreenDrawer"
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen
        name="ProfileScreenDrawer"
        component={ProfileScreenDrawer}
      />
    </Stack.Navigator>
  );
};

const LoginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
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
      initialRouteName="RegisterScreen"
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
  HistoryScreenStack,
  ProfileScreenStack,
  LoginStack,
  RegisterStack,
  MyHistoryScreenStack,
  ProfileScreenStackDrawer,
};
