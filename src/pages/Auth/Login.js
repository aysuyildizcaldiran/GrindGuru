import {StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import React, {useState} from 'react';
import InputCompo from '../../components/InputComponents/InputCompo';
import ButtonCompo from '../../components/ButtonComponents/ButtonCompo';
import AuthCompo from '../../components/LoginComponents/AuthCompo';

const Login = () => {

  return (
    <View style={{flex:1}}>
      <View style={{flex:2}}>  
      <InputCompo placeholder={"Email"} inputRightIcon={false} width={"80%"} type={false}/>   
      <InputCompo placeholder={"Password"} inputRightIcon={true} width={"80%"} type={true} />
      <ButtonCompo variant={"link"} marginHorizontal={10} text={"Forgot Password?"} left={Dimensions.get("window").width/4} />
      </View>
      <View style={{flex:5}}>  
      <AuthCompo  />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({

});
