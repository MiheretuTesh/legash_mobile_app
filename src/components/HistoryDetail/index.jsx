import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { styles } from './index.style';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../constants/colors';

import CloseIcon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

import DonateButton from '../DonateButton';
import DonatePopUp from '../DonatePopUp';

const HistoryDetails = ({ donationData }) => {
  const refRBSheet = useRef();
  const navigation = useNavigation();
  const [imageIndex, setImageIndex] = useState(0);
  // const [backgroundImg, setBackgroundImage] = useState(donationData?.images[0]);

  const imgs = [
    'https://images.unsplash.com/photo-1548102245-c79dbcfa9f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80',
    'https://images.unsplash.com/photo-1588349482083-036b31c6eca3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1537280788811-0cc64e2c028b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1606166187734-a4cb74079037?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  ];

  const temp = {
    __v: 0,
    _id: '648aedbaca3c81a87cefb838',
    amount: 499,
    campaignId: '648a97fb9b932f254f247180',
    createdAt: '2023-06-15T10:53:46.628Z',
    donorId: {
      __v: 0,
      _id: '648ae493ca3c81a87cefb514',
      accountStatus: 'Active',
      am_et: {
        firstName: 'ትግስት',
        gender: 'ወንድ',
        lastName: 'ለማ',
      },
      createdAt: '2023-06-15T10:14:43.803Z',
      dateOfBirth: '2023-06-14T10:13:44.000Z',
      email: 'yakim5775@gmail.com',
      en_us: {
        bankAccounts: [Array],
        firstName: 'Yakim',
        gender: 'Male',
        lastName: 'Miller',
      },
      firebaseUserId: 'PfBMlV0stOT4foTXXV6Qe47keHw1',
      notification: [],
      occupation: {
        _id: '648afd65ca3c81a87cefbebd',
        occupationType: 'Patient',
        workPlaceId: '648ac94a94950b32839332ba',
      },
      phonenumber: '0943216789',
      role: '645e46d74c3d647470f67dfa',
      updatedAt: '2023-06-15T10:14:43.803Z',
    },
    paymentMethod: 'Express Fund',
    transactionType: 'donation',
  };
  7;

  console.log(donationData?.donorId.en_us);

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [navigation]);

  return (
    <View>
      <View
        style={{
          paddingVertical: 15,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CloseIcon name="close" size={20} color={'black'} />
        </TouchableOpacity>
      </View>

      <View style={{ height: 20 }}></View>

      <View>
        <Text style={styles.heroTxt}>Donation History</Text>
        <Text style={styles.heroTxt}>Transaction</Text>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View>
              <View style={styles.txtContainer}>
                <Text
                  style={{
                    color: COLORS.greyColor,
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  Donors Name
                </Text>
                <View
                  style={{
                    height: 40,
                    width: 50,
                  }}
                ></View>
              </View>
              <View style={styles.txtContainer}>
                <Text
                  style={{
                    color: COLORS.greyColor,
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  የለጋሹ ስም
                </Text>
                <View
                  style={{
                    height: 40,
                    width: 50,
                  }}
                ></View>
              </View>
              <View style={styles.txtContainer}>
                <Text
                  style={{
                    color: COLORS.greyColor,
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  Phone Number
                </Text>
                <View
                  style={{
                    height: 40,
                    width: 50,
                  }}
                ></View>
              </View>
              <View style={styles.txtContainer}>
                <Text
                  style={{
                    color: COLORS.greyColor,
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  Email
                </Text>
                <View
                  style={{
                    height: 40,
                    width: 50,
                  }}
                ></View>
              </View>
            </View>
            <View>
              <View style={styles.txtContainer}>
                <Text
                  style={{
                    color: COLORS.greyColor,
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  {`${donationData?.donorId.en_us.firstName} ${donationData?.donorId.en_us.lastName}`}
                </Text>
                <View
                  style={{
                    height: 40,
                    width: 50,
                  }}
                ></View>
              </View>
              <View style={styles.txtContainer}>
                <Text
                  style={{
                    color: COLORS.greyColor,
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  {`${donationData?.donorId.am_et.firstName} ${donationData?.donorId.am_et.lastName}`}
                </Text>
                <View
                  style={{
                    height: 40,
                    width: 50,
                  }}
                ></View>
              </View>
              <View style={styles.txtContainer}>
                <Text
                  style={{
                    color: COLORS.greyColor,
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  {`${donationData?.donorId.phonenumber}`}
                </Text>
                <View
                  style={{
                    height: 40,
                    width: 50,
                  }}
                ></View>
              </View>
              <View style={styles.txtContainer}>
                <Text
                  style={{
                    color: COLORS.greyColor,
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  {`${donationData?.donorId.email}`}
                </Text>
                <View
                  style={{
                    height: 40,
                    width: 50,
                  }}
                ></View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={{ height: 20 }}></View>

      <View>
        <Text style={styles.heroTxt}>Campaigns Details</Text>
        <Text style={styles.heroTxt}>Campaign</Text>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View>
              <View style={styles.txtContainer}>
                <Text
                  style={{
                    color: COLORS.greyColor,
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  Amount
                </Text>
                <View
                  style={{
                    height: 40,
                    width: 50,
                  }}
                ></View>
              </View>
              <View style={styles.txtContainer}>
                <Text
                  style={{
                    color: COLORS.greyColor,
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  Phone Number
                </Text>
                <View
                  style={{
                    height: 40,
                    width: 50,
                  }}
                ></View>
              </View>
              <View style={styles.txtContainer}>
                <Text
                  style={{
                    color: COLORS.greyColor,
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  Email
                </Text>
                <View
                  style={{
                    height: 40,
                    width: 50,
                  }}
                ></View>
              </View>
            </View>
            <View>
              <View style={styles.txtContainer}>
                <Text
                  style={{
                    color: COLORS.greyColor,
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  {`${donationData?.amount} Birr`}
                </Text>
                <View
                  style={{
                    height: 40,
                    width: 50,
                  }}
                ></View>
              </View>
              <View style={styles.txtContainer}>
                <Text
                  style={{
                    color: COLORS.greyColor,
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  {`${donationData?.donorId.am_et.firstName} ${donationData?.donorId.am_et.lastName}`}
                </Text>
                <View
                  style={{
                    height: 40,
                    width: 50,
                  }}
                ></View>
              </View>
              <View style={styles.txtContainer}>
                <Text
                  style={{
                    color: COLORS.greyColor,
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  {`${donationData?.donorId.phonenumber}`}
                </Text>
                <View
                  style={{
                    height: 40,
                    width: 50,
                  }}
                ></View>
              </View>
              <View style={styles.txtContainer}>
                <Text
                  style={{
                    color: COLORS.greyColor,
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  {`${donationData?.donorId.email}`}
                </Text>
                <View
                  style={{
                    height: 40,
                    width: 50,
                  }}
                ></View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={{ height: 20 }}></View>
    </View>
  );
};

export default HistoryDetails;
