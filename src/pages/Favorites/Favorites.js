import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import LnCoffeCompo from '../../components/CoffeComponents/LnCoffeCompo'
import { Appbar } from 'react-native-paper'
import SearchAppBar from '../../components/AppBar/SearchAppBar'
import { NativeBaseProvider } from 'native-base'

const Favorites = () => {
  return (
    <NativeBaseProvider>
       <View style={{flex:1}}> 
      <SearchAppBar text={"Favorites"} icon={false} search={false}/>
      </View>
      <View style={{flex:3}}> 
      <Text style={{fontWeight:"600",color:"black",marginHorizontal:30,fontSize:10,alignSelf:"flex-end"}}>3 items</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={false}  style={{marginVertical:10}}>
            <LnCoffeCompo/>
            <LnCoffeCompo/>
            <LnCoffeCompo/>
          </ScrollView>
      </View>
     
    </NativeBaseProvider>
  )
}

export default Favorites

const styles = StyleSheet.create({})