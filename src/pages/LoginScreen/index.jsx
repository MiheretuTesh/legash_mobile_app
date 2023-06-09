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
  const [emailNotVerified, setEmailNotVerified] = useState(false);

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

  const handleFormSubmit = async (formData) => {
    const { email, password } = formData;
    console.log(formData);
    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      // Sign-in successful

      if (!userCredential?.user.emailVerified) {
        console.log("User not registered or Didn't verify email");
        setEmailNotVerified(true);
      } else {
        dispatch(loginUser(userCredential.user.uid));
      }
    } catch (error) {
      console.log('Sign-in error:', error);
    }
  };

  useEffect(() => {
    if (isLoginSuccess) {
      // saveToken(data?.data.token.authToken);
      navigation.navigate('Home');
      setEmailNotVerified(false);
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
            emailNotVerified={emailNotVerified}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;
