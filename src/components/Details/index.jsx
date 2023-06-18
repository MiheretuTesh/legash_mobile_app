import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { styles } from './index.style';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../constants/colors';

import CloseIcon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

import DonateButton from '../DonateButton';
import DonatePopUp from '../DonatePopUp';

const Details = ({ campaignsData, handleNavigate }) => {
  const refRBSheet = useRef();
  const navigation = useNavigation();
  const [imageIndex, setImageIndex] = useState(0);
  const [backgroundImg, setBackgroundImage] = useState(
    campaignsData.coverImage
  );

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
      <View>
        <ImageBackground
          source={{
            uri: backgroundImg
              ? backgroundImg
              : 'https://images.unsplash.com/photo-1548102245-c79dbcfa9f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80',
          }}
          style={styles.backgroundImg}
        >
          <View style={styles.backgroundImgView}>
            {/* {campaignsData.images?.length > 0
              ? campaignsData.images.map((image, index) => {
                  const currentIndex = imageIndex;
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setImageIndex(index);
                        setBackgroundImage(image);
                      }}
                    >
                      <Image
                        source={{ uri: image }}
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 10,
                          borderWidth: currentIndex === index ? 3 : 0,
                          borderColor:
                            currentIndex === index && COLORS.mainColor,
                          elevation: 10,
                        }}
                      />
                    </TouchableOpacity>
                  );
                })
              : imgs.map((image, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setImageIndex(index);
                        setBackgroundImage(image);
                      }}
                    >
                      <Image
                        source={{ uri: image }}
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
                  );
                })} */}
          </View>
        </ImageBackground>
      </View>

      <View style={{ height: 20 }}></View>

      <View>
        <Text
          style={
            ([styles.heroTxt],
            {
              fontSize: 20,
              color: COLORS.txtColor,
              fontWeight: '600',
              paddingBottom: 15,
            })
          }
        >
          {campaignsData.campaignTitle}
        </Text>
        <Text style={styles.heroTxt}>Campaign Status</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={styles.txtContainer}>
            <Text
              style={{ color: COLORS.greyColor, fontWeight: 500, fontSize: 16 }}
            >
              Total Amount
            </Text>
            <Text
              style={{ color: COLORS.mainColor, fontWeight: 500, fontSize: 18 }}
            >
              {campaignsData.targetFunding.toLocaleString('en-US')} birr
            </Text>
          </View>
          <View
            style={{
              height: 40,
              backgroundColor: COLORS.greyColor,
              width: 0.5,
            }}
          ></View>
          <View style={styles.txtContainer}>
            <Text
              style={{ color: COLORS.greyColor, fontWeight: 500, fontSize: 16 }}
            >
              Raised Amount
            </Text>
            <Text
              style={{ color: COLORS.mainColor, fontWeight: 500, fontSize: 18 }}
            >
              {campaignsData.currentFundedAmount?.toLocaleString('en-US')} birr
            </Text>
          </View>
          <View
            style={{
              height: 40,
              backgroundColor: COLORS.greyColor,
              width: 0.5,
            }}
          ></View>

          <View style={styles.txtContainer}>
            <Text
              style={{ color: COLORS.greyColor, fontWeight: 500, fontSize: 16 }}
            >
              To Go
            </Text>
            <Text
              style={{ color: COLORS.redColor, fontWeight: 500, fontSize: 18 }}
            >
              {(
                campaignsData.targetFunding - campaignsData.currentFundedAmount
              ).toLocaleString('en-US')}
              birr
            </Text>
          </View>
        </View>
      </View>

      <View style={{ height: 20 }}></View>

      <View>
        <Text style={styles.heroTxt}>Contact Information</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{ fontSize: 16, color: COLORS.greyColor, fontWeight: 500 }}
          >
            Name - {campaignsData.patientName}
          </Text>
          <Text
            style={{ fontSize: 16, color: COLORS.greyColor, fontWeight: 500 }}
          >
            {campaignsData.contactName}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{ fontSize: 16, color: COLORS.greyColor, fontWeight: 500 }}
          >
            Phone - 0912983487
          </Text>
          <Text
            style={{ fontSize: 16, color: COLORS.greyColor, fontWeight: 500 }}
          >
            {campaignsData.contactName}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{ fontSize: 16, color: COLORS.greyColor, fontWeight: 500 }}
          >
            Approved By - {campaignsData.hospitalName}
          </Text>
          <Text
            style={{ fontSize: 16, color: COLORS.greyColor, fontWeight: 500 }}
          >
            {campaignsData.contactPhoneNumber}
          </Text>
        </View>
      </View>

      <View style={{ height: 20 }}></View>

      <View>
        <Text style={styles.heroTxt}>Description</Text>
        <Text
          style={{ fontSize: 16, color: COLORS.greyColor, fontWeight: 500 }}
        >
          {campaignsData.diagnosis[0]}
        </Text>
      </View>
      <View style={{ height: 20 }}></View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <DonatePopUp refRBSheet={refRBSheet} handleNavigate={handleNavigate} />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            refRBSheet.current.open();
          }}
        >
          <DonateButton />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
