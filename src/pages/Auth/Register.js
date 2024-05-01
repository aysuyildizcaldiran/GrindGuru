import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputCompo from '../../components/InputComponents/InputCompo'
import AuthCompo from '../../components/LoginComponents/AuthCompo'

const Register = () => {
  return (
    <View style={{flex:1}}>
      <View style={{flex:3}}>
      <InputCompo placeholder={"Full Name"} inputRightIcon={false} width={"80%"} type={false}/>   
      <InputCompo placeholder={"Email Address"} inputRightIcon={false} width={"80%"} type={false}/>   
      <InputCompo placeholder={"Password"} inputRightIcon={true} width={"80%"} type={true} />
      <InputCompo placeholder={"Confirm Password"} inputRightIcon={true} width={"80%"} type={true}/> 
      </View>
      <View style={{flex:3.5}}>
       <AuthCompo />
      </View>

    </View>
  )
}

export default Register

const styles = StyleSheet.create({})