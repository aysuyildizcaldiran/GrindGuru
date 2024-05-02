import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { COLOUR } from '../../assets/settings'

const LnCoffeCompo = () => {
    return (
        <View style={{flexDirection: 'column',marginVertical:5}}>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              height: 100,
              backgroundColor: 'white',
              borderRadius: 25,
              marginHorizontal: 20,
            }}>
            <View
              style={{
                backgroundColor: 'gray',
                borderRadius: 25,
                width: "30%",
                height: '100%',
                alignSelf: 'center'
              }}>
              <Image
                resizeMode="contain"
                source={require('../../assets/IMG/8.png')}
                style={{
                  height: 100,
                  width: 500,
                  alignSelf: 'center',
                }}></Image>
            </View>
            <View
              style={{
                flexDirection: 'column',
                width: "68%",
                height: 100,
                marginLeft: 10,
                borderRadius:20
              }}>
              <Text style={{marginTop:10,marginLeft: 10, width: '90%', fontWeight: '500',color:COLOUR.black}}>Caramel Latte</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop:35
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
          </View>
        </View>
      );
}

export default LnCoffeCompo

const styles = StyleSheet.create({})