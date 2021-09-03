import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '../../containers/pages'

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen" >
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

module.exports = {
    Router
}
