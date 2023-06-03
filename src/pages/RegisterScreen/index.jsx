import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import RegisterForm from '../../components/RegisterForm';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './index.style';
import { useRegister } from '../../hooks/useRegister';

const RegisterPage = ({ navigation }) => {
  const onRegisterSuccess = (values) => {
    // navigate(`/verify-email/${values.email}`);
  };

  const onRegisterError = (values) => {};

  const { data, error, mutate, isLoading, isSuccess, isError } = useRegister({
    onSuccess: (_x, values) => onRegisterSuccess(values),
    onError: (error) => onRegisterError(error),
  });

  const handleFormSubmit = (formData) => {
    console.log(formData);
    mutate(formData);
  };

  useEffect(() => {
    console.log(data, 'data data');
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
