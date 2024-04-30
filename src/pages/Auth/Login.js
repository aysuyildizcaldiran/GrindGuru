import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Input, Button, Icon} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import InputCompo from '../../components/InputComponents/InputCompo';
import ButtonCompo from '../../components/ButtonComponents/ButtonCompo';

const Login = () => {
 

  return (
    <View>
      <InputCompo placeholder={"Email"} inputRightIcon={false} width={"80%"} type={false}/>   
      <InputCompo placeholder={"Password"} inputRightIcon={true} width={"80%"} type={true} />
      <ButtonCompo  variant={"link"} marginHorizontal={10} text={"Forgot Password?"} left={'20%'} />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Authh')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={{height: '30%'}}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 5,
            justifyContent: 'center',
            height: 20,
          }}>
          <View
            style={{
              width: '28%',
              height: 1,
              backgroundColor: '#E65738',
              alignSelf: 'center',
              marginHorizontal: 15,
            }}
          />
          <Text style={{textAlign: 'center'}}>Or Login with</Text>
          <View
            style={{
              width: '28%',
              height: 1,
              backgroundColor: '#E65738',
              alignSelf: 'center',
              marginHorizontal: 15,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            margin: 20,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FEE4D6',
              width: 100,
              height: 80,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
            }}>
            <Fontisto name="facebook" size={35} color="#900" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FEE4D6',
              width: 100,
              height: 80,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
            }}>
            <Fontisto name="google-plus" size={35} color="#900" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FEE4D6',
              width: 100,
              height: 80,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
            }}>
            <Fontisto name="apple" size={35} color="#900" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          top: '15%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 15}}>Already have an account?</Text>
        <ButtonCompo  variant={"link"}  text={"Register Now"} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: '#293441',
    paddingVertical: 15,
    paddingHorizontal: 80,
    marginBottom: 100,
    borderRadius: 15,
    width: '60%',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
