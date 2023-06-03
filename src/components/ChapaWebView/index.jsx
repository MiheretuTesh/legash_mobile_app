import React, { useState } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const ChapaCheckoutScreen = () => {
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
          <TouchableOpacity style={styles.overlay} onPress={handleCloseModal} />
          <View style={styles.popover}>
            <WebView source={{ uri: checkoutUrl }} />
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
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popover: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 4,
    width: '80%',
    height: '60%',
  },
});

export default ChapaCheckoutScreen;
