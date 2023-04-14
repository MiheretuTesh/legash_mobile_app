import React, {Component} from 'react';
import {View, Text, Image, ProgressBarAndroid} from 'react-native';
import {styles} from './index.style';
import Slider from '@react-native-community/slider';

const MyHistoryCard = ({patient}) => {
  return (
    <View style={styles.container}>
      <View style={styles.historyCardContent}>
        <Text style={styles.historyCardHeroTxt}>{patient.title}</Text>
        <View style={styles.cardFooter}>
          <View>
            <Text style={styles.cardFooterTitle}>Donated Amount</Text>
          </View>
          <View style={styles.separator}></View>
          <View>
            <Text style={styles.cardFooterAmountActive}>
              {patient.raised} birr
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyHistoryCard;
