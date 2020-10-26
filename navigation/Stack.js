import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        mode="modal"
        screenOptions={{
            headerStyle: {
                backgroundColor: 'black',
                borderBottomColor: 'black',
                shadowColor: 'black',
            },
            headerTintColor: 'white',
        }}
    >
        <Stack.Screen name="Tabs" component={Tabs}></Stack.Screen>
        <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
    </Stack.Navigator>
);
