import {StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ButtonCompo from '../ButtonComponents/ButtonCompo';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AuthCompo = ({text,buttonText,textbuttonText}) => {
  const navigation = useNavigation();

    return (
        <View style={styles.container}>
        <TouchableOpacity
        style={styles.buttonContainer}
        onPress={()=>navigation.navigate("HomeApp")}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
      <View style={{height: '30%'}}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 5,
            justifyContent: 'center',
            height: 20,
          }}>
          <View
            style={{
              width: '28%',
              height: 1,
              backgroundColor: '#E65738',
              alignSelf: 'center',
              marginHorizontal: 15,
            }}
          />
          <Text style={{textAlign: 'center'}}>{text}</Text>
          <View
            style={{
              width: '28%',
              height: 1,
              backgroundColor: '#E65738',
              alignSelf: 'center',
              marginHorizontal: 15,
            }}
          />
        </View>
        <View
          style={{
            top:"3%",
            flexDirection: 'row',
            margin: 20,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FEE4D6',
              width: 100,
              height: 80,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
            }}>
            <Fontisto name="facebook" size={35} color="#900" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FEE4D6',
              width: 100,
              height: 80,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
            }}>
            <Fontisto name="google-plus" size={35} color="#900" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FEE4D6',
              width: 100,
              height: 80,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
            }}>
            <Fontisto name="apple" size={35} color="#900" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          top: '15%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 15}}>Already have an account?</Text>
        <ButtonCompo  variant={"link"}  text={textbuttonText} />
      </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    
    },
    buttonContainer: {
        alignSelf: 'center',
        backgroundColor: '#293441',
        paddingVertical: 15,
        marginBottom: "10%",
        borderRadius: 15,
        width: '60%',
        height:Dimensions.get("window").height/15
      },
      buttonText: {
        textAlign: 'center',
        color: 'white',
      },
});

//make this component available to the app
export default AuthCompo;
