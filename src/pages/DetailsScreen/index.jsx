import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import Details from '../../components/Details';
import { styles } from './index.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getCurrentUser } from '../../features/auth/auth.Slice';
import { useDispatch, useSelector } from 'react-redux';

const DetailsPage = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { campaignsData } = route.params;

  // const {userData}

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  const handleNavigate = (payment) => {
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Details
          campaignsData={campaignsData}
          handleNavigate={handleNavigate}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsPage;
