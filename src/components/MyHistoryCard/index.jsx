import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './index.style';

const MyHistoryCard = ({ donation }) => {
  console.log(donation, 'donation donation donation');

  const temp = {
    __v: 0,
    _id: '648af88aca3c81a87cefbd7e',
    amount: 499,
    campaignId: '648a2b5cc5d5d0d527fbb801',
    createdAt: '2023-06-15T11:39:54.485Z',
    donorId: {
      __v: 0,
      _id: '648ae493ca3c81a87cefb514',
      accountStatus: 'Active',
      am_et: {
        address: [Object],
        bankAccounts: [Array],
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
  return (
    <View style={styles.container}>
      <View style={styles.historyCardContent}>
        <Text style={styles.historyCardHeroTxt}>
          {donation?.title ? donation?.title : 'Help Sally Get Better'}
        </Text>
        <View style={styles.cardFooter}>
          <View>
            <Text style={styles.cardFooterTitle}>Donated Amount</Text>
          </View>
          <View style={styles.separator}></View>
          <View>
            <Text style={styles.cardFooterAmountActive}>
              {donation?.amount} birr
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyHistoryCard;
