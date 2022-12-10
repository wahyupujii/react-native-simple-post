import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login, Home, DetailPost } from '../screens';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
        >
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Detail Post' component={DetailPost} />
        </Stack.Navigator>
    )
}

export default StackNavigation