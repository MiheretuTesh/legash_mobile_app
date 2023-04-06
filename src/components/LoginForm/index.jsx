import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './index.style';
import SubmittedButton from '../SubmitButton';

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.txtHeroLogin}>
        <Text style={styles.heroTtx}>Donor Sign In</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.labelTxt}>Email</Text>
          <View style={styles.inputFieldContainer}>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labelTxt}>Password</Text>
          <View style={styles.inputFieldContainer}>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              keyboardType="numeric"
            />
          </View>
        </View>
        <SubmittedButton btnTitle="Sign In" />
      </View>
    </View>
  );
};

export default LoginForm;
