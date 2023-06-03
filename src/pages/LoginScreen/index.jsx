import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import LoginForm from '../../components/LoginForm';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './index.style';
import { useLogin } from '../../hooks/useLogin';
import { saveToken } from '../../utils/token.get.set';
import { loginUser } from '../../features/auth/auth.Slice';
import { useSelector, useDispatch } from 'react-redux';
import firebase from '../../utils/firebaseConfig';

const LoginPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');

  const onLoginSuccess = (values) => {
    saveToken(token);
    // navigate(`/verify-email/${values.email}`);
  };

  const {
    isLoginFetching,
    isLoginSuccess,
    loginData,
    isLoginError,
    loginErrorMessage,
    token: loginToken,
  } = useSelector((state) => state.auth);

  const onLoginError = (values) => {};

  const { data, error, mutate, isLoading, isSuccess, isError } = useLogin({
    onSuccess: (_x, values) => onLoginSuccess(values),
    onError: (error) => onLoginError(error),
  });

  // const handleFormSubmit = (formData) => {
  //   const { email, password } = formData; // Extract email and password from formData
  //   console.log(formData);
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then((userCredential) => {
  //       // Sign-in successful
  //       console.log('User signed in successfully!', userCredential);
  //     })
  //     .catch((error) => {
  //       // Handle sign-in errors
  //       console.log('Sign-in error:', error);
  //     });
  //   // dispatch(loginUser(formData));
  // };
  const handleFormSubmit = async (formData) => {
    const { email, password } = formData;
    console.log(formData);
    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      // Sign-in successful
      console.log('User signed in successfully!', userCredential.user.uid);

      dispatch(loginUser(userCredential.user.uid));
    } catch (error) {
      // Handle sign-in errors
      console.log('Sign-in error:', error);
    }
  };

  useEffect(() => {
    if (isLoginSuccess) {
      // saveToken(data?.data.token.authToken);
      navigation.navigate('Home');
    }
  }, [loginData, isLoginSuccess]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.upperContainer}>
            <Text style={styles.upperHeroTxt}>Legash</Text>
          </View>
          <LoginForm
            handleFormSubmit={handleFormSubmit}
            isLoading={isLoginFetching}
            isSuccess={isLoginSuccess}
            isError={isLoginError}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;
