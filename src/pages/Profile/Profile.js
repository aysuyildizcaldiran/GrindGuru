import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchAppBar from '../../components/AppBar/SearchAppBar'
import { NativeBaseProvider } from 'native-base';

const Profile = () => {
  return (
    <NativeBaseProvider>
       <View style={{flex:1}}> 
      <SearchAppBar text={"Profile"} icon={false} search={false}/>
      </View>
      <View style={{flex:3}}>      
      </View>    
    </NativeBaseProvider>
  )
}

export default Profile

const styles = StyleSheet.create({})