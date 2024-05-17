import {Dimensions, StyleSheet} from 'react-native';
import {COLOUR} from '../../assets/settings';
const viewWidth=Dimensions.get("window").width;
const viewHeight=Dimensions.get("window").height;

const styles = StyleSheet.create({
    scrollContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      },

});

export default styles;
