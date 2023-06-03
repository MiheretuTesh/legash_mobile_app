import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import { WebView } from 'react-native-webview';

const YegnaCheckoutScreen = () => {
  const checkoutUrl =
    'https://checkout.chapa.co/checkout/payment/ZptW0dMtq1FMVDRNe5DUZPhYk2UxoTsWCJpR0NhMOF6ny';
  const [isVisible, setIsVisible] = useState(false);

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
      </View>
      <TouchableOpacity onPress={handleOpenModal}>
        <View style={styles.button}>
          <Text>Pay</Text>
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
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    // flex: 1,
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
    fontWeight: 500,
  },
  inputContainer: {
    marginBottom: 20,
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
});

export default YegnaCheckoutScreen;
