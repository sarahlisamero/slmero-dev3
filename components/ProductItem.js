import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'; //nieuw

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image, Button } from 'react-native';


const ProductItem = props => { /*ProductItem*/
const navigation = useNavigation(); //nieuw
  return (
      <View style={styles.listItem}>
        <Text style={styles.title}>{props.title}</Text>
        <Text>{props.description}</Text>
        <Image source={{uri: props.image}}/*werkt niet*//> 
        <Pressable onPress={() => navigation.navigate("details")}/*nieuw*/> 
            <Text style={styles.link}>View {props.title}</Text>
          </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor:"#f7f7f7",
    margin: 15,
  },
title:{
  fontSize:24,
  fontWeight: "bold",
},
link:{
  textDecorationLine: "underline",
},
});
export default ProductItem;