import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'; //nieuw

import { View, Text, StyleSheet, Image } from 'react-native';


const ProductItem = props => { /*ProductItem*/
const navigation = useNavigation(); //nieuw
  return (
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Image style={styles.cover}
        source={{ uri: `${props.image}` }}
        />
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
cover:{
  width:324,
  height:300,
  marginVertical:10
}
});
export default ProductItem;
