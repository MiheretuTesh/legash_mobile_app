//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styles} from './index.style';
import PersonIcon from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

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
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 20,
            }}></View>
        </View>
      </View>
    </View>
  );
};

export default ProfileEdit;
