//import liraries
import {Button,NativeBaseProvider, StatusBar, ZStack} from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Appbar = () => {
    return (
      <NativeBaseProvider> 
          <ZStack flex={1} w="100%" marginBottom={50}>
            <Image
              source={require('../../assets/IMG/splash2.png')}
              style={{
                height: '100%',
                width: '100%',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
              }}></Image>
            <View style={{bottom: '40%', left: 15}}>
              <Text style={{color: 'white', fontSize: 20}}>
                Home
              </Text>
            </View>
            
          </ZStack>
          </NativeBaseProvider>
      );
};
export default Appbar;
