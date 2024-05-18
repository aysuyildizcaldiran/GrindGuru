import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button, NativeBaseProvider, StatusBar, ZStack } from 'native-base';
import Toggle from 'react-native-toggle-element';
import Login from './Login';
import Register from './Register';

const Auth = ({ navigation }) => {
  const [toggleValue, setToggleValue] = useState(false);

  const error = console.error;
  console.error = (...args) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <AppBar toggleValue={toggleValue} setToggleValue={setToggleValue} />
        <View style={styles.content}>
          {toggleValue ? <Register /> : <Login />}
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const AppBar = ({ toggleValue, setToggleValue }) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ZStack flex={1} w="100%" marginBottom={50}>
        <Image
          source={require('../../assets/IMG/splash2.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {toggleValue ? " Let's get you registered! " : "Let's get you signed in!"}
          </Text>
        </View>
        <View style={styles.toggleContainer}>
          <Toggle
            trackBar={{
              inActiveBackgroundColor: '#E65738',
              width: 250,
            }}
            trackBarStyle={styles.trackBarStyle}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 4,
  },
  image: {
    height: '100%',
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  textContainer: {
    position: 'absolute',
    bottom: '40%',
    left: 15,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  toggleContainer: {
    position: 'absolute',
    top: '80%',
    alignSelf: 'center',
  },
  trackBarStyle: {
    backgroundColor: '#f1f1f1',
  },
});

export default Auth;
