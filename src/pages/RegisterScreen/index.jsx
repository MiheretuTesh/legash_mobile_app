import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import RegisterForm from '../../components/RegisterForm';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './index.style';
import { useRegister } from '../../hooks/useRegister';
import firebase from '../../utils/firebaseConfig';
const RegisterPage = ({ navigation }) => {
  const onRegisterSuccess = (values) => {
    // navigate(`/verify-email/${values.email}`);
  };

  const onRegisterError = (values) => {};

  const { data, error, mutate, isLoading, isSuccess, isError } = useRegister({
    onSuccess: (_x, values) => onRegisterSuccess(values),
    onError: (error) => onRegisterError(error),
  });

  const sendEmailVerification = (user) => {
    user
      .sendEmailVerification()
      .then(() => {
        // Email verification sent successfully
      })
      .catch((error) => {
        // Handle any errors that occur while sending the email verification
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle the error appropriately
      });
  };

  const user = {
    _redirectEventId: undefined,
    apiKey: 'AIzaSyAfZZdnwDKF4khnoWkGiDtt90rVXUR8TEY',
    appName: '[DEFAULT]',
    createdAt: '1686153924448',
    displayName: undefined,
    email: 'miheretutd@gmail.com',
    emailVerified: false,
    isAnonymous: false,
    lastLoginAt: '1686153924448',
    phoneNumber: undefined,
    photoURL: undefined,
    providerData: [[Object]],
    stsTokenManager: {
      accessToken:
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IjU0NWUyNDZjNTEwNmExMGQ2MzFiMTA0M2E3MWJiNTllNWJhMGM5NGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbGVnYXNoZnVuZC01YTIwYiIsImF1ZCI6ImxlZ2FzaGZ1bmQtNWEyMGIiLCJhdXRoX3RpbWUiOjE2ODYxNTM5MjQsInVzZXJfaWQiOiIyTnBpVGVmNUgzZ002WFhJZnhPUEVuQzJ1RGUyIiwic3ViIjoiMk5waVRlZjVIM2dNNlhYSWZ4T1BFbkMydURlMiIsImlhdCI6MTY4NjE1MzkyNCwiZXhwIjoxNjg2MTU3NTI0LCJlbWFpbCI6Im1paGVyZXR1dGRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1paGVyZXR1dGRAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Lfqian-6DtfFiKo9hrR0xkj_Ns0V0DAolI1Pei4C7uqAKsjnABoseV-6ZZwZb9iLxksN1Es5ykbfhO4caWtO2RSfLR0MdjIt3soP4bFlDlwqhBS1_ImUceuh4Qr2zUpFBOUX3roTc1WjJR5aNiWQtoGpWG4ZuGfJOjiYU8I-dvDryw6YJf1B3cWC73H0RCjQ1SEPaeHQZ0_lWR9j0dzr7Cx2L66U0kw2T46XOPg7cuRYOT1S-DRtk4Q-OuJksZFkRP64Q_UmtUj7O-fqoKJi3w30nPEuiShTh3hUy7PaowiGKWEj02JN8K74cyP1TwXlWFVqL2oIVnBxecmO4fn4lA',
      expirationTime: 1686157525005,
      refreshToken:
        'APZUo0SNlN5DqlYfWm3TIH4obyRZinaKYP_CNFCilebEwKb4ZbYxF4EqMM1Ig4aZm3yEpAubyiDKX_PyNhUI9OjKaU77VoU7g1WaQsJ-WxHwPpsH0nmTa4NYDlMI-HOq9ZY-qPOT-XU3RNqxRsfInbpk8mlON0uneVnC5Fwt6MGEwzZu7MQaQSaFAuGEpeXD_75vn_o6hSWBtTVB0so0Q0pByCy8XeRY0A',
    },
    tenantId: undefined,
    uid: '2NpiTef5H3gM6XXIfxOPEnC2uDe2',
  };

  const handleFormSubmit = async (formData) => {
    const { email, password } = formData;

    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential?.user;

          user
            .sendEmailVerification()
            .then(() => {
              console.log('Email Verification send Successfully');
              mutate(formData);
            })
            .catch((error) => {
              // Handle any errors that occur while sending the email verification
              const errorCode = error.code;
              const errorMessage = error.message;

              console.log(errorCode, errorMessage);
              // Handle the error appropriately
            });

          formData.firebaseUserId = user.uid;

          console.log(formData, 'formData formData formData');
        });
      // Sign-in successful
      console.log('User signed in successfully!', userCredential.user.uid);

      dispatch(loginUser(userCredential.user.uid));
    } catch (error) {
      // Handle sign-in errors
      console.log('Sign-in error:', error);
    }

    // console.log(formData);
    //
  };

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate('Login');
    }
  }, [data, isSuccess]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.upperContainer}>
            <Text style={styles.upperHeroTxt}>Legash</Text>
          </View>
          <RegisterForm
            handleFormSubmit={handleFormSubmit}
            isLoading={isLoading}
            isSuccess={isSuccess}
            isError={isError}
          />
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{paddingHorizontal: 50}}>
            <SubmittedButton
              btnTitle={'Sin Up'}
              handleFormSubmit={handleFormSubmit}
            />
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default RegisterPage;
