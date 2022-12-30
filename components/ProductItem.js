import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'; //nieuw

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Pressable, Image, Button } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';


const ProductItem = props => { /*ProductItem*/
const navigation = useNavigation(); //nieuw
  return (
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Image source={require('../assets/sport-shoe.png')}></Image>
      </View>
  );
}
const styles = StyleSheet.create({
title:{
  fontSize:24,
  fontWeight: "bold",
},
link:{
  textDecorationLine: "underline",
  marginVertical:15
},
});
export default ProductItem;