import { StyleSheet, Text, View,Image ,TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'
import { COLOUR } from '../../assets/settings'
const viewWidth=Dimensions.get("window").width;
const viewHeight=Dimensions.get("window").height;

const LnCoffeCompo = ({imageSource,title,price}) => {
    return (
        <View style={styles.scrollElementContainer2}>
          <View style={styles.scrollImageElementContainer2}>
            <View style={styles.scrollImageElementView2}>
              <Image
                resizeMode="contain"
                source={imageSource}
                style={styles.imageView2}></Image>
            </View>
            <View style={styles.scrollfooterView}>
              <Text style={styles.scrollTitle2}>{title}</Text>
              <View style={styles.scrollPriceView2}>
                <Text style={styles.scrollPriceTitle2}>{price}</Text>
                <TouchableOpacity style={styles.scrollButtonView2}>
                  <Text style={styles.scrollButtonTitle2}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      );
}

export default LnCoffeCompo

const styles = StyleSheet.create({  
  addButtonText: {
  alignSelf: 'center',
  top: 5,
  color: 'white',
  fontSize: 20,
},
scrollElementContainer2: {
  flexDirection: 'column',
  marginVertical: 10,
},
scrollImageElementContainer2: {
  flexDirection: 'row',
  justifyContent:"space-between",
  width: viewWidth/1.1,
  height: viewHeight/7.5,
  backgroundColor: 'white',
  borderRadius: 25,
  marginHorizontal: 20,
},
scrollImageElementView2: {
  backgroundColor: 'gray',
  borderRadius: 25,
  width: viewWidth/4,
  height: viewHeight/7.5,
  justifyContent:"center"
},
imageView2: {
  height: viewHeight/9,
  width: viewWidth/5,
  alignSelf: 'center',
},
scrollfooterView: {
  flexDirection: 'column',
  width: viewWidth/1.6,
  height: "100%",
  marginLeft: 10,
  borderRadius: 20,
},
scrollTitle2: {
  marginTop: 10,
  marginLeft: 10,
  width: viewWidth/2 ,
  fontWeight: '500',
  color: COLOUR.black,
},
scrollPriceView2: {
  position: 'absolute',
  bottom: 0,
  height: "50%",
  width: "100%",
},
scrollPriceTitle2: {
  left: 10,
  color: COLOUR.black,
  fontWeight: '500',
},
scrollButtonView2: {
  backgroundColor: COLOUR.themeRed,
  bottom: 0,
  alignSelf:"flex-end",
  width: "20%",
  height: "67%",
  borderBottomRightRadius: 20,
  borderTopLeftRadius: 20,
},
scrollButtonTitle2: {
  alignSelf: 'center',
  top: 5,
  color: 'white',
  fontSize: 20,
},
});