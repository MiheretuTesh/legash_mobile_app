//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Dimensions, Pressable } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { styles } from './index.style';
import DonateButton from '../DonateButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAddCampaign } from '../../hooks/useAddCampaign';

const { width, height } = Dimensions.get('screen');

const DonatePopUp = ({ refRBSheet }) => {
  const [paymentGateWay, setPaymentGateWay] = useState(0);

  // const {mutate, data, isLoading, isSuccess} = useAddCampaign({
  //   onSuccess: campaignAddHandler,
  //   onError: onAddCampaignError,
  // });

  const handlePaymentChange = (index) => {
    setPaymentGateWay(index);
  };

  const handleDonate = () => {
    refRBSheet.current.close();
    // mutate;
  };

  const PaymentTabs = () => {
    const paymentTypes = [
      {
        title: 'Yene Pay',
      },
      {
        title: 'Chappa',
      },
      {
        title: 'Paypal',
      },
    ];

    return paymentTypes.map((payment, index) => (
      <Pressable key={index} onPress={() => handlePaymentChange(index)}>
        <View
          style={
            index === paymentGateWay
              ? styles.txtContainerActive
              : styles.txtContainer
          }
        >
          <Text
            style={index === paymentGateWay ? styles.txtActive : styles.txt}
          >
            {payment.title}
          </Text>
        </View>
      </Pressable>
    ));
  };

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={false}
      gestureEnabled={false} // Disable gesture recognition
      height={height - 220}
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
        <View style={styles.paymentContainer}>
          <PaymentTabs />
        </View>
        <View style={styles.formContainer}>
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
        </View>
      </View>
    </RBSheet>
  );
};

//make this component available to the app
export default DonatePopUp;
