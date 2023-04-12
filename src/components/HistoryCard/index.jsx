import React, { Component } from 'react';
import { View, Text, Image, ProgressBarAndroid } from 'react-native';
import { styles } from './index.style';
import Slider from '@react-native-community/slider';
import COLORS from '../../constants/colors';

const HistoryCard = ({ patient, title }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: patient.coverImage ? patient.coverImage : '',
        }}
        style={styles.historyCardImg}
      />
      <View style={styles.historyCardContent}>
        <Text style={styles.historyCardHeroTxt}>{patient.campaignTitle}</Text>
        <View style={styles.progressContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fff',
              width: '90%',
              height: 10,
            }}
          >
            <View
              style={{
                width: `${Math.round(
                  (patient.currentFundedAmount / patient.targetFunding) * 100
                )}%`,
                height: 5,
                backgroundColor: COLORS.mainColor,
              }}
            ></View>
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: COLORS.whiteColor,
                borderRadius: 10,
                borderColor: COLORS.redColor,
                borderWidth: 2,
                padding: 5,
              }}
            ></View>
            <View
              style={{ width: '5%', height: 5, backgroundColor: '#fff' }}
            ></View>
          </View>
          <View>
            <Text style={{ color: '#333' }}>
              {Math.round(
                (patient.currentFundedAmount / patient.targetFunding) * 100
              )}
              %
            </Text>
          </View>
        </View>
        <View style={styles.cardFooter}>
          <View>
            <Text style={styles.cardFooterTitle}>Target</Text>
            <Text style={styles.cardFooterAmountActive}>
              {patient.targetFunding.toLocaleString('en-US')}
            </Text>
          </View>
          <View style={styles.separator}></View>
          <View>
            <Text style={styles.cardFooterTitle}>Raised</Text>
            <Text style={styles.cardFooterAmountActive}>
              {patient.currentFundedAmount?.toLocaleString('en-US')} birr
            </Text>
          </View>
          <View style={styles.separator}></View>
          <View>
            <Text style={styles.cardFooterTitle}>To Go</Text>
            <Text style={styles.cardFooterAmountInActive}>
              {(
                patient.targetFunding - patient.currentFundedAmount
              ).toLocaleString('en-US')}
              birr
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HistoryCard;
