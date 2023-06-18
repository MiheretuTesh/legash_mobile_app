import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './index.style';
import SubmittedButton from '../SubmitButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginForm = ({
  isSuccess,
  handleFormSubmit,
  isLoading,
  isError,
  emailNotVerified,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    const formData = {
      email: email.trim(),
      password: password.trim(),
    };

    try {
      await validationSchema.validate(formData, { abortEarly: false });

      handleFormSubmit(formData);
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     setEmail('');
  //     setPassword('');
  //   }
  // }, [isSuccess]);

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
              name="email"
              style={styles.input}
              value={email}
              onChangeText={(value) => setEmail(value)}
              autoCapitalize="none"
            />
          </View>
          {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
        </View>

        <View>
          <Text style={styles.labelTxt}>Password</Text>
          <View style={styles.inputFieldContainer}>
            <TextInput
              name="password"
              style={styles.input}
              value={password}
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={!showPassword}
            />
          </View>
          {errors.password && (
            <Text style={{ color: 'red' }}>{errors.password}</Text>
          )}
        </View>

        <View
          style={{
            marginVertical: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {emailNotVerified && (
            <Text style={{ color: 'red', fontSize: 12 }}>
              Email is Not Verified.
            </Text>
          )}
        </View>

        <TouchableOpacity
          onPress={() => handleSubmit()}
          // style={{paddingHorizontal: 50}}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SubmittedButton
            btnTitle={'Sin Up'}
            handleFormSubmit={handleFormSubmit}
            isLoading={isLoading}
            isError={isError}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;
