import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';

const Stack = createNativeStackNavigator();

import ProductDetails from '../components/ProductDetails';

const details = ({route}) => {
    const {productId} = route.params;

    return (
        <View>
          <ProductDetails productId={productId} />
        </View>
      );
}
/*const details = ({navigation, route}) =>{

    return (
        <View>
           <Text>
            detaaails
            
           </Text>
        </View>
    )
}*/
/*const details = ({navigation, route}) =>{

    return (
        <View>
           <Text>
            {route.params.itemTitle}
            
           </Text>
        </View>
    )
}*/
export default details;