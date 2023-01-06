import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TextInput, ScrollView, Text, Pressable} from 'react-native';

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
        <View style={styles.screen}>
            <View>
                <TextInput
                    value={input}
                    placeholder="Zoek op naam"
                    style={styles.input}
                    onChangeText={(text) => setInput(text)}
                />
                <Filter data={products} input={input} setInput={setInput} navigation={navigation}/>
            </View>

        </View>
    )
}
export default Products;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#add8e6',
    },
    input: {
        backgroundColor:"#f7f7f7",
        color:"#000000",
        marginBottom:10,
        paddingLeft:10,
        paddingTop:10,
        paddingBottom:10,
    },
    button:{
        backgroundColor:"#FFD580",
        padding:10,
        marginVertical: 20,
        marginHorizontal:70,
        borderRadius:20
    },
    buttonText:{
        marginLeft:"auto",
        marginRight: "auto"
    }
})