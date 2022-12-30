import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';
import ProductDetails from '../components/ProductDetails';

const Stack = createNativeStackNavigator();
/*const Details = ({navigation, route}) =>{

    return (
        <View>
           <Text>
            detaaails
            
           </Text>
        </View>
    )
}
export default Details;*/

const Details = ({navigation, route}) =>{

    return (
        <View>
            <ProductDetails
            title={route.params.itemTitle}
            />
           <Text>
           {route.params.itemDesc} 
           </Text>
        </View>
    )
}
console.log(Details)
export default Details;


