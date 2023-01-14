import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TextInput, Pressable, Image, Text, FlatList} from 'react-native';

import ProductItem from '../components/ProductItem'; 

/*import Filter from '../components/Filter'*/

//producten ophalen uit databank
const Products = ({navigation}) =>{

    const [products, setProducts] = useState ([]); //variabele maken - array

    const getProducts = async () => {
        try {
            const response = await fetch ("https://sarahlisamero.be/index.php/wp-json/wp/v2/posts?categories=9", { //enkel posts met deze categorie ophalen

            })
            const json = await response.json(); 
            setProducts(json); //gelukt -> producten ophalen -> weergeven scherm
        } catch (error) {
            console.error(error); //niet gelukt -> error
        }
    }
    //producten laden op scherm
    useEffect(() => {
        getProducts(); 
    }, []);

    //counter winkelkar
    const [pressCounter, setPressCounter] = useState(0);
    function pressHandler() {
       setPressCounter((currentPressCounter) => currentPressCounter +1)
     }
    
    //filteren op titel zoals movies oefening
    const getProductByTitle = async (enteredText) => {
        try {
            if(enteredText.length > 0){
                const search = encodeURI("https://sarahlisamero.be/index.php/wp-json/wp/v2/posts?categories=9&search=" + enteredText);
                const response = await fetch(search);
                const json = await response.json();
                console.log(json);
                setProducts(json);
            }  
        } catch (error){
            console.log(error);
        }
    }
    return(
        <View style={styles.screen}>
            
            <TextInput
            style={styles.input}
            placeholder="Zoek op naam"
            onChangeText={getProductByTitle} //hierboven gemaakt
            />

            <View>
                <Pressable onPress={() => navigation.navigate("Cart")}>
                   <Image style={styles.picture} source={require('../assets/shopping-cart.png')}></Image>
                   <Text style={styles.counter} >{pressCounter}</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Terms")}>
                   <Text style={styles.buttonText}>TERMS & CONDITIONS</Text>
                </Pressable>
            </View>

            <FlatList style={styles.list} ListFooterComponent={<View style={{ height: 250 }}></View>} 
            data={products} 
            renderItem={({item})=>(
                <View style={styles.productContainer}>
                    <ProductItem
                        title={item.title.rendered}
                        image={item.yoast_head_json.og_image[0].url}/>
                            
                    <Pressable style={styles.button} onPress={() => navigation.navigate("Details", 
                        {itemTitle: item.title.rendered,
                        itemDesc: item.yoast_head_json.og_description, itemImage: item.yoast_head_json.og_image[0].url } )}> 
                        <Text style={styles.buttonText}> BEKIJK PRODUCT</Text>
                    </Pressable>
    
                    <Pressable style={styles.button} onPress={() => pressHandler()}> 
                        <Text style={styles.buttonText}> ADD TO CART </Text>
                    </Pressable>
                </View>
            )}/>
        </View>
     );
};

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
        backgroundColor:"#00008B",
        padding:10,
        marginVertical: 10,
        marginHorizontal:30,
        borderRadius:20
    },
    buttonText:{
        marginLeft:"auto",
        marginRight: "auto",
        color:"#F7F7F7",
        fontWeight:"bold"
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
       borderRadius:10,
   },
   counter:{
    marginLeft: "92%"
   },
   list:{
    marginTop: 10,
  }
})