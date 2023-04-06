import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import RegisterForm from '../../components/RegisterForm';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './index.style';
// create a component
const RegisterPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.upperContainer}>
            <Text style={styles.upperHeroTxt}>Lene</Text>
          </View>
          <RegisterForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default RegisterPage;
