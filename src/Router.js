import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Favorites from './pages/Favorites/Favorites';
import Profile from './pages/Profile/Profile';
import Cart from './pages/Cart/Cart';
import SplashScreen from './pages/Auth/SplashScreen';
import { View } from 'react-native';
import Auth from './pages/Auth/Auth';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import Icon from 'react-native-vector-icons/AntDesign';

const AuthStack = () => (
  <Stack.Navigator initialRouteName="SplasScreen">
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Authh" component={Auth}  options={{headerShown: false}} />
  </Stack.Navigator>
);

const AppTabs = () => (
  <Tab.Navigator >
    <Tab.Screen name="Home" component={Home} options={{headerShown: false,tabBarIcon: () => (
        <Icon name="home" color={"muted.400"} size={20} />
      ),}} />
    <Tab.Screen name="Menu" component={Menu} options={{headerShown: false,tabBarIcon: () => (
        <Icon name="bars" color={"muted.400"} size={20} />
      ),}} />
    <Tab.Screen name="Favorites" component={Favorites} options={{headerShown: false,tabBarIcon: () => (
        <Icon name="heart" color={"muted.400"} size={20} />
      ),}} />
    <Tab.Screen name="Profile" component={Profile} options={{headerShown: false,tabBarIcon: () => (
        <Icon name="profile" color={"muted.400"} size={20} />
      ),}} />
    <Tab.Screen name="Cart" component={Cart} options={{headerShown: false,tabBarIcon: () => (
        <Icon name="shoppingcart" color={"muted.400"} size={20} />
      ),}} />
  </Tab.Navigator>
);



const Router = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;

