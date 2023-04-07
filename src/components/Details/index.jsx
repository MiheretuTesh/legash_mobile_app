import React, {useEffect, useRef} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {styles} from './index.style';
import {useNavigation} from '@react-navigation/native';

import CLoseIcon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';

import DonateButton from '../DonateButton';
import DonatePopUp from '../DonatePopUp';

const Details = ({patientData}) => {
  const refRBSheet = useRef();
  const navigation = useNavigation();

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
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CLoseIcon name="close" size={20} color={'black'} />
        </TouchableOpacity>
      </View>
      <View>
        <ImageBackground
          source={{uri: patientData.imgUri}}
          style={styles.backgroundImg}>
          <View style={styles.backgroundImgView}>
            {/* <Text style={styles.text}>Hello World</Text> */}
          </View>
        </ImageBackground>
      </View>

      <View style={{height: 20}}></View>

      <View>
        <Text style={styles.heroTxt}>Campaign Status</Text>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>Total Amount - </Text>
          <Text style={styles.txt}>{patientData.goal} birr</Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>Raised Amount - </Text>
          <Text style={styles.txt}>{patientData.raised} birr</Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>To Go - </Text>
          <Text style={styles.txt}>{patientData.togo} birr</Text>
        </View>
      </View>

      <View style={{height: 20}}></View>

      <View>
        <Text style={styles.heroTxt}>Contact Information</Text>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>Name - </Text>
          <Text style={styles.txt}>{patientData.contactName}</Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>Contact - </Text>
          <Text style={styles.txt}>{patientData.contactPhoneNumber}</Text>
        </View>
      </View>

      <View style={{height: 20}}></View>

      <View>
        <Text style={styles.heroTxt}>Description</Text>
        <Text style={styles.txt}>
          Lorem ipsum dolor sit amet consectetur. Ipsum eu nunc egestas sit
          egestas elit blandit. Consequat amet risus diam sapien.
        </Text>
      </View>
      <View style={{height: 20}}></View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <DonatePopUp refRBSheet={refRBSheet} />
        <TouchableOpacity
          onPress={() => {
            refRBSheet.current.open();
          }}>
          <DonateButton />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
