import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './index.style';
import LandingDetails from '../../components/LandingDetails';
import { SafeAreaView } from 'react-native-safe-area-context';

// create a component
const LandingDetailsPage = ({ navigation, route }) => {
  const { patientData } = route.params;

  const handleNavigate = (payment) => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <LandingDetails
          patientData={patientData}
          handleNavigate={handleNavigate}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default LandingDetailsPage;
