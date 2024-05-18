import { Dimensions, StyleSheet } from "react-native";
import { COLOUR } from "../../assets/settings";
const viewWidth=Dimensions.get("window").width;
const viewHeight=Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    appBar: {
      flex: 1,
    },
    content: {
      flex: 3,
    },
    appBarImage: {
      height: viewHeight/6,
      width: viewWidth,
      borderBottomLeftRadius: viewWidth/12,
      borderBottomRightRadius: viewWidth/12,
    },
    appBarTitleContainer: {
      position: 'absolute',
      bottom: viewHeight/15,
      left: viewWidth/10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: viewWidth/2,
    },
    appBarTitle: {
      color: 'white',
      fontSize: 20,
    },
    profileContainer: {
      position: 'absolute',
      top: viewHeight/8,
      alignSelf: 'center',
      width: viewWidth/1.2,
      height: viewHeight/12,
      backgroundColor: '#dddddd',
      borderRadius: viewHeight/8,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    profileImageContainer: {
      backgroundColor: 'white',
      borderRadius: 25,
      width: viewWidth/8,
      height: viewHeight/16,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight:10,
      marginHorizontal: 2,
    },
    profileImage: {
        width: viewWidth/8,
        height: viewHeight/16,
    },
    profileDetail:{
      justifyContent:"center",
      alignSelf:"center",
      marginBottom:viewWidth/40
    },
    profileName: {
      fontWeight: '500',
      color: COLOUR.black,
      marginTop: 10,
    },
    profilePointsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profilePoints: {
      fontWeight: '500',
      color: COLOUR.black,
    },
    editIconContainer: {
      position: 'absolute',
      right: viewWidth/20,
      marginVertical: 5,
    },
    divider: {
      width: viewWidth/1.15,
      backgroundColor: 'gray',
      height: 1,
      alignSelf: 'center',
    },
    sectionTitle: {
      color: COLOUR.black,
      fontWeight: '600',
      marginLeft: viewWidth/20,
    },
    sectionContainer: {
      backgroundColor: '#dddd',
      borderRadius: 30,
      margin: viewWidth/25,
    },
    sectionItem: {
      flexDirection: 'row',
      margin: viewWidth/30,
      alignItems: 'center',
    },
    sectionText: {
      marginLeft: viewWidth/25,
      fontSize: 15,
      fontWeight: '500',
      color: COLOUR.black,
    },
    logoutButton: {
      flexDirection: 'row',
      margin: viewWidth/25,
      marginTop:0,
      alignItems: 'center',
    },
    logoutText: {
      marginLeft: viewWidth/25,
      fontSize: 15,
      fontWeight: '500',
      color: COLOUR.themeRed,
    },
  });

  export default styles;
  