import React, {Component} from 'react';
import {View, Text, Image, ProgressBarAndroid} from 'react-native';
import {styles} from './index.style';
import Slider from '@react-native-community/slider';

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
          <ProgressBarAndroid
            styleAttr="Horizontal"
            progress={20}
            indeterminate={false}
            style={styles.progressView}
          />
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
