import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Login from './Login';
import Register from './Register';
import {NativeBaseProvider, StatusBar, ZStack} from 'native-base';

import Toggle from 'react-native-toggle-element';

const Auth = () => {
  const [toggleValue, setToggleValue] = useState(false);
  const error = console.error;
  console.error = (...args) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };
  function AppBar() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <ZStack h="15%" w="100%" marginBottom={50}>
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
              {toggleValue
                ? " Let's get you registered ! "
                : "Let's get you signed in !"}
            </Text>
          </View>
          <View style={{top: '80%', alignSelf: 'center'}}>
            <Toggle
              trackBar={{
                inActiveBackgroundColor: '#E65738',
                width: 250,
              }}
              trackBarStyle={{backgroundColor: '#f1f1f1'}}
              thumbButton={{
                width: 125,
                height: 50,
                activeBackgroundColor: '#E65738',
              }}
              animationDuration={0}
              value={toggleValue}
              onPress={newState => setToggleValue(newState)}
              leftTitle="Login"
              rightTitle="Register"
            />
          </View>
        </ZStack>
      </>
    );
  }
  return (
    <NativeBaseProvider>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <AppBar style={{flex: 1}} />
        {toggleValue ? <Register /> : <Login />}
      </View>
    </NativeBaseProvider>
  );
};

export default Auth;

const styles = StyleSheet.create({});
