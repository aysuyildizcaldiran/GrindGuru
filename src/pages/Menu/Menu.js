import { Text, View,ScrollView ,Image ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import SearchAppBar from '../../components/AppBar/SearchAppBar'
import Fontisto from 'react-native-vector-icons/Fontisto';
import CoffeCompo from '../../components/CoffeComponents/CoffeCompo';
import styles from './Menu.style';

function ScroolElement({title,onPress}) {
  return (
    <TouchableOpacity style={styles.scrollContainer} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Fontisto style={styles.icon} name="coffeescript" size={20} color="white" />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const Menu = () => {
  return (
    <View style={styles.container}> 
      <View style={styles.appBarContainer}>
        <SearchAppBar text="Menu" icon={false} />
      </View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesTitle}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          <View style={styles.scroolElementsContainer}>
            <ScroolElement title="Caramel Macchiato" />
            <ScroolElement title="Espresso"  />
            <ScroolElement title="Latte" />
          </View>
        </ScrollView>
      </View>
      <View style={styles.coffeeListContainer}>
        <ScrollView contentContainerStyle={styles.coffeeScrollContainer}>
          {Array.from({ length: 15 }, (_, index) => (
            <CoffeCompo key={index} index={index} />
          ))}
        </ScrollView>
      </View>
      </View>
  )
}

export default Menu;
