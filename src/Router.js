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

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Authh">
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Authh" component={Auth}  options={{headerShown: false}} />
  </Stack.Navigator>
);

const AppTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Menu" component={Menu} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Cart" component={Cart} />
  </Tab.Navigator>
);



const Router = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;

