//import liraries
import React, {useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './index.style';
import PersonIcon from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SubmittedButton from '../SubmitButton';

// create a component
const ProfileEdit = () => {
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
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View
              style={{
                borderRadius: 100,
                padding: 10,
                backgroundColor: 'white',
                elevation: 10,
                width: 60,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'black', fontWeight: 500, fontSize: 18}}>
                20K
              </Text>
            </View>
            <Text style={{fontSize: 16, fontWeight: 500, paddingBottom: 10}}>
              Amount
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 100,
              padding: 20,
              width: 100,
              height: 100,
            }}>
            <PersonIcon size={80} name="person" color="black" />
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View
              style={{
                borderRadius: 100,
                elevation: 10,
                padding: 10,
                backgroundColor: 'white',
                width: 60,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'black', fontWeight: 500, fontSize: 18}}>
                10
              </Text>
            </View>
            <Text style={{fontSize: 16, fontWeight: 500, paddingBottom: 10}}>
              Donated
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{flexDirection: 'column'}}>
          <View style={styles.inputContainer}>
            <Text style={styles.labelTxt}>Name</Text>
            <View style={{width: 10}}></View>

            <View style={styles.inputFieldContainer}>
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                // keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.labelTxt}>Phone</Text>
            <View style={{width: 10}}></View>

            <View style={styles.inputFieldContainer}>
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                // keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.labelTxt}>Email</Text>
            <View style={{width: 10}}></View>

            <View style={styles.inputFieldContainer}>
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                // keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.labelTxt}>Password</Text>
            <View style={{width: 10}}></View>

            <View style={styles.inputFieldContainer}>
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                // keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.labelTxt}>Confirm</Text>
            <View style={{width: 10}}></View>
            <View style={styles.inputFieldContainer}>
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                // keyboardType="numeric"
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{paddingHorizontal: 65}}>
            <SubmittedButton btnTitle={'Update'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileEdit;
