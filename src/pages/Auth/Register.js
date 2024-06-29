import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputCompo from '../../components/InputComponents/InputCompo'
import AuthCompo from '../../components/LoginComponents/AuthCompo'

const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <InputCompo placeholder={"Full Name"} inputRightIcon={false} width={"80%"} type={false}/>   
      <InputCompo placeholder={"Email Address"} inputRightIcon={false} width={"80%"} type={false}/>   
      <InputCompo placeholder={"Password"} inputRightIcon={true} width={"80%"} type={true} />
      <InputCompo placeholder={"Confirm Password"} inputRightIcon={true} width={"80%"} type={true}/> 
      </View>
      <View style={styles.authContainer}>
       <AuthCompo text={"Or Login with"} buttonText={"Register"} textbuttonText={"Login Now"} />
      </View>

    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container:{
    flex:1
   },
   inputContainer:{
    flex:3
   },
   authContainer:{
    flex:3.5
   }
})