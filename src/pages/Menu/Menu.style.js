import {Dimensions, StyleSheet} from 'react-native';
import {COLOUR} from '../../assets/settings';
const viewWidth = Dimensions.get('window').width;
const viewHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container:{flex:1},
  appBarContainer: {flex: 1},
  categoriesContainer: {
    flex: 1, 
    paddingHorizontal: viewWidth/22,
    paddingTop:20
  },
  categoriesTitle: {
    fontWeight: '600', 
    color: 'black', 
    fontSize: 18,
    marginBottom:viewWidth/26
  },
  scrollView: {
    paddingHorizontal: viewWidth/250
  },
  scroolElementsContainer: {
    flexDirection: 'row',
  },
  coffeeListContainer: {
    flex: 4
  },
  coffeeScrollContainer: {
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between",
    paddingHorizontal:20
  },

  //SCROLL
  scrollContainer: {
    flexDirection: 'row',
    width: 200,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 22,
    marginHorizontal: 10,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  iconContainer: {
    backgroundColor: 'gray',
    borderRadius: 25,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
  text: {
    fontWeight: '500',
    color: COLOUR.black,
    alignSelf: 'center',
    marginLeft: 10,
  },
});

export default styles;
