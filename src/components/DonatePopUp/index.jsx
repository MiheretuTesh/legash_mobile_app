//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions, Pressable } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { styles } from './index.style';
import DonateButton from '../DonateButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAddCampaign } from '../../hooks/useAddCampaign';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');

const DonatePopUp = ({ refRBSheet, handleNavigate }) => {
  const navigation = useNavigation();
  const [paymentGateWay, setPaymentGateWay] = useState(0);

  // const {mutate, data, isLoading, isSuccess} = useAddCampaign({
  //   onSuccess: campaignAddHandler,
  //   onError: onAddCampaignError,
  // });

  const handlePaymentChange = (index) => {
    setPaymentGateWay(index);
  };

  const handleDonate = () => {
    navigation.navigate('HistoryScreen');
    // refRBSheet.current.close();
    // mutate;
  };

  const PaymentTabs = () => {
    const paymentTypes = [
      {
        img: '../../assets/ChapaPay.png',
      },
      {
        img: '../../assets/santimpay.png',
      },
      {
        img: '../../assets/YenePay.png',
      },
    ];

    return paymentTypes.map((payment, index) => (
      <Pressable key={index} onPress={() => handlePaymentChange(index)}>
        <View
          style={{
            backgroundColor:
              index === paymentGateWay ? COLORS.mainColor : COLORS.whiteColor,
            elevation: 10,
            padding: 10,
            borderRadius: 16,
            paddingHorizontal: 20,
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* <Image
            source={require(`${payment.img}`)}
            style={{
              width: 200,
              height: 50,
            }}
          /> */}
        </View>
      </Pressable>
    ));
  };

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={false}
      gestureEnabled={false}
      height={height - 400}
      customStyles={{
        wrapper: {
          backgroundColor: COLORS.transparent2,
        },
        draggableIcon: {
          backgroundColor: '#000',
        },
      }}
    >
      <View style={styles.popContainer}>
        <View>
          <Text style={styles.heroTxt}>Donate</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            height: '80%',
          }}
        >
          <Pressable
            onPress={() => handleNavigate('chapa')}
            style={{
              backgroundColor: COLORS.whiteColor,
              elevation: 10,
              padding: 10,
              borderRadius: 16,
              paddingHorizontal: 20,
              width: '80%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../../assets/ChapaPay.png')}
              style={{
                width: 200,
                height: 50,
              }}
            />
          </Pressable>
          <Pressable
            onPress={() => handleNavigate()}
            style={{
              backgroundColor: COLORS.whiteColor,
              elevation: 10,
              padding: 10,
              borderRadius: 16,
              paddingHorizontal: 20,
              width: '80%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../../assets/santimpay.png')}
              style={{
                width: 260,
                height: 50,
              }}
            />
          </Pressable>
          <Pressable
            onPress={() => handleNavigate('Yegna')}
            style={{
              backgroundColor: COLORS.whiteColor,
              elevation: 10,
              padding: 10,
              borderRadius: 16,
              paddingHorizontal: 20,
              width: '80%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../../assets/YenePay.png')}
              style={{
                width: 200,
                height: 50,
              }}
            />
          </Pressable>
        </View>
        {/* <View style={styles.paymentContainer}>
          <PaymentTabs />
        </View> */}
        {/* <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.labelTxt}>Name</Text>
            <View style={styles.inputFieldContainer}>
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labelTxt}>Phone Number</Text>
            <View style={styles.inputFieldContainer}>
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labelTxt}>Amount</Text>
            <View style={styles.inputFieldContainer}>
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                keyboardType="numeric"
              />
            </View>
          </View>
          <Pressable
            onPress={() => {
              handleDonate();
            }}
          >
            <DonateButton />
          </Pressable>
        </View> */}
      </View>
    </RBSheet>
  );
};

//make this component available to the app
export default DonatePopUp;
