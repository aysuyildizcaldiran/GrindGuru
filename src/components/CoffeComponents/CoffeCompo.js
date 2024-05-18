import { StyleSheet, Text, View, Image, TouchableOpacity ,Dimensions} from 'react-native';
import React from 'react';
import { COLOUR } from '../../assets/settings';
const viewWidth=Dimensions.get("window").width;
const viewHeight=Dimensions.get("window").height;
const CoffeCompo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={require('../../assets/IMG/7.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>Caramel Macchiato</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>40.00 TL</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: viewWidth/2.5,
    height: viewHeight/3.5,
    backgroundColor: 'white',
    borderRadius: 22,
    marginVertical: viewWidth/35,
    padding: viewWidth/20,
    paddingBottom:0,
    alignItems: 'center',
    justifyContent:"space-between",
  },
  imageContainer: {
    backgroundColor: 'gray',
    borderRadius: 10,
    width: viewWidth/4,
    height: viewHeight/8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: viewWidth/4,
    width: viewHeight/8
  },
  title: {
    width: viewWidth/3.5,
    fontWeight: '500',
    color: COLOUR.black,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: viewWidth/2.5,
  },
  price: {
    marginLeft: viewWidth/20,
    color: COLOUR.black,
    fontWeight: '500',
  },
  addButton: {
    backgroundColor: COLOUR.themeRed,
    width: viewWidth/10,
    height: viewHeight/20,
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
