import React, {Component} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import HistoryCard from '../../components/HistoryCard';
import {styles} from './index.style';
import Patients from '../../constants/Patients';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

// create a component
const HistoryPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          {Patients.map((patient, index) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DetailsScreen', {patientData: patient});
              }}
              key={index}
              style={{marginVertical: 10}}>
              <HistoryCard patient={patient} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default HistoryPage;
