import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToken = (token: string) => {
  AsyncStorage.setItem('token', token)
    .then(() => {
      console.log('Token saved to AsyncStorage');
    })
    .catch((error) => {
      console.log('Error saving token to AsyncStorage:', error);
    });
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
    // Continue with token handling or processing
  } catch (error) {
    console.log('Error retrieving token:', error);
  }
};

export const logout = async () => {
  try {
    await AsyncStorage.removeItem('token');
    console.log('Successfully token cleared');
  } catch (error) {
    console.log('Error while logging out:', error);
  }
};
