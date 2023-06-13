import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import Details from '../../components/Details';
import { styles } from './index.style';
import { SafeAreaView } from 'react-native-safe-area-context';

const DetailsPage = ({ navigation, route }) => {
  const { campaignsData } = route.params;

  const handleNavigate = (payment) => {
    console.log('Hello');
    if (payment === 'chapa') {
      navigation.navigate('ChapaPaymentScreen', {
        campaignData: campaignsData,
      });
    }
    if (payment === 'Yegna') {
      navigation.navigate('YegnaPaymentScreen');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Details
          campaignsData={campaignsData}
          handleNavigate={handleNavigate}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsPage;
