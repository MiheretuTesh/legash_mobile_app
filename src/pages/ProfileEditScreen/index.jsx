//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ProfileEdit from '../../components/ProfileEdit';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './index.style';
import PersonIcon from 'react-native-vector-icons/Fontisto';
import {TouchableOpacity} from 'react-native-gesture-handler';

import CloseIcon from 'react-native-vector-icons/AntDesign';

// create a component
const ProfileEditPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingVertical: 15,
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CloseIcon name="close" size={20} color={'white'} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <ProfileEdit />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileEditPage;
