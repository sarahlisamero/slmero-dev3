import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';

const Stack = createNativeStackNavigator();

const cart = ({navigation, route}) =>{

    return (
        <View>
           <Text>
            winkelkarretje
            
           </Text>
        </View>
    )
}

export default cart;