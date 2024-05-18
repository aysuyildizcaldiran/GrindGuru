import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, StatusBar, ZStack } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { COLOUR } from '../../assets/settings';
import styles from './Profile.style';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation=useNavigation();
  const AppBar = () => (
    <>
      <StatusBar barStyle="light-content" />
      <ZStack flex={1} w="100%" marginBottom={50}>
        <Image
          source={require('../../assets/IMG/splash2.png')}
          style={styles.appBarImage}
        />
        <View style={styles.appBarTitleContainer}>
          <Text style={styles.appBarTitle}>Profile</Text>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require('../../assets/IMG/profile.png')}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.profileDetail}>
            <Text style={styles.profileName}>Aysu Yıldız Çaldıran</Text>
            <View style={styles.profilePointsContainer}>
              <Ionicons name="star" size={20} color={COLOUR.themeRed} />
              <Text style={styles.profilePoints}> 124 points</Text>
            </View>
          </View>
          <View style={styles.editIconContainer}>
            <TouchableOpacity>
            <MaterialCommunityIcons name="account-edit-outline" size={25} color={COLOUR.themedarkBlue} />
               </TouchableOpacity>
          </View>
        </View>
      </ZStack>
    </>
  );

  const Rod = () => <View style={styles.divider} />;

  return (
      <View style={styles.container}>
        <View style={styles.appBar}>
          <AppBar />
        </View>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.sectionItem}>
              <MaterialCommunityIcons name="clipboard-text-outline" size={25} color={COLOUR.themeBlue} />
              <Text style={styles.sectionText}>Account details</Text>
            </TouchableOpacity>
            <Rod />
            <TouchableOpacity style={styles.sectionItem}>
              <MaterialIcons name="attach-money" size={25} color={COLOUR.themeBlue} />
              <Text style={styles.sectionText}>Payment details</Text>
            </TouchableOpacity>
            <Rod />
            <TouchableOpacity style={styles.sectionItem}>
              <AntDesign name="calendar" size={25} color={COLOUR.themeBlue} />
              <Text style={styles.sectionText}>Order History</Text>
            </TouchableOpacity>
            <Rod />
            <TouchableOpacity style={styles.sectionItem}>
              <Ionicons name="star-outline" size={25} color={COLOUR.themeBlue} />
              <Text style={styles.sectionText}>Rewards</Text>
            </TouchableOpacity>
            <Rod />
            <TouchableOpacity style={styles.sectionItem}>
              <AntDesign name="tago" size={25} color={COLOUR.themeBlue} />
              <Text style={styles.sectionText}>Student discount</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Notifications</Text>
          <View style={styles.sectionContainer}>
            <TouchableOpacity style={styles.sectionItem}>
              <MaterialIcons name="notifications-none" size={25} color={COLOUR.themeBlue} />
              <Text style={styles.sectionText}>Account details</Text>
            </TouchableOpacity>
            <Rod />
            <TouchableOpacity style={styles.sectionItem}>
              <FontAwesome name="location-arrow" size={25} color={COLOUR.themeBlue} />
              <Text style={styles.sectionText}>Payment details</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={()=>{navigation.navigate("Authh")}}>
            <SimpleLineIcons name="logout" size={25} color={COLOUR.themeRed} />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default Profile;

