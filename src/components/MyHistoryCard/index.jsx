import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './index.style';

const MyHistoryCard = ({ donation }) => {
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
