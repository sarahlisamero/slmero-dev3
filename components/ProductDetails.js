
/*import { useNavigation } from '@react-navigation/native'; //nieuw

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Pressable, Image, Button } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';


const ProductDetails = props => { 
const navigation = useNavigation(); //nieuw
  return (
      <View>
        <Text>{props.title}</Text>
        <Text>{props.description}</Text>
      </View>
  );
}
export default ProductDetails;*/

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'; //nieuw

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Pressable, Image, Button } from 'react-native';


const ProductDetails = props => { /*ProductItem*/
  return (
      <View>
        <Text>{props.title}</Text>
        <Image source={require('../assets/sport-shoe.png')}></Image>
        <Text>{props.description}</Text>
        <Image source={{uri: `${props.image}`}}/> 
      </View>
  );
}

export default ProductDetails;