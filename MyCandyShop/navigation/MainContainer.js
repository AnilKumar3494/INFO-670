import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// export { StatusBar } from 'expo-status-bar'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

//importing screens
import NewHomeScreen from './screens/NewHomeScreen'
import Profile from './screens/Profile'
import Cart from './screens/Cart'


//Screen Names
const homeName = 'Home'
const profileName = 'Profile'
const cartName = 'Cart'

const Tab = createBottomTabNavigator();

const MainContainer = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === cartName) {
                            iconName = focused ? 'cart' : 'cart-outline'
                        } else if (rn === profileName) {
                            iconName = focused ? 'person' : 'person-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'grey',
                    tabBarLabelStyle: { paddingBottom: 5, fontSize: 10 }
                })}
            >

                <Tab.Screen name={homeName} component={NewHomeScreen} />
                <Tab.Screen name={profileName} component={Profile} />
                <Tab.Screen name={cartName} component={Cart} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainContainer

const styles = StyleSheet.create({})