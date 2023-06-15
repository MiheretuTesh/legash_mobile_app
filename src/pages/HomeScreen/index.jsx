import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Keyboard, TextInput } from 'react-native';
import HistoryCard from '../../components/HistoryCard';
import { styles } from './index.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from 'react-native-vector-icons/Feather';
import { getCampaigns } from '../../features/campaign/campaign.Slice';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import { COLORS } from '../../constants/colors';

const HomePage = ({ navigation }) => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);

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

  useEffect(() => {
    if (campaignsDataSuccess) {
      const filtered = campaignsData.filter((campaign) =>
        campaign.campaignTitle.includes(searchText)
      );
      setFilteredCampaigns(filtered);
    }
  }, [campaignsData, searchText]);

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
            placeholder="Search"
            placeholderTextColor={'black'}
            style={{ paddingHorizontal: 20, color: 'black' }}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <ScrollView
          keyboardDismissMode="on-drag"
          onScrollBeginDrag={() => Keyboard.dismiss()}
        >
          <View>
            {campaignsDataSuccess ? (
              filteredCampaigns?.length !== 0 ? (
                filteredCampaigns?.map((campaign, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('DetailScreen', {
                        campaignsData: campaign,
                      });
                    }}
                    key={index}
                    style={{ marginVertical: 10 }}
                  >
                    <HistoryCard campaign={campaign} />
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

export default HomePage;
