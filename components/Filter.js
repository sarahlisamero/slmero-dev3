import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable, Button} from 'react-native';
import ProductItem from '../components/ProductItem'; 


const Filter = ({data, input, setInput, navigation})=> { 
   const [pressCounter, setPressCounter] = useState(0);
   function pressHandler() {
      console.log("pressed ");
      setPressCounter((currentPressCounter) => currentPressCounter +1)
    }
 return(
    <View>
         <View>
            <Pressable onPress={() => navigation.navigate("Cart")}>
               <Image style={styles.picture} source={require('../assets/shopping-cart.png')}></Image>
               <Text style={styles.counter} >{pressCounter}</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Terms")}>
               <Text style={styles.buttonText}>TERMS & CONDITIONS</Text>
            </Pressable>
         </View>

      <FlatList ListFooterComponent={<View style={{ height: 450 }}></View>} 
      data={data} 
      renderItem={({item})=>{
      
         if(item.title.rendered.toLowerCase().includes(input.toLowerCase())){
            return(
               <View style={styles.productContainer}>

                  <ProductItem
                     title={item.title.rendered}
                     image={item.yoast_head_json.og_image[0].url}/>
                        

                  <Pressable style={styles.button} onPress={() => navigation.navigate("Details", 
                     {itemTitle: item.title.rendered,
                     itemDesc: item.yoast_head_json.og_description, itemImage: item.yoast_head_json.og_image[0].url } )}> 
                     <Text style={styles.buttonText}> BEKIJK RODUCT</Text>
                  </Pressable>

                  <Pressable style={styles.button} onPress={() => pressHandler()}> 
                     <Text style={styles.buttonText}> ADD TO CART </Text>
                  </Pressable>
                
               </View>
            )
           }
         }}>
         </FlatList>
    </View>
 );
}

export default Filter;

const styles = StyleSheet.create({
   picture: {
       width:40,
       height:40,
       marginLeft:"82%",
   },
   productContainer:{
      padding: 15,
      backgroundColor:"#f7f7f7",
      margin: 15,
      borderRadius:10,
  },
  counter:{
   marginLeft: "92%"
},
button: {
   borderRadius:20,
   backgroundColor:"#00008B",
   paddingVertical: 10,
   marginVertical: 10,
   marginHorizontal:20, 
},
buttonText:{
   color: "#f7f7f7",
   marginLeft: "auto",
   marginRight: "auto",
   fontWeight: "bold"
}, 
});