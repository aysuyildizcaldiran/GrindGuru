import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  NativeBaseProvider,
  StatusBar,
  ZStack,
  VStack,
  Badge,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {COLOUR} from '../../assets/settings';

const Profile = () => {

  function AppBar() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <ZStack flex={1} w="100%" marginBottom={50}>
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
              bottom: '40%',
              left: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '85%',
            }}>
            <Text style={{color: 'white', fontSize: 20, marginTop: 10}}>
              Profile
            </Text>
          </View>
          <View
            style={{
              top: '80%',
              alignSelf: 'center',
              width: '85%',
              height: '50%',
              backgroundColor: '#dddddd',
              borderRadius: 30,
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 25,
                width: 50,
                height: 50,
                marginHorizontal: 10,
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../assets/IMG/profile.png')}
                style={{
                  height: '100%',
                  width: '100%',
                }}></Image>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: '500',
                  color: COLOUR.black,
                  alignSelf: 'center',marginTop:10
                }}>
                Aysu Yıldız Çaldıran
              </Text>
              <View style={{
                  flexDirection:"row",   
                }}> 
              <Ionicons name="star" size={20} color={COLOUR.themeRed}/> 
              <Text
                style={{
                  fontWeight: '500',
                  color: COLOUR.black,
                  alignSelf: 'center',
                }}> 124 points
              </Text>

              </View>            
            </View>
            <View  style={{
              left:100,
              marginVertical:5
            }}>
              <MaterialCommunityIcons name="account-edit-outline" size={25} color={COLOUR.themedarkBlue}/>
            </View>
          </View>
        </ZStack>
      </>
    );
  }
  const Rod =()=><View style={{width:"90%",backgroundColor:"gray",height:1,alignSelf:"center"}} />

  return (
    <NativeBaseProvider >
      <View style={{backgroundColor:"white",flex:1}}>
        <View style={{flex: 1}}>
          <AppBar />
        </View>
        <View style={{flex: 3}}>
            <Text style={{color:COLOUR.black,fontWeight:"600",marginLeft:15}}>Account</Text>
            <View style={{backgroundColor:"#dddd" ,borderRadius:30,margin:10}}>
            
            <TouchableOpacity   
            style={{
              flexDirection:"row",
              margin:15,
              alignItems:"center"
            }}>
            <MaterialCommunityIcons name={"clipboard-text-outline"} size={25} color={COLOUR.themeBlue} />
            <Text style={{marginLeft:15,fontSize:15,fontWeight:"500",color:COLOUR.black}} >Account details</Text>
            </TouchableOpacity>
            <Rod/>
            <TouchableOpacity   
            style={{
              flexDirection:"row",
              margin:15,
              alignItems:"center"
            }}>
            <MaterialIcons    name={"attach-money"} size={25} color={COLOUR.themeBlue} />
            <Text style={{marginLeft:15,fontSize:15,fontWeight:"500",color:COLOUR.black}} >Payment details</Text>
            </TouchableOpacity>
             <Rod/>
            <TouchableOpacity   
            style={{
              flexDirection:"row",
              margin:15,
              alignItems:"center"
            }}>
            <AntDesign    name={"calendar"} size={25} color={COLOUR.themeBlue} />
            <Text style={{marginLeft:15,fontSize:15,fontWeight:"500",color:COLOUR.black}} >Order History</Text>
            </TouchableOpacity>
            <Rod/>
            <TouchableOpacity   
            style={{
              flexDirection:"row",
              margin:15,
              alignItems:"center"
            }}>      
            <Ionicons name="star-outline" size={25} color={COLOUR.themeBlue} />
            <Text style={{marginLeft:15,fontSize:15,fontWeight:"500",color:COLOUR.black}} >Rewards</Text>
            </TouchableOpacity>
            <Rod/>
            <TouchableOpacity   
            style={{
              flexDirection:"row",
              margin:15,
              alignItems:"center"
            }}>
             <AntDesign    name={"tago"} size={25} color={COLOUR.themeBlue} />
            <Text style={{marginLeft:15,fontSize:15,fontWeight:"500",color:COLOUR.black}} >Student discount</Text>
            </TouchableOpacity>
            
          
          
          </View>
 
          <Text style={{color:COLOUR.black,fontWeight:"600",marginLeft:15}}>Notifications</Text>
            <View style={{backgroundColor:"#dddd" ,borderRadius:30,margin:10}}>
            
            <TouchableOpacity   
            style={{
              flexDirection:"row",
              margin:15,
              alignItems:"center"
            }}>
            <MaterialIcons name={"notifications-none"} size={25} color={COLOUR.themeBlue} />
            <Text style={{marginLeft:15,fontSize:15,fontWeight:"500",color:COLOUR.black}} >Account details</Text>
            </TouchableOpacity>
            <Rod/>
            <TouchableOpacity   
            style={{
              flexDirection:"row",
              margin:15,
              alignItems:"center"
            }}>
            <FontAwesome    name={"location-arrow"} size={25} color={COLOUR.themeBlue} />
            <Text style={{marginLeft:15,fontSize:15,fontWeight:"500",color:COLOUR.black}} >Payment details</Text>
            </TouchableOpacity>    
          </View>
          <TouchableOpacity   
            style={{
              flexDirection:"row",
              margin:15,
              alignItems:"center"
            }}>
            <SimpleLineIcons  name={"logout"} size={25} color={COLOUR.themeRed} />
            <Text style={{marginLeft:15,fontSize:15,fontWeight:"500",color:COLOUR.themeRed}} >Log Out</Text>
            </TouchableOpacity>    
        </View>     
       
      </View>
    </NativeBaseProvider>
  );
};

export default Profile;

const styles = StyleSheet.create({});
