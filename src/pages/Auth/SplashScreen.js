import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SplashScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/IMG/splash.png')}
        style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={{color: 'white', fontSize: 25}}> Welcome to </Text>
          <Text style={{color: 'white', fontSize: 45, marginBottom: 30}}>
            {' '}
            Cavosh{' '}
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#293441',
    paddingVertical: 15,
    paddingHorizontal: 80,
    marginBottom: 100,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
  },
});
