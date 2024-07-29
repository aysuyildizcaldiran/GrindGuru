import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import LnCoffeCompo from '../../components/CoffeComponents/LnCoffeCompo'
import { Appbar } from 'react-native-paper'
import SearchAppBar from '../../components/AppBar/SearchAppBar'
import { NativeBaseProvider } from 'native-base'

const Favorites = () => {
  return (
    <> 
       <View style={styles.container}> 
      <SearchAppBar text={"Favorites"} icon={false} search={false}/>
      </View>
      <View style={styles.bodyContainer}> 
      <Text style={styles.countText}>3 items</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={false}  style={styles.scroll}>
            <LnCoffeCompo title={"Latte"} price={"100 TL"} imageSource={require('../../assets/IMG/7.png')}/>
            <LnCoffeCompo title={"Caramel Macchiato"}price={"350 TL"} imageSource={require('../../assets/IMG/8.png')}/>
            <LnCoffeCompo title={"Caramel LATTE"} price={"300 TL"} imageSource={require('../../assets/IMG/7.png')}/>
          </ScrollView>
      </View>
      </>
  )
}

export default Favorites

const styles = StyleSheet.create({
  container:{
    flex:0.7,
    marginBottom:10
  },
  bodyContainer:{
    flex:3
  },
  countText:{fontWeight:"600",color:"black",marginHorizontal:30,fontSize:14,alignSelf:"flex-end"},
  scroll:{
    marginVertical:10
  }
})