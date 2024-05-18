import { StyleSheet, Text, View ,Image} from 'react-native'
import React, { useState } from 'react'
import {
    VStack,
    ZStack,
    Badge,
  } from 'native-base';
import {Searchbar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchAppBar = ({text,icon,search}) => {
    const [searchQuery, setSearchQuery] = useState('');
  return (
    <> 
    <ZStack flex={1} w="100%" marginBottom={0}>
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
          {text}
        </Text>
        {icon ?  
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
        </VStack> : <></>}
       
      </View>
      {search ?    
       <View style={{top: '80%', alignSelf: 'center', width: '85%'}}>
       <Searchbar
         placeholder="Search"
         onChangeText={setSearchQuery}
         value={searchQuery}
         //loading={true}
       />
     </View>
      : <></>}
     
    </ZStack>
    </>
  )
}

export default SearchAppBar