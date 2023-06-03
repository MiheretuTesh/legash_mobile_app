import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PersonalDetails from '../../components/ProfileDetails';
import { styles } from './index.style';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
const ProfileScreenDrawer = ({ navigation }) => {
  const handleHistoryNavigate = () => {
    navigation.navigate('HistoryTab');
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ paddingVertical: 20, paddingHorizontal: 25 }}>
            <CloseIcon name="closecircleo" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <PersonalDetails handleHistoryNavigate={handleHistoryNavigate} />
    </View>
  );
};

//make this component available to the app
export default ProfileScreenDrawer;
