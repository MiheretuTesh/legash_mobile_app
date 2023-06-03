import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Details from '../../components/Details';
import { styles } from './index.style';
import { SafeAreaView } from 'react-native-safe-area-context';

// create a component
const DetailsPage = ({ navigation, route }) => {
  const { patientData } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Details patientData={patientData} />
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default DetailsPage;
