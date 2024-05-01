import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import React, {useState} from 'react';
import {
  Button,
  NativeBaseProvider,
  StatusBar,
  VStack,
  ZStack,
  Badge,
} from 'native-base';
import {Searchbar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLOUR } from '../../assets/settings';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

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
              Good morning , Aysu
            </Text>
            <VStack>
              <Badge
                colorScheme="danger"
                rounded="full"
                mb={-4}
                mr={-2.5}
                zIndex={1}
                variant="solid"
                alignSelf="flex-end"
                _text={{
                  fontSize: 12,
                }}>
                2
              </Badge>
              <Ionicons name="notifications" size={30} color={'white'} />
            </VStack>
          </View>
          <View style={{top: '80%', alignSelf: 'center', width: '85%'}}>
            <Searchbar
              placeholder="Search"
              onChangeText={setSearchQuery}
              value={searchQuery}
              loading={true}
            />
          </View>
        </ZStack>
      </>
    );
  }

  return (
    <NativeBaseProvider>
      <View style={{flex: 2}}>
        <AppBar />
        <View style={{flex: 1}}>
          <ScrollView
          showsHorizontalScrollIndicator={false}
horizontal={true}
            >
             <View style={{flexDirection:"row"}} >
              <View
              style={{
                flexDirection: 'column',
                width: 150,
                height: 200,
                backgroundColor: 'white',
                borderRadius:22,
                marginHorizontal:10
              }}>
                <View style={{backgroundColor:"gray",borderRadius:10,width:100,alignSelf:"center",margin:10}}>
              <Image
                resizeMode='contain'
                source={require('../../assets/IMG/8.png')}
                style={{
                  height: 100,
                  width: 50,
                  alignSelf:"center"
                }}></Image></View>
              <Text>Caramel Macchiato</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between',bottom:-10}}>
                <Text>40.00 TL</Text>
                <TouchableOpacity style={{backgroundColor:COLOUR.themeRed,width:30,height:35,borderBottomRightRadius:10,borderTopLeftRadius:20}}>
                  <Text style={{alignSelf:"center",top:5}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'column',
                width: 150,
                height: 200,
                backgroundColor: 'white',
                borderRadius:22,
                marginHorizontal:10
              }}>
                <View style={{backgroundColor:"gray",borderRadius:10,width:100,alignSelf:"center",margin:10}}>
              <Image
                resizeMode='contain'
                source={require('../../assets/IMG/8.png')}
                style={{
                  height: 100,
                  width: 50,
                  alignSelf:"center"
                }}></Image></View>
              <Text>Caramel Macchiato</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between',bottom:-10}}>
                <Text>40.00 TL</Text>
                <TouchableOpacity style={{backgroundColor:COLOUR.themeRed,width:30,height:35,borderBottomRightRadius:10,borderTopLeftRadius:20}}>
                  <Text style={{alignSelf:"center",top:5}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'column',
                width: 150,
                height: 200,
                backgroundColor: 'white',
                borderRadius:22,
                marginHorizontal:10
              }}>
                <View style={{backgroundColor:"gray",borderRadius:10,width:100,alignSelf:"center",margin:10}}>
              <Image
                resizeMode='contain'
                source={require('../../assets/IMG/8.png')}
                style={{
                  height: 100,
                  width: 50,
                  alignSelf:"center"
                }}></Image></View>
              <Text>Caramel Macchiato</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between',bottom:-10}}>
                <Text>40.00 TL</Text>
                <TouchableOpacity style={{backgroundColor:COLOUR.themeRed,width:30,height:35,borderBottomRightRadius:10,borderTopLeftRadius:20}}>
                  <Text style={{alignSelf:"center",top:5}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
 
 </View>
              
           
            
          </ScrollView>
        </View>
        <View style={{flex: 2,marginTop:20}}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
horizontal={false}
            >
             <View style={{flexDirection:"column"}} >
              <View
              style={{
                flexDirection: 'row',
                width: "90%",
                height: 150,
                backgroundColor: 'white',
                borderRadius:22,
                marginHorizontal:20
              }}>
                <View style={{backgroundColor:"gray",borderRadius:10,width:100,alignSelf:"center",margin:10}}>
              <Image
                resizeMode='contain'
                source={require('../../assets/IMG/8.png')}
                style={{
                  height: 100,
                  width: 500,
                  alignSelf:"center"
                }}></Image></View>
             
              <View
                style={{flexDirection: 'column', justifyContent: 'space-between',bottom:-10}}>
                   <Text>Caramel Macchiato</Text>
                <Text>40.00 TL</Text>
                <TouchableOpacity style={{backgroundColor:COLOUR.themeRed,width:30,height:35,borderBottomRightRadius:10,borderTopLeftRadius:20}}>
                  <Text style={{alignSelf:"center",top:5}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
           
 
 </View>
              
           
            
          </ScrollView>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

export default Home;

const styles = StyleSheet.create({});
