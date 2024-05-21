import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLOUR} from '../../assets/settings';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import CoffeModal from './CoffeModal';
import {Modal, ZStack} from 'native-base';
const viewWidth = Dimensions.get('window').width;
const viewHeight = Dimensions.get('window').height;

const CoffeCompo = () => {
  const iconColorRef = useRef(false);
  const [, forceUpdate] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleFavorites = () => {
    iconColorRef.current = !iconColorRef.current;
    forceUpdate(prev => !prev);
  };

  const handleModal = newData => {
    setModalVisible(newData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={require('../../assets/IMG/7.png')}
          style={styles.image}
        />
        <TouchableOpacity
          style={[
            styles.favoritesContainer,
            {backgroundColor: iconColorRef.current ? COLOUR.themeRed : 'white'},
          ]}
          onPress={handleFavorites}>
          <EvilIcons
            name="heart"
            size={25}
            color={iconColorRef.current ? 'white' : COLOUR.themedarkBlue}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Caramel Macchiato</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>40.00 TL</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            handleModal(true);
          }}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Modal isOpen={modalVisible} style={styles.modal}>
        <CoffeModal isModal={handleModal}></CoffeModal>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: viewWidth / 2.5,
    height: viewHeight / 3.5,
    backgroundColor: 'white',
    borderRadius: 22,
    marginVertical: viewWidth / 35,
    padding: viewWidth / 20,
    paddingBottom: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    backgroundColor: 'gray',
    borderRadius: 10,
    width: viewWidth / 3.5,
    height: viewHeight / 7,
    alignItems: 'center',
  },
  image: {
    height: viewWidth / 4,
    width: viewHeight / 8,
  },
  title: {
    width: viewWidth / 3.5,
    fontWeight: '500',
    color: COLOUR.black,
    textAlign: 'center',
  },
  favoritesContainer: {
    borderRadius: 10,
    alignItems: 'center',
    width: viewWidth / 15,
    height: viewHeight / 30,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  modal: {
    flex:1,
    backgroundColor: 'white',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: viewWidth / 2.5,
  },
  price: {
    marginLeft: viewWidth / 20,
    color: COLOUR.black,
    fontWeight: '500',
  },
  addButton: {
    backgroundColor: COLOUR.themeRed,
    width: viewWidth / 10,
    height: viewHeight / 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default CoffeCompo;
