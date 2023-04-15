import React, {useState, useEffect, useRef} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {styles} from './index.style';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../../constants/colors';

import CloseIcon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';

import DonateButton from '../DonateButton';
import DonatePopUp from '../DonatePopUp';

const Details = ({patientData}) => {
  const refRBSheet = useRef();
  const navigation = useNavigation();
  const [imageIndex, setImageIndex] = useState(0);
  const [backgroundImg, setBackgroundImage] = useState(patientData.images[0]);

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
          <CloseIcon name="close" size={20} color={'black'} />
        </TouchableOpacity>
      </View>
      <View>
        <ImageBackground
          source={{uri: backgroundImg}}
          style={styles.backgroundImg}>
          <View style={styles.backgroundImgView}>
            {patientData.images.map((image, index) => (
              <TouchableOpacity
                onPress={() => {
                  setImageIndex(index);
                  setBackgroundImage(image);
                }}>
                <Image
                  source={{uri: image}}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    borderWidth: imageIndex === index ? 3 : 0,
                    borderColor: imageIndex === index && COLORS.mainColor,
                    elevation: 10,
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ImageBackground>
      </View>

      <View style={{height: 20}}></View>

      <View>
        <Text style={styles.heroTxt}>Campaign Status</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.txtContainer}>
            <Text
              style={{color: COLORS.greyColor, fontWeight: 500, fontSize: 16}}>
              Total Amount
            </Text>
            <Text
              style={{color: COLORS.mainColor, fontWeight: 500, fontSize: 18}}>
              {patientData.goal} birr
            </Text>
          </View>
          <View
            style={{
              height: 40,
              backgroundColor: COLORS.greyColor,
              width: 0.5,
            }}></View>
          <View style={styles.txtContainer}>
            <Text
              style={{color: COLORS.greyColor, fontWeight: 500, fontSize: 16}}>
              Raised Amount
            </Text>
            <Text
              style={{color: COLORS.mainColor, fontWeight: 500, fontSize: 18}}>
              {patientData.raised} birr
            </Text>
          </View>
          <View
            style={{
              height: 40,
              backgroundColor: COLORS.greyColor,
              width: 0.5,
            }}></View>

          <View style={styles.txtContainer}>
            <Text
              style={{color: COLORS.greyColor, fontWeight: 500, fontSize: 16}}>
              To Go
            </Text>
            <Text
              style={{color: COLORS.redColor, fontWeight: 500, fontSize: 18}}>
              {patientData.togo} birr
            </Text>
          </View>
        </View>
      </View>

      <View style={{height: 20}}></View>

      <View>
        <Text style={styles.heroTxt}>Contact Information</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{fontSize: 16, color: COLORS.greyColor, fontWeight: 500}}>
            Name -{' '}
          </Text>
          <Text
            style={{fontSize: 16, color: COLORS.greyColor, fontWeight: 500}}>
            {patientData.contactName}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{fontSize: 16, color: COLORS.greyColor, fontWeight: 500}}>
            Contact -{' '}
          </Text>
          <Text
            style={{fontSize: 16, color: COLORS.greyColor, fontWeight: 500}}>
            {patientData.contactPhoneNumber}
          </Text>
        </View>
      </View>

      <View style={{height: 20}}></View>

      <View>
        <Text style={styles.heroTxt}>Description</Text>
        <Text style={{fontSize: 16, color: COLORS.greyColor, fontWeight: 500}}>
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
          activeOpacity={1}
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
