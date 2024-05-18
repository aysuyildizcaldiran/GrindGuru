import {Dimensions, StyleSheet} from 'react-native';
import {COLOUR} from '../../assets/settings';
const viewWidth=Dimensions.get("window").width;
const viewHeight=Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    marginTop:viewHeight/25,
    flex: 1.5,
  },
  sectionTitle: {
    fontWeight: '600',
    color: 'black',
    marginHorizontal: 20,
    fontSize: 18,
  },
  scrollView: {
    marginVertical: 10,
  },
  scrollContent: {
    flexDirection: 'row',
  },
  scrollElementContainer: {
    flexDirection: 'column',
    width: viewWidth / 3,
    height: viewHeight / 4,
    backgroundColor: 'white',
    borderRadius: 22,
    justifyContent: 'space-around',
    marginHorizontal: viewWidth / 39,
  },
  scrollElementImageContainer: {
    backgroundColor: 'gray',
    borderRadius: 10,
    height: viewHeight / 8,
    width: viewWidth / 4,
    alignSelf: 'center',
    margin: 10,
  },
  scrollElementImage: {
    height: viewHeight / 9,
    width: viewWidth / 4,
    alignSelf: 'center',
  },
  scrollElementTitle: {
    marginLeft: 10,
    width: viewWidth / 4,
    height: viewHeight / 20,
    fontWeight: '500',
    color: COLOUR.black,
  },
  scrollElementFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollElementPrice: {
    marginLeft: 10,
    color: COLOUR.black,
    fontWeight: '500',
  },
  addButton: {
    backgroundColor: COLOUR.themeRed,
    width: viewWidth/10,
    height: viewHeight/22,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  addButtonText: {
    alignSelf: 'center',
    top: 5,
    color: 'white',
    fontSize: 20,
  },
});

export default styles;
