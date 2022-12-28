import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';

import ProductItem from '../components/ProductItem'; 


const Stack = createNativeStackNavigator();

const products = ({navigation}) =>{

    const [products, setProducts] = useState ([]); //variabele maken

    const getProducts = async () => {
        try {
            const response = await fetch ("https://sarahlisamero.be/index.php/wp-json/wp/v2/posts?categories=9", { //enkel posts met deze categorie ophalen

            })
            const json = await response.json(); 
            setProducts(json); //gelukt
            console.log(products);
        } catch (error) {
            console.error(error); //niet gelukt
        }
    }

    useEffect(() => {
        getProducts(); //laadt de producten
    }, []);


    return (
        <View style={styles.screen}>

            <TextInput
                placeholder="Search product"
                style={styles.input}/*
                onChangeText={getProductsByTitleSearch}*///geeft argument enteredText mee, denk aan de taskInputHandler uit de todo app.
             />

            <Pressable onPress={() => navigation.navigate("cart")}>
                <Image style={styles.picture} source={require('../assets/shopping-cart.png')}></Image>
            </Pressable>

            <FlatList data={products} renderItem={({item}) => (
                <ProductItem
                title={item.title.rendered}
                description={item.yoast_head_json.og_description.split()}
                image={item.yoast_head_json.og_image[0].url}/>
            )}/>
            
            <FlatList data={products} renderItem={({item}) => (
                <View>
                    <Text>{item.title.rendered}</Text>
                    <Text>{item.yoast_head_json.og_description}</Text>
                    <Pressable onPress ={()=> navigation.navigate ("info", {itemTitle: item.title.rendered})}>
                        <Text>Bekijk productdetails</Text>
                    </Pressable>
                </View>
            )}/>
        
        </View>
    )
}
export default products;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#add8e6',
    },
    picture: {
        width:40,
        height:40,
        marginLeft:"85%",
    },
    input: {
        backgroundColor:"#f7f7f7",
        color:"#000000",
        marginBottom:10,
        paddingLeft:10,
        paddingTop:10,
        paddingBottom:10,
    }
})