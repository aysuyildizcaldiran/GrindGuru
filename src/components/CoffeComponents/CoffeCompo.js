import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { COLOUR } from '../../assets/settings'

const CoffeCompo = () => {
  return (
    <View
    style={{
      flexDirection: 'column',
      width: 160,
      height: 200,
      backgroundColor: 'white',
      borderRadius: 22,
      marginVertical:5
    }}>
    <View
      style={{
        backgroundColor: 'gray',
        borderRadius: 10,
        width: 100,
        alignSelf: 'center',
        margin: 10,
      }}>
      <Image
        resizeMode="contain"
        source={require('../../assets/IMG/7.png')}
        style={{
          height: 100,
          width: 50,
          alignSelf: 'center',
        }}></Image>
    </View>
    <Text style={{marginLeft: 10, width: '80%', fontWeight: '500',color:COLOUR.black}}>
      Caramel Macchiato
    </Text>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: -8,
      }}>
      <Text style={{marginLeft: 10,color:COLOUR.black,fontWeight:"500"}}>40.00 TL</Text>
      <TouchableOpacity
        style={{
          backgroundColor: COLOUR.themeRed,
          width: 40,
          height: 35,
          borderBottomRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            top: 5,
            color: 'white',
            fontSize: 20,
          }}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default CoffeCompo

const styles = StyleSheet.create({})