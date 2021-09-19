import React from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    SplashScreen,
    Home,
    Features,
    Profile,
    Welcome,
    OnBoarding,
    Auth,
    Login,
    Register,
    HelpDetail,
    TawarBantuan,
    HelpInput
} from '../../containers/pages'
import { TabIcon, FeaturesButton, TabItemActive } from '../../components'
import { Colors } from '../../utils'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainPages = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.bottomNavigation
        }} >
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    if (focused) {
                        return (<TabItemActive img={require('../../assets/icon/home.png')} title="Home" />)
                    } else {
                        return (
                            <TabIcon img={require('../../assets/icon/home.png')} />
                        )
                    }

                }
            }} name="Home" component={Home} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    if (focused) {
                        return (<FeaturesButton active top={-13} content={<TabIcon img={require('../../assets/icon/heart.png')} width={31} height={31} />} />)
                    } else {
                        return (
                            <FeaturesButton top={-13} content={<TabIcon img={require('../../assets/icon/heart.png')} width={31} height={31} />} />
                        )
                    }

                }
            }} name="Features" component={Features} />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => {
                    if (focused) {
                        return (<TabItemActive img={require('../../assets/icon/profile.png')} title="Profile" textLeft />)
                    } else {
                        return (
                            <TabIcon img={require('../../assets/icon/profile.png')} />
                        )
                    }

                }

            }} name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

const Router = () => {
    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor={Colors.primary}
                barStyle='light-content'
            />
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen" >
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="OnBoarding" component={OnBoarding} />
                <Stack.Screen name="Auth" component={Auth} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="MainPages" component={MainPages} />
                <Stack.Screen name="HelpDetail" component={HelpDetail} />
                <Stack.Screen name="TawarBantuan" component={TawarBantuan} />
                <Stack.Screen name="HelpInput" component={HelpInput} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router

const styles = StyleSheet.create({
    bottomNavigation: {
        height: 70,
        color: '#FFFFFF',
        paddingHorizontal: 24,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    }
})
