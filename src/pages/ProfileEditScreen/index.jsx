//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProfileEdit from '../../components/ProfileEdit';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './index.style';
import PersonIcon from 'react-native-vector-icons/Fontisto';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../features/user/user.Slice';

// create a component
const ProfileEditPage = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  const { userData, userDataLoading, userDataSuccess, userDataFailed } =
    useSelector((state) => state.user);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingVertical: 15,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CloseIcon name="close" size={20} color={'white'} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <ProfileEdit userDataLoading={userDataSuccess} userData={userData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileEditPage;
