import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SearchAppBar from '../../components/AppBar/SearchAppBar';
import { COLOUR } from '../../assets/settings';

const Cart = ({navigation}) => {
  const CartView = ({text, totalText, style}) => {
    return (
      <View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          },
          style,
        ]}>
        <Text>{text}</Text>
        <Text>${totalText}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <SearchAppBar text={'My Cart'} icon={false} search={false} />
      </View>
      <View style={{flex: 3}}>
        <View style={{flex: 1}}>
          {Array.from({length: 2}).map((_, index) => (
            <View key={index} style={styles.cartView}>
              <View style={styles.imageView}>
                <Image
                  resizeMode="contain"
                  source={require('../../assets/IMG/7.png')}
                  style={styles.image}></Image>
              </View>
              <View style={styles.textView}>
                <Text style={styles.text}>Caramel Macchiato</Text>
                <Text style={styles.text}>Small,Oat milk</Text>
                <Text style={{fontWeight: '600'}}>$9.40</Text>
              </View>
              <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonTextt}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonTextt}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonTextt}>-</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
          <View style={styles.promoCodeView}>
            <Text style={styles.promoCodeText}>Promo code</Text>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#3232',
                flex: 0.4,
                borderRadius: 25,
              }}>
              <TextInput style={{flex: 0.5}}></TextInput>
              <TouchableOpacity
                style={{
                  backgroundColor: COLOUR.themeRed,
                  right: 0,
                  position: 'absolute',
                  height: '100%',
                  width: '30%',
                  borderRadius: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 15,
                    fontWeight: '400',
                  }}>
                  Apply
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={styles.footerView}>
            <CartView text={'Cart'} totalText={'12.40'} />
            <CartView text={'Discount'} totalText={'1.20'} />
            <CartView
              text={'Total'}
              totalText={'11.20'}
              style={{marginTop: 15}}
            />
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Check Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: '#293441',
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 25,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
  cartView: {
    flex: 0.4,
    flexDirection: 'row',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  imageView: {
    backgroundColor: 'gray',
    borderRadius: 25,
    flex: 0.3,
    justifyContent: 'center',
  },
  buttonView: {
    flex: 0.1,
    backgroundColor: COLOUR.themeRed,
    borderRadius: 25,
    justifyContent: 'space-around',
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  text: {
    fontWeight: '600',
    marginTop: 3,
  },
  button: {
    alignSelf: 'center',
  },
  buttonTextt: {
    color: 'white',
    fontWeight: '600',
  },
  promoCodeView: {
    flex: 0.4,
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  promoCodeText: {
    flex: 0.2,
    alignItems: 'center',
  },
  footerView:{
    flex: 1,
    marginHorizontal: 25,
    bottom: 0,
    justifyContent: 'center',
  }

});

export default Cart;
