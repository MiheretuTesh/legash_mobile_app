import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import LoginForm from '../../components/LoginForm';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './index.style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SubmittedButton from '../../components/SubmitButton';

// create a component
const LoginPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.upperContainer}>
            <Text style={styles.upperHeroTxt}>Legash</Text>
          </View>
          <LoginForm />
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{paddingHorizontal: 50}}>
            <SubmittedButton btnTitle={'Sin Up'} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default LoginPage;
