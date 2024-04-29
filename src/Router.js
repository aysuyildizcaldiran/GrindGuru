import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Favorites from './pages/Favorites/Favorites';
import Profile from './pages/Profile/Profile';
import Cart from './pages/Cart/Cart';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import SplashScreen from './pages/Auth/SplashScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="SplashScreen">
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
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

