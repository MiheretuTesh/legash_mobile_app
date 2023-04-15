import React, {Component} from 'react';
import {View, Text, Image, ProgressBarAndroid} from 'react-native';
import {styles} from './index.style';
import Slider from '@react-native-community/slider';
import COLORS from '../../constants/colors';

const HistoryCard = ({patient}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: patient.imgUri,
        }}
        style={styles.historyCardImg}
      />
      <View style={styles.historyCardContent}>
        <Text style={styles.historyCardHeroTxt}>{patient.title}</Text>
        <View style={styles.progressContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fff',
              width: '90%',
              height: 10,
            }}>
            <View
              style={{
                width: `${patient.progressPercent}%`,
                height: 5,
                backgroundColor: COLORS.mainColor,
              }}></View>
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: COLORS.whiteColor,
                borderRadius: 10,
                borderColor: COLORS.redColor,
                borderWidth: 2,
                padding: 5,
              }}></View>
            <View
              style={{width: '5%', height: 5, backgroundColor: '#fff'}}></View>
          </View>
          <View>
            <Text style={{color: '#333'}}>{patient.progressPercent}%</Text>
          </View>
        </View>
        <View style={styles.cardFooter}>
          <View>
            <Text style={styles.cardFooterTitle}>Goal</Text>
            <Text style={styles.cardFooterAmountActive}>
              {patient.goal} birr
            </Text>
          </View>
          <View style={styles.separator}></View>
          <View>
            <Text style={styles.cardFooterTitle}>Raised</Text>
            <Text style={styles.cardFooterAmountActive}>
              {patient.raised} birr
            </Text>
          </View>
          <View style={styles.separator}></View>
          <View>
            <Text style={styles.cardFooterTitle}>To Go</Text>
            <Text style={styles.cardFooterAmountInActive}>
              {patient.togo} birr
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HistoryCard;
