import {VStack, ZStack} from 'native-base';
import React, {useRef, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './CoffeModal.style';
import {COLOUR} from '../../assets/settings';
import ButtonCompo from '../ButtonComponents/ButtonCompo';

const CoffeModal = ({isModal}) => {
  const iconColorRef = useRef(false);
  const [, forceUpdate] = useState(false);
  const [count, setCount] = useState(0);
  const [selectedSize, setSelectedSize] = useState('0'); // State for selected size

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

  const handleSizePress = (size) => {
    setSelectedSize(size);
  };

  const SizeButton = ({text,size}) => {
    const isSelected = selectedSize === size;
    return (
      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
          backgroundColor: isSelected ? COLOUR.themeRed : 'white',
        }}
        onPress={() => handleSizePress(size)}
      >
        <Text style={{ color: isSelected ? 'white' : 'black' }}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <ZStack flex={1} w="100%" marginBottom={"20%"}>
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
            resizeMode="contain"
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
      <View style={{flex: 2, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: '800', bottom: 20 }}>
          Caramel Macchiato
        </Text>
        <Text style={{ fontSize: 15, fontWeight: '500' }}>
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
              top: "15%",
              flex:0.1
            }}>
            <Text style={[styles.coffeCountText, { color: 'black' }]}>Size</Text>
            <Text style={[styles.coffeCountText, { color: 'black' }]}>{selectedSize}ml</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              flex:0.3,
              top:"20%"
            }}>
            <SizeButton text="Small" size="250"/>
            <SizeButton text="Medium"  size="500"/>
            <SizeButton text="Large" size="700"/>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex:0.4,
            
            }}>
            <Text style={{ width: 80, fontSize: 15, fontWeight: "600",alignSelf:"flex-end",bottom:"3%"}}>Total Price 40 TL</Text>
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
