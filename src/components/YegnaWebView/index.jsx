import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { WebView } from 'react-native-webview';
import COLORS from '../../constants/colors';

const YegnaCheckoutScreen = () => {
  const checkoutUrl =
    'https://checkout.chapa.co/checkout/payment/ZptW0dMtq1FMVDRNe5DUZPhYk2UxoTsWCJpR0NhMOF6ny';
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('ETB');

  const handleOpenModal = () => {
    setIsVisible(true);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.labelTxt}>Name</Text>
          <View style={styles.inputFieldContainer}>
            <TextInput
              style={[styles.input, { color: 'black' }]}
              value={name}
              onChangeText={setName}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelTxt}>Email</Text>
          <View style={styles.inputFieldContainer}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelTxt}>Amount</Text>
          <View style={styles.inputFieldContainer}>
            <TextInput
              style={styles.input}
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelTxt}>Currency</Text>
          <View style={styles.inputFieldContainer}>
            <Picker
              selectedValue={currency}
              onValueChange={setCurrency}
              style={styles.input}
            >
              <Picker.Item label="ETB" value="ETB" />
              <Picker.Item label="USD" value="USD" />
            </Picker>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={handleOpenModal}>
        <View style={styles.button}>
          <Text style={{ fontWeight: 700, color: COLORS.whiteColor }}>Pay</Text>
        </View>
      </TouchableOpacity>
      <Modal
        visible={isVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={{ flex: 1 }} />

          <View style={styles.popover}>
            <View
              style={{
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                padding: 10,
              }}
            >
              <TouchableOpacity
                style={styles.overlay}
                onPress={handleCloseModal}
              >
                <Text>X</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <View>
                <Text
                  style={{
                    color: COLORS.txtColor,
                    fontSize: 20,
                    fontWeight: 700,
                  }}
                >
                  Yegna Pay
                </Text>
              </View>
              <View style={{ width: '80%' }}>
                <View
                  style={{
                    marginVertical: 10,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.redColor,
                    marginHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 8,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLORS.light,
                      fontWeight: 400,
                    }}
                  >
                    Amount
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: COLORS.whiteColor,
                      fontWeight: 700,
                    }}
                  >
                    100 ETB
                  </Text>
                </View>
                <View style={{ paddingHorizontal: 20, paddingVertical: 2 }}>
                  <Text style={styles.labelTxtPayment}>Card Name</Text>
                  <View style={styles.inputPayment}>
                    <TextInput
                      style={styles.input}
                      value={amount}
                      onChangeText={setAmount}
                      keyboardType="numeric"
                      placeholder={'Card Number'}
                    />
                  </View>
                </View>
                <View style={{ paddingHorizontal: 20, paddingVertical: 2 }}>
                  <Text style={styles.labelTxtPayment}>Card Number</Text>
                  <View style={styles.inputPayment}>
                    <TextInput
                      style={styles.input}
                      value={amount}
                      onChangeText={setAmount}
                      keyboardType="numeric"
                      placeholder={'Card Number'}
                    />
                  </View>
                </View>

                <View style={{ paddingHorizontal: 20, paddingVertical: 2 }}>
                  <Text style={styles.labelTxtPayment}>MM/YY</Text>
                  <View style={styles.inputPayment}>
                    <TextInput
                      style={styles.input}
                      value={amount}
                      onChangeText={setAmount}
                      keyboardType="numeric"
                      placeholder={'Card Number'}
                    />
                  </View>
                </View>
                <View style={{ paddingHorizontal: 20, paddingVertical: 2 }}>
                  <Text style={styles.labelTxtPayment}>CVV</Text>
                  <View style={styles.inputPayment}>
                    <TextInput
                      style={styles.input}
                      value={amount}
                      onChangeText={setAmount}
                      keyboardType="numeric"
                      placeholder={'Card Number'}
                    />
                  </View>
                </View>
                <View
                  style={{
                    marginVertical: 10,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.mainColor,
                    marginHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 8,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: COLORS.whiteColor,
                      fontWeight: 500,
                    }}
                  >
                    Payment using Yegna
                  </Text>
                </View>
              </View>
            </View>
            {/* <WebView source={{ uri: checkoutUrl }} /> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: COLORS.mainColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    width: 30,
    height: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  popover: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 4,
    width: '80%',
    height: '60%',
  },
  formContainer: { width: '70%', marginTop: 50 },
  inputContainer: {
    marginBottom: 20,
  },
  labelTxt: {
    color: COLORS.txtColor,
    fontSize: 15,
    paddingBottom: 10,
    fontWeight: '500',
  },

  inputFieldContainer: {
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.mainColor,
    width: '100%',
  },
  input: {
    color: COLORS.txtColor,
    paddingVertical: 5,
  },
  labelTxtPayment: {
    color: COLORS.txtColor,
    fontSize: 10,
    paddingBottom: 10,
    fontWeight: '500',
  },
  inputPayment: {
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: COLORS.txtColor,
    width: '100%',
    height: 30,
  },
});

export default YegnaCheckoutScreen;
