import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  DevSettings,
  Linking,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import COLORS from '../../constants/colors';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1, padding: 0, margin: 0, paddingTop: 0}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{paddingTop: 0}}>
        <View
          style={{
            height: 170,
            padding: 20,
            paddingTop: 0,
            marginTop: 0,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.mainColor,
            border: 'none',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: COLORS.whiteColor, fontSize: 25}}>Lene</Text>
          </View>
          {/* <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{paddingTop: 10}}>agenagn@gmail.com</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>+251 923 232 323</Text>
            </View>
          </View> */}
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
