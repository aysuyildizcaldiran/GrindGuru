import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchAppBar from '../../components/AppBar/SearchAppBar'
import { NativeBaseProvider } from 'native-base';
const Cart = () => {
  return (
    <NativeBaseProvider>
       <View style={{flex:1}}> 
      <SearchAppBar text={"My Cart"} icon={false} search={false}/>
      </View>
      <View style={{flex:3}}> 
     
      </View>
     
    </NativeBaseProvider>
  )
}

export default Cart

const styles = StyleSheet.create({})