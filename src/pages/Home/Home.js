import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
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
import {COLOUR} from '../../assets/settings';
import SearchAppBar from '../../components/AppBar/SearchAppBar';

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

  function ScroolElement1() {
    return (
      <View
        style={{
          flexDirection: 'column',
          width: 140,
          height: 200,
          backgroundColor: 'white',
          borderRadius: 22,
          marginHorizontal: 10,
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
    );
  }

  function ScroolElemt2() {
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

  return (
    <NativeBaseProvider>
      <View style={{flex: 2}}>
       <SearchAppBar text={"Good morning , Aysu"} icon={true}/>
        <View style={{flex: 2}}>
        <Text style={{fontWeight:"600",color:"black",marginHorizontal:20,fontSize:18}}>New in</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}  style={{marginVertical:10}}>
            <View style={{flexDirection: 'row'}}>
              <ScroolElement1 />
              <ScroolElement1 />
              <ScroolElement1 />
              <ScroolElement1 />
            </View>
          </ScrollView>
        </View>
        <View style={{flex: 2}}>
          <Text style={{fontWeight:"600",color:"black",marginHorizontal:20,fontSize:18}}>Frequentely ordered</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={false} style={{marginVertical:10}}>
            <ScroolElemt2 /> 
            <ScroolElemt2 />
            <ScroolElemt2 />
          </ScrollView>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

export default Home;

const styles = StyleSheet.create({});
