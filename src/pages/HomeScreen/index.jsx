import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Keyboard, TextInput } from 'react-native';
import HistoryCard from '../../components/HistoryCard';
import { styles } from './index.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
// import {useGetCampaigns} from '../../hooks/useGetCampaigns';
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from 'react-native-vector-icons/Feather';
import { getCampaigns } from '../../features/campaign/campaign.Slice';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import { COLORS } from '../../constants/colors';
const HomePage = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampaigns());
  }, []);

  const {
    campaignsData,
    campaignsDataLoading,
    campaignsDataSuccess,
    campaignsDataFailed,
    campaignsDataError,
  } = useSelector((state) => state.campaign);

  // const {dataCampaigns, isLoadingCampaigns, isSuccess} = useGetCampaigns({});

  const imgs = [
    'https://images.unsplash.com/photo-1548102245-c79dbcfa9f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80',
    'https://images.unsplash.com/photo-1588349482083-036b31c6eca3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1537280788811-0cc64e2c028b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1606166187734-a4cb74079037?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  ];

  const titles = [
    'Help Chala fight Leukemia',
    'Help Abebe fight Leukemia',
    'Help Aberash fight Leukemia',
    'Help Eyosias fight Leukemia',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: '100%', paddingHorizontal: 20 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
            Keyboard.dismiss();
          }}
        >
          <View style={{ paddingVertical: 20 }}>
            <MenuIcon name="menu" size={20} color="black" />
          </View>
        </TouchableOpacity>

        <View
          style={{
            marginHorizontal: 10,
            borderWidth: 1,
            borderRadius: 30,
            marginBottom: 10,
          }}
        >
          <TextInput
            // onChangeText={onChangeNumber}
            // value={number}
            // keyboardType="numeric"
            placeholder="Search"
            placeholderTextColor={'black'}
            style={{ paddingHorizontal: 20, color: 'black' }}
          />
        </View>
        <ScrollView
          keyboardDismissMode="on-drag"
          onScrollBeginDrag={() => Keyboard.dismiss()}
        >
          <View>
            {campaignsDataSuccess ? (
              campaignsData?.campaigns.length !== 0 ? (
                campaignsData?.campaigns.map((patient, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('DetailScreen', {
                        patientData: patient,
                      });
                    }}
                    key={index}
                    style={{ marginVertical: 10 }}
                  >
                    <HistoryCard
                      patient={patient}
                      img={imgs[index]}
                      title={titles[index]}
                    />
                  </TouchableOpacity>
                ))
              ) : (
                <Text>No Campaign</Text>
              )
            ) : (
              <LoadingComponent size={'large'} loadingColor="#8D8D8D" />
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default HomePage;
