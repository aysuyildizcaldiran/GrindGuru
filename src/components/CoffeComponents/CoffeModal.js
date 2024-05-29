import {VStack, ZStack} from 'native-base';
import React, {useRef, useState,useReducer} from 'react';
import {View, Text, Image, TouchableOpacity, Touchable} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './CoffeModal.style';
import {COLOUR} from '../../assets/settings';
import ButtonCompo from '../ButtonComponents/ButtonCompo';
import reducer from '../../Reducer';

const CoffeModal = ({isModal}) => {
  const iconColorRef = useRef(false);
  const [, forceUpdate] = useState(false);
  const [count, setCount] = useState(0);
  const [size, setSize] = useState("250");

  const countAdd = () => {
    setCount(count + 1);
  };
  const countRemove = () => {
    count > 0 && setCount(count - 1);
  };

  const handleFavorites = () => {
    iconColorRef.current = !iconColorRef.current;
    forceUpdate(prev => !prev);
  };

  const handleBack = () => {
    isModal(false);
  };

  const SizeButton = ({text,size}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleColor=()=>{
      dispatch({ type: 'TOGGLE_COLOR' });
      setSize(size);
    }
    return (
      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.14,
          shadowRadius: 0.27,
          elevation: 5,
          borderRadius: 50,
          backgroundColor: state.color ? "red" :"white",
        }} onPress={handleColor}>
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  };
  
  return (
    <>
      <ZStack flex={0.7} w="100%" marginBottom={0}>
        <Image
          source={require('../../assets/IMG/splash2.png')}
          style={styles.tabimage}></Image>
        <View style={styles.tabView}>
          <VStack>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <Ionicons name="chevron-back" size={30} color={'white'} />
            </TouchableOpacity>
          </VStack>

          <VStack>
            <TouchableOpacity
              style={[
                styles.favoritesButton,
                {
                  backgroundColor: iconColorRef.current
                    ? COLOUR.themeRed
                    : 'white',
                },
              ]}
              onPress={handleFavorites}>
              <EvilIcons
                name="heart"
                size={30}
                color={iconColorRef.current ? 'white' : COLOUR.themedarkBlue}
              />
            </TouchableOpacity>
          </VStack>
        </View>
        <View style={styles.imageView}>
          <Image
            source={require('../../assets/IMG/7.png')}
            resizeMode="center"
            style={styles.coffeImage}></Image>
        </View>
        <View style={styles.coffeCountView}>
          <TouchableOpacity onPress={countAdd}>
            <Text style={styles.coffeAdd}>+</Text>
          </TouchableOpacity>
          <Text style={styles.coffeCountText}>{count}</Text>
          <TouchableOpacity onPress={countRemove}>
            <Text style={styles.coffeRemove}>-</Text>
          </TouchableOpacity>
        </View>
      </ZStack>
      <View style={{ marginTop:50,flex: 2,justifyContent:"center"}}>
        <Text style={{fontSize: 20, fontWeight: '800', bottom: 20}}>
          Caramel Macchiato
        </Text>
        <Text style={{fontSize: 15, fontWeight: '500'}}>
          Caramel Macchiato Macchiato %1,8 Yağlı süt (%75), 
          Starbucks® Arabica kahve (su ve kahve ekstraktı) (%20), 
          şeker (%5), aroma, asitlik düzenleyici (potasyum karbonat), 
          stabilizatörler (karragenan, guar gum), emülgatörler 
          (sebze kökenli yağ asidi mono- ve digliseritleri).
        </Text>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <Text style={[styles.coffeCountText, {color: 'black'}]}>Size</Text>
            <Text style={[styles.coffeCountText, {color: 'black'}]}>{size+"ml"}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 30,
            }}>
            <SizeButton text="Small" size="250"></SizeButton>
            <SizeButton text="Medium" size="500"></SizeButton>
            <SizeButton text="Large" size="750"></SizeButton>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 100,
            }}>
            <Text style={{width:80,fontSize:15,fontWeight:"600"}}>Total Price 40 TL</Text>
            <TouchableOpacity
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default CoffeModal;
