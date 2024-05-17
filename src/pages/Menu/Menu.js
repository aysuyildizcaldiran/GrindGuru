import { Text, View,ScrollView ,Image ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import SearchAppBar from '../../components/AppBar/SearchAppBar'
import { NativeBaseProvider } from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CoffeCompo from '../../components/CoffeComponents/CoffeCompo';

import {COLOUR} from '../../assets/settings';
import styles from './Menu.style';

function ScroolElement1() {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: 200,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 22,
        marginHorizontal: 10,
      }}>
      <View
        style={{
          backgroundColor: 'gray',
          borderRadius: 25,
          width: 40,
          height:40,
          alignSelf: 'center',
          marginHorizontal:5
        }}>
          <Fontisto  style={{alignSelf:"center",marginVertical:10}} name="coffeescript" size={20} color="white"  />
      </View>
      <Text style={{fontWeight: '500',color:COLOUR.black,alignSelf:"center"}}>
        Caramel Macchiato
      </Text>
    </View>
  );
}

const Menu = () => {

  return (
    <NativeBaseProvider> 
      <View style={{flex:1.3}}> 
      <SearchAppBar text={"Menu"} icon={false}/>
      </View>
      <View style={{flex:0.7}}> 
      <Text style={{fontWeight:"600",color:"black",marginHorizontal:20,fontSize:18}}>Categories</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}  style={{marginVertical:10}}>
            <View style={{flexDirection: 'row'}}>
             <ScroolElement1/>
             <ScroolElement1/>
             <ScroolElement1/>
            </View>
          </ScrollView>
      </View>
      <View style={{flex:3.5}}> 
          <ScrollView contentContainerStyle={styles.scrollContainer}>
        {Array.from({ length: 15 }, (_, index) => (
           <CoffeCompo index={index} style={{}} />
        ))}
      </ScrollView>
      </View>
      </NativeBaseProvider>
  )
}

export default Menu;
