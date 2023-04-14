//import liraries
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './index.style';
import SubmittedButton from '../SubmitButton';

// create a component
const RegisterForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.txtHeroLogin}>
        <Text style={styles.heroTtx}>Donor Sign Up</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.labelTxt}>Name</Text>
          <View style={styles.inputFieldContainer}>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              // keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labelTxt}>Phone Number</Text>
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
          <Text style={styles.labelTxt}>Email</Text>
          <View style={styles.inputFieldContainer}>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              // keyboardType="numeric"
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
              // keyboardType="numeric"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterForm;
