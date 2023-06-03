import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Details from '../../components/Details';
import { styles } from './index.style';
import { SafeAreaView } from 'react-native-safe-area-context';

// create a component
const DetailsPage = ({ navigation, route }) => {
  const { patientData } = route.params;

  const handleNavigate = (payment) => {
    console.log('Hello');
    if (payment === 'chapa') {
      navigation.navigate('ChapaPaymentScreen');
    }
    if (payment === 'Yegna') {
      navigation.navigate('YegnaPaymentScreen');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Details patientData={patientData} handleNavigate={handleNavigate} />
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default DetailsPage;
