import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import SearchAppBar from '../../components/AppBar/SearchAppBar';
import styles from './Home.style';

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

  function ScrollElement2({title, imageSource, price}) {
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

  return (
    <View style={styles.container}>
      <SearchAppBar text={'Good morning , User'} icon={true} />
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
          <ScrollElement2
            title="Caramel Latte"
            imageSource={require('../../assets/IMG/8.png')}
            price="40.00 TL"
          />
          <ScrollElement2
            title="Vanilla Latte"
            imageSource={require('../../assets/IMG/8.png')}
            price="45.00 TL"
          />
          <ScrollElement2
            title="Mocha Latte"
            imageSource={require('../../assets/IMG/8.png')}
            price="42.00 TL"
          />
          <ScrollElement2
            title="Hazelnut Latte"
            imageSource={require('../../assets/IMG/7.png')}
            price="38.00 TL"
          />
          <ScrollElement2
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
