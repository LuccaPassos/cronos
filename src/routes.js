import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Cronograma from './Cronograma';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={ {headerShown: false}}>
                <AppStack.Screen name="Cronograma" component={Cronograma} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}