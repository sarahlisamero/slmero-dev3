import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList,Button, ScrollView} from 'react-native';

import ProductItem from '../components/ProductItem'; 

const Stack = createNativeStackNavigator();

const Products = ({navigation}) =>{

    const [products, setProducts] = useState ([]); //variabele maken

    const getProducts = async () => {
        try {
            const response = await fetch ("https://sarahlisamero.be/index.php/wp-json/wp/v2/posts?categories=9", { //enkel posts met deze categorie ophalen

            })
            const json = await response.json(); 
            setProducts(json); //gelukt
        } catch (error) {
            console.error(error); //niet gelukt
        }
    }

    useEffect(() => {
        getProducts(); //laadt de producten
    }, []);

    const [pressCounter, setPressCounter] = useState(0);
    function pressHandler() {
    console.log("pressed ");
    setPressCounter((currentPressCounter) => currentPressCounter +1)
    }

    return (
        <ScrollView style={styles.screen}>

            <TextInput
                placeholder="Search product"
                style={styles.input}/*
                onChangeText={getProductsByTitleSearch}*///geeft argument enteredText mee, denk aan de taskInputHandler uit de todo app.
             />
            <Pressable onPress={() => navigation.navigate("cart")}>
                <Image style={styles.picture} source={require('../assets/shopping-cart.png')}></Image>
                <Text style={styles.counter} >{pressCounter}</Text>
            </Pressable>

            <FlatList data={products} renderItem={({item}) => (
                <View style={styles.productContainer}>
                     <ProductItem
                        title={item.title.rendered}
                        description={item.yoast_head_json.og_description}
                        image={item.yoast_head_json.og_image[0].url}/>
                <Button title="Bekijk Product" onPress={() => navigation.navigate("Details", 
                {itemTitle: item.title.rendered,
                itemDesc: item.yoast_head_json.og_description, itemImage: item.yoast_head_json.og_image[0].url } )}/>

                <Button style={styles.button} title="add to cart" onPress={() => pressHandler()}/>
                </View>
            )}/>
        </ScrollView>
    )
}
export default Products;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#add8e6',
    },
    picture: {
        width:40,
        height:40,
        marginLeft:"82%",
    },
    productContainer:{
        padding: 15,
        backgroundColor:"#f7f7f7",
        margin: 15,
    },
    input: {
        backgroundColor:"#f7f7f7",
        color:"#000000",
        marginBottom:10,
        paddingLeft:10,
        paddingTop:10,
        paddingBottom:10,
    },
    button: {
        marginVertical:10,
    },
    counter:{
        marginLeft: "92%"
    }
})