import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from '../pages/HomeScreen';
import DetailsScreen from '../pages/DetailsScreen';
// import Filter from '../pages/Home/Filter';

import HistoryScreen from '../pages/HistoryScreen';
import HistoryDetailsPage from '../pages/HistoryDetailsScreen';
import MyHistoryScreen from '../pages/MyHistoryScreen';
import LoginScreen from '../pages/LoginScreen';
import SavedScreen from '../pages/SavedScreen';
import ProfileEditScreen from '../pages/ProfileEditScreen';
import ProfileScreen from '../pages/ProfileScreen';
import RegisterScreen from '../pages/RegisterScreen';
import ChapaCheckoutScreen from '../components/ChapaWebView';
import YegnaCheckoutScreen from '../components/YegnaWebView';

//Landing Pages
import HistoryScreenLanding from '../pages/HistoryScreenLanding';
import SavedScreenLanding from '../pages/SavedScreenLanding';
import ProfileScreenLanding from '../pages/ProfileScreenLanding';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailsScreen} />
      <Stack.Screen name="ChapaPaymentScreen" component={ChapaCheckoutScreen} />
      <Stack.Screen name="YegnaPaymentScreen" component={YegnaCheckoutScreen} />
    </Stack.Navigator>
  );
};

export const AuthHistoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
      <Stack.Screen
        name="HistoryDetailsScreen"
        component={HistoryDetailsPage}
      />
      <Stack.Screen name="MyHistoryScreen" component={MyHistoryScreen} />
    </Stack.Navigator>
  );
};

export const HistoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen name="HistoryScreen" component={HistoryScreenLanding} />
      <Stack.Screen
        name="HistoryDetailsScreen"
        component={HistoryDetailsPage}
      />
    </Stack.Navigator>
  );
};

export const AuthProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={ProfileEditScreen} />
    </Stack.Navigator>
  );
};

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreenLanding} />
    </Stack.Navigator>
  );
};

export const AuthSavedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen name="SavedScreen" component={SavedScreen} />
    </Stack.Navigator>
  );
};

export const SavedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen name="SavedScreen" component={SavedScreenLanding} />
    </Stack.Navigator>
  );
};

export const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      {/* <Stack.Screen name="ForgetPasswordScreen" component={ForgetPassword} /> */}
    </Stack.Navigator>
  );
};

export const RegisterStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
