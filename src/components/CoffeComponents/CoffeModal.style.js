import { Dimensions, StyleSheet } from 'react-native';
import { COLOUR } from '../../assets/settings';
const viewWidth=Dimensions.get("window").width;
const viewHeight=Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      alignSelf: 'flex-end',
      backgroundColor: '#293441',
      paddingVertical: 15,
      borderRadius: 15,
      width: '60%',
      height:Dimensions.get("window").height/15,
      justifyContent: 'center',
    },
    buttonText: {
      textAlign: 'center',
      color: 'white',
    
    },
    tabimage:{
      height: '100%',
      width: '100%',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
     tabView:{
      bottom: '60%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf:"center",
      width: '90%',
     
     },
     backButton:{
      borderRadius:20,
      alignItems: 'center',
      width:viewWidth/10,height:viewHeight/20,
      justifyContent:"center",
     },
     favoritesButton:{
      borderRadius:20,
      alignItems: 'center',
      width:viewWidth/10,height:viewHeight/20,
      justifyContent:"center",
      alignSelf:"flex-end"
     },
     imageView:{
      alignSelf: 'center',
      width: '100%',
      height: viewHeight / 4,
      top: viewHeight / 7,
      alignItems: 'center',
     },
     coffeImage:{
      height: '100%',
      width: '100%',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
     },
     coffeCountView:{
      alignSelf: 'flex-start',
      width: '8%',
      height: viewHeight / 8,
      top: viewHeight / 4.5,
      backgroundColor: COLOUR.themeRed,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 2,
      marginLeft: 20,
     },
     coffeAdd:{fontSize: 16, fontWeight: '600', color: 'white'},
     coffeRemove:{fontSize: 20, fontWeight: '800', color: 'white'},
     coffeCountText:{fontSize: 16, fontWeight: '600', color: 'white'}
  });

export default styles;
  