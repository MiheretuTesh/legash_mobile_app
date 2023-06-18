import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from './index.style';
import moment from 'moment';
import COLORS from '../../constants/colors';

const MyHistoryCard = ({ donation, title }) => {
  console.log(donation, 'donation donation donation');
  return (
    <View style={styles.container}>
      <View style={styles.historyCardContent}>
        <Text style={styles.historyCardHeroTxt}>
          {title ? title : 'Donation History'}
        </Text>
        <Text style={{ fontSize: 12, color: COLORS.txtColor }}>
          {moment(donation.createdAt).format('MMMM Do YYYY')}
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
