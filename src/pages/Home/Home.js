import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import SearchAppBar from '../../components/AppBar/SearchAppBar';
import styles from './Home.style';
import LnCoffeCompo from '../../components/CoffeComponents/LnCoffeCompo';

const Home = () => {
  function ScroolElement({imageSource, title, price}) {
    return (
      <View style={styles.scrollElementContainer}>
        <View style={styles.scrollElementImageContainer}>
          <Image
            resizeMode="contain"
            source={imageSource}
            style={styles.scrollElementImage}></Image>
        </View>
        <Text style={styles.scrollElementTitle}>{title}</Text>
        <View style={styles.scrollElementFooter}>
          <Text style={styles.scrollElementPrice}>{price}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchAppBar text={'Good morning , Aysu Yıldız'} icon={true} />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>New in</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.scrollView}>
          <View style={styles.scrollContent}>
            <ScroolElement
              title={'Caramel Machito'}
              imageSource={require('../../assets/IMG/7.png')}
              price="40.00 TL"
            />
            <ScroolElement
              title={'Hazelnut Latte'}
              imageSource={require('../../assets/IMG/8.png')}
              price="40.00 TL"
            />
            <ScroolElement
              title={'Vanilla Cappuccino'}
              imageSource={require('../../assets/IMG/7.png')}
              price="40.00 TL"
            />
            <ScroolElement
              title={'Mocha Frappe'}
              imageSource={require('../../assets/IMG/8.png')}
              price="40.00 TL"
            />
            <ScroolElement
              title={'Cinnamon Dolce Latte'}
              imageSource={require('../../assets/IMG/8.png')}
              price="40.00 TL"
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Frequently ordered</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          style={styles.scrollView}>
          <LnCoffeCompo
            title="Caramel Latte"
            imageSource={require('../../assets/IMG/8.png')}
            price="40.00 TL"
          />
          <LnCoffeCompo
            title="Vanilla Latte"
            imageSource={require('../../assets/IMG/8.png')}
            price="45.00 TL"
          />
          <LnCoffeCompo
            title="Mocha Latte"
            imageSource={require('../../assets/IMG/8.png')}
            price="42.00 TL"
          />
          <LnCoffeCompo
            title="Hazelnut Latte"
            imageSource={require('../../assets/IMG/7.png')}
            price="38.00 TL"
          />
          <LnCoffeCompo
            title="Cappuccino"
            imageSource={require('../../assets/IMG/7.png')}
            price="36.00 TL"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
