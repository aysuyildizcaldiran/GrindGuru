import {StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';
import InputCompo from '../../components/InputComponents/InputCompo';
import ButtonCompo from '../../components/ButtonComponents/ButtonCompo';
import AuthCompo from '../../components/LoginComponents/AuthCompo';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>  
      <InputCompo placeholder={"Email"} inputRightIcon={false} width={"80%"} type={false}/>   
      <InputCompo placeholder={"Password"} inputRightIcon={true} width={"80%"} type={true} />
      <ButtonCompo variant={"link"} marginHorizontal={10} text={"Forgot Password?"} left={Dimensions.get("window").width/4} />
      </View>
      <View style={styles.authContainer}>  
      <AuthCompo text={"Or Register with"} buttonText={"Login"} textbuttonText={"Register Now"} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
   container:{
    flex:1
   },
   inputContainer:{
    flex:2
   },
   authContainer:{
    flex:5
   }
});
