import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import HistoryDetails from '../../components/HistoryDetail';
import { styles } from './index.style';
import { SafeAreaView } from 'react-native-safe-area-context';

// create a component
const HistoryDetailsPage = ({ navigation, route }) => {
  const { donationData } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HistoryDetails donationData={donationData} />
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default HistoryDetailsPage;
