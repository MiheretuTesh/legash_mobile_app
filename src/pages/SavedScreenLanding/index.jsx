import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './index.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import MenuIcon from 'react-native-vector-icons/Feather';

const SavedScreenLanding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View style={{ paddingVertical: 20 }}>
            <MenuIcon name="menu" size={20} color="black" />
          </View>
        </TouchableOpacity>

        <ScrollView>
          <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            <View>
              <Text
                style={{ color: COLORS.dark, fontSize: 25, fontWeight: '700' }}
              >
                Log in to view your Saved Campaigns
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 15,
                  paddingVertical: 10,
                }}
              >
                You can donate or review saved Campaigns once you've logged in.
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View
                style={{
                  backgroundColor: COLORS.green,
                  width: 80,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 16,
                    fontWeight: '500',
                  }}
                >
                  Log in
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SavedScreenLanding;
