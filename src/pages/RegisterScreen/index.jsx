import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
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
              formData.firebaseUserId = user.uid;

              mutate(formData);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;

              console.log(errorCode, errorMessage);
            });
        });
      console.log('User signed in successfully!', userCredential.user.uid);

      // dispatch(loginUser(userCredential.user.uid));
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
