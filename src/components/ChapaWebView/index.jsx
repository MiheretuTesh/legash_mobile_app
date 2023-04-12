import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { Picker } from '@react-native-picker/picker';
import COLORS from '../../constants/colors';
import { chapaPay } from '../../utils/payment/chapa';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../features/user/user.Slice';
import { createPayment } from '../../features/payment/payment.Slice';

const ethiopianPhoneNumberRegex = /^(\+251)?[0-9]\d{9}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  accountNumber: Yup.string().required('Account Number is required'),
  amount: Yup.string().required('Amount Number is required'),
  phone: Yup.string()
    .matches(ethiopianPhoneNumberRegex, 'Invalid Ethiopian phone number')
    .required('Phone number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

function generateRandomAlphabet() {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var randomIndex = Math.floor(Math.random() * alphabet.length);
  var randomAlphabet = alphabet.charAt(randomIndex);
  return randomAlphabet;
}

const ChapaCheckoutScreen = ({ route }) => {
  const dispatch = useDispatch();

  const { campaignData } = route.params;

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  const { userDataLoading, userDataSuccess, userDataFailed, userData } =
    useSelector((state) => state.user);

  const checkoutUrl =
    'https://checkout.chapa.co/checkout/payment/eB8TJqjMFsMnZH2u222vJOh7nef0BHXyqMcjNsc6wx2RU';
  const [isVisible, setIsVisible] = useState(false);
  const [inputChanged, setInputChanged] = useState(false);

  const [name, setName] = useState('Test Test');
  const [email, setEmail] = useState('mtd@gmail.com');
  const [amount, setAmount] = useState('499');
  const [currency, setCurrency] = useState('ETB');
  const [accountNumber, setAccountNumber] = useState('1000234567890');
  const [typeOfBank, setBankType] = useState('');
  const [phone, setPhone] = useState('0912983487');
  const [donorId, setDonorId] = useState(userData._id);
  const [campaignId, setCampaignId] = useState(campaignData._id);

  const [action, setAction] = useState('');
  const [paymentUri, setPaymentUri] = useState(null);
  const [errors, setErrors] = useState({});

  const handleMessage = (event) => {
    const data = JSON.parse(event.nativeEvent.data);
    setAction(data);

    console.log(data, 'Payment Action');
  };

  const webViewRef = useRef(null);

  const onWebViewLoaded = () => {
    webViewRef.current.postMessage('Hello, world!', 'myEvent');

    console.log('Successfult');
  };
  useEffect(() => {
    if (paymentUri !== null) {
    }
  }, [paymentUri]);

  const handleOpenModal = async () => {
    const formData = {
      name: name,
      email: email,
      phone: phone,
      typeOfBank: typeOfBank,
      accountNumber: accountNumber,
      amount: amount,
      currency: currency,
    };

    var randomLetter = generateRandomAlphabet();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      const nameValue = name.split(' ');
      const first_name = nameValue[0];
      const last_name = nameValue[1];
      const chapaPaymentUri = chapaPay(
        first_name,
        last_name,
        amount,
        email,
        phone,
        randomLetter,
        setPaymentUri
      );

      setIsVisible(true);

      const paymentData = {
        campaignId: campaignId,
        amount: amount,
        transactionType: 'donation',
        paymentMethod: 'Express Fund',
        donorId: userData._id,
      };
      console.log(paymentData, 'paymentData');
      dispatch(createPayment(paymentData));
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.labelTxt}>Name</Text>
              <View style={styles.inputFieldContainer}>
                <TextInput
                  style={[styles.input, { color: 'black' }]}
                  value={name}
                  onChangeText={(value) => {
                    setName(value);
                    setInputChanged(true);
                  }}
                />
              </View>
              {errors.name && inputChanged && (
                <Text style={{ color: 'red' }}>{errors.name}</Text>
              )}
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
              {errors.email && (
                <Text style={{ color: 'red' }}>{errors.email}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.labelTxt}>Phone Number</Text>
              <View style={styles.inputFieldContainer}>
                <TextInput
                  style={styles.input}
                  value={phone}
                  onChangeText={(value) => {
                    setPhone(value);
                    setInputChanged(true);
                  }}
                />
              </View>
              {errors.phone && inputChanged && (
                <Text style={{ color: 'red' }}>{errors.phone}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.labelTxt}>Bank</Text>
              <View style={styles.inputFieldContainer}>
                <Picker
                  selectedValue={typeOfBank}
                  onValueChange={setBankType}
                  style={styles.input}
                >
                  <Picker.Item label="CBE" value="CBE" />
                  <Picker.Item label="COOP" value="COOP" />
                  <Picker.Item label="Buna" value="Buna" />
                  <Picker.Item label="Dashen Bank" value="Dashen" />
                  <Picker.Item label="Birhane" value="Birhane" />
                </Picker>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.labelTxt}>Account Number</Text>
              <View style={styles.inputFieldContainer}>
                <TextInput
                  style={styles.input}
                  value={accountNumber}
                  onChangeText={(value) => {
                    setAccountNumber(value);
                    setInputChanged(true);
                  }}
                  keyboardType="numeric"
                />
              </View>
              {errors.accountNumber && inputChanged && (
                <Text style={{ color: 'red' }}>{errors.accountNumber}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.labelTxt}>Amount</Text>
              <View style={styles.inputFieldContainer}>
                <TextInput
                  style={styles.input}
                  value={amount}
                  onChangeText={(value) => {
                    setAmount(value);
                    setInputChanged(true);
                  }}
                  keyboardType="numeric"
                />
              </View>
              {errors.amount && inputChanged && (
                <Text style={{ color: 'red' }}>{errors.amount}</Text>
              )}
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
              <Text style={{ fontWeight: 700, color: COLORS.whiteColor }}>
                Pay
              </Text>
            </View>
          </TouchableOpacity>
          <Modal
            visible={isVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={handleCloseModal}
          >
            <View style={styles.modalContainer}>
              <TouchableOpacity
                style={styles.overlay}
                onPress={handleCloseModal}
              />
              <View style={styles.popover}>
                {/* {paymentUri !== null ? ( */}
                <WebView
                  source={{
                    uri: paymentUri?.data?.checkout_url
                      ? paymentUri?.data?.checkout_url
                      : checkoutUrl,
                  }}
                  onLoadSuccess={onWebViewLoaded}
                  ref={webViewRef}
                />
                {/* ) : (
                  <Text style={{ color: '#333' }}>Loading</Text>
                )} */}
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popover: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 4,
    width: '80%',
    height: '70%',
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

export default ChapaCheckoutScreen;
