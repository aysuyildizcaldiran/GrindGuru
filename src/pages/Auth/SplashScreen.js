import {Image, ImageBackground, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { StatusBar } from 'native-base';

const SplashScreen = ({navigation}) => {
  return (
    <> 
    <View style={{flex: 1}}> 
      <ImageBackground
        source={require('../../assets/IMG/splash.png')}
        style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.text1}> Welcome to </Text>
          <Text style={styles.text2}>Cavosh</Text>
          <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate("Authh")}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
    </>
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
  text1:{color: 'white', fontSize: 25},
  text2:{color: '#E65738', fontSize: 45, marginBottom: 30}
});
