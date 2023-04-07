//import liraries
import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './index.style';
import {SafeAreaView} from 'react-native-safe-area-context';

import PersonIcon from 'react-native-vector-icons/Fontisto';

const PersonalDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.upperContainer}>
          <View
            style={{
              width: '60%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View>
              <PersonIcon size={20} name="person" color="white" />
            </View>
            <View>
              <PersonIcon size={50} name="person" color="white" />
            </View>
            <View>
              <PersonIcon size={20} name="person" color="white" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalDetails;
