import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import Filter from '../components/Filter'

const Products = ({navigation}) =>{

    const [products, setProducts] = useState ([]); //variabele maken - array

    const getProducts = async () => {
        try {
            const response = await fetch ("https://sarahlisamero.be/index.php/wp-json/wp/v2/posts?categories=9", { //enkel posts met deze categorie ophalen

            })
            const json = await response.json(); 
            setProducts(json); //gelukt -> producten ophalen -> weergeven scherm
        } catch (error) {
            console.error(error); //niet gelukt
        }
    }

    useEffect(() => {
        getProducts(); //laadt de producten op scherm
    }, []);

    const [input, setInput] = useState(""); //string
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
                <Filter data={products} input={input} setInput={setInput} navigation={navigation} /*filter component & waarden meegeven*//> 
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
        marginVertical:10,
        paddingLeft:10,
        paddingTop:10,
        paddingBottom:10,
        marginHorizontal:15,
        borderRadius:10
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