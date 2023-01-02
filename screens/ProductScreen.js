import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TextInput, ScrollView} from 'react-native';

import ProductItem from '../components/ProductItem'; 
import Filter from '../components/Filter'

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

    const [input, setInput] = useState("");
    console.log(input);

    return (
        <ScrollView style={styles.screen}>
            <View>
                <TextInput
                    value={input}
                    placeholder="Zoek op naam"
                    style={styles.input}
                    onChangeText={(text) => setInput(text)}
                />
                <Filter data={products} input={input} setInput={setInput} navigation={navigation}/>
            </View>

            {/*<View>
                <Pressable onPress={() => navigation.navigate("Cart")}>
                    <Image style={styles.picture} source={require('../assets/shopping-cart.png')}></Image>
                    <Text style={styles.counter} >{pressCounter}</Text>
                </Pressable>
             </View>*/}
            {/*
            <View>
            <FlatList 
            ListFooterComponent={<View style={{height:250}}></View>} 
            data={products} 
            renderItem={({item}) => (
                <View style={styles.productContainer}>
                     <ProductItem
                        title={item.title.rendered}
                        image={item.yoast_head_json.og_image[0].url}/>
                        
                <Button title="Bekijk Product" onPress={() => navigation.navigate("Details", 
                {itemTitle: item.title.rendered,
                itemDesc: item.yoast_head_json.og_description, itemImage: item.yoast_head_json.og_image[0].url } )}/>

                <Button style={styles.button} title="add to cart" onPress={() => pressHandler()}/>
                </View>
            )}/>
            </View>
                */}
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
    /*productContainer:{
        padding: 15,
        backgroundColor:"#f7f7f7",
        margin: 15,
    },*/
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