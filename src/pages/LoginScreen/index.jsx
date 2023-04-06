import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import LoginForm from '../../components/LoginForm';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './index.style';

// create a component
const LoginPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.upperContainer}>
            <Text style={styles.upperHeroTxt}>Lene</Text>
          </View>
          <LoginForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default LoginPage;
