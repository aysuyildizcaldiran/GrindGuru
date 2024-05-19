//import liraries
import {Modal, VStack, ZStack} from 'native-base';
import React, {Component, useRef, useState} from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity,Dimensions} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLOUR } from '../../assets/settings';

const viewWidth=Dimensions.get("window").width;
const viewHeight=Dimensions.get("window").height;

const CoffeModal = ({isModal}) => {
    const iconColorRef = useRef(false);
    const [, forceUpdate] = useState(false);
    const [count,setCount]=useState(0);

    const countAdd=()=>{setCount(count+1)}
    const countRemove=()=>{count>0 ? setCount(count-1):<></>}

    const handleFavorites = () => {
      iconColorRef.current = !iconColorRef.current;
      forceUpdate(prev => !prev);
    };

    handleBack=()=>{
        isModal(false)
    }

  return (
    <> 
    <ZStack flex={0.7} w="100%" marginBottom={0}>
      <Image
        source={require('../../assets/IMG/splash2.png')}
        style={{
          height: '100%',
          width: '100%',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}></Image>
      <View
        style={{
          bottom: '60%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf:"center",
          width: '90%',
        }}>
        <VStack>
        <TouchableOpacity style={{
          borderRadius:20,
        alignItems: 'center',
        width:viewWidth/10,height:viewHeight/20,
        justifyContent:"center",
        }} onPress={handleBack}> 
        <Ionicons name="chevron-back" size={30} color={"white"} />
        </TouchableOpacity>
        </VStack>    
        
        <VStack>
        <TouchableOpacity style={{
          backgroundColor: iconColorRef.current ? COLOUR.themeRed :  "white",
          borderRadius:20,
        alignItems: 'center',
        width:viewWidth/10,height:viewHeight/20,
        justifyContent:"center",
        alignSelf:"flex-end"
        }} onPress={handleFavorites}> 
        <EvilIcons name="heart" size={30} color={iconColorRef.current ? "white" : COLOUR.themedarkBlue } />
        </TouchableOpacity>
        </VStack>    
      </View>
    
       <View style={{alignSelf: 'center', width: '100%',height:viewHeight/4,top:viewHeight/8,alignItems:"center"}}>
       <Image
        source={require('../../assets/IMG/7.png')}
        resizeMode='center'
        style={{
          height: "100%",
          width: "100%",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}></Image>
     </View>
     <View style={{alignSelf: "flex-start", width: '8%',height:viewHeight/8,
     top:viewHeight/6,backgroundColor:COLOUR.themeRed,borderRadius:20,alignItems:"center",
     justifyContent:"space-between",
     padding:2,marginLeft:20
     }}>
       <TouchableOpacity onPress={countAdd}><Text style={{fontSize:16,fontWeight:"600",color:"white"}}>+</Text></TouchableOpacity>
       <Text style={{fontSize:16,fontWeight:"600",color:"white"}}>{count}</Text>
       <TouchableOpacity onPress={countRemove}><Text style={{fontSize:20, fontWeight:"800",color:"white"}}>-</Text></TouchableOpacity>
     </View>
     
    </ZStack>
    <View style={{top:90}}>
        <Text style={{fontSize:20,fontWeight:"800",bottom:10}}>Caramel Macchiato</Text>
        <Text style={{fontSize:15,fontWeight:"500"}}>Caramel Macchiato Macchiato Macchiato Macchiato Macchiato Macchiato</Text>

    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default CoffeModal;
