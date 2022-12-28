
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';


const ProductDetails = props => { /*ProductDetails*/
  const [productDetails, setPoductDetails] = useState({});

  const getProductDetailsById = async () => {
    try {
      const url = encodeURI("https://sarahlisamero.be/index.php/wp-json/wp/v2/posts/" + props.productId + "/")
      const response = await fetch (url, { 

      })
      const json = await response.json();
      setPoductDetails(json.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProductDetailsById();
  }, []);

  return (
    <ScrollView>
      <Text style={styles.title}>{productDetails.title}</Text>
      <View style={styles.details}>
        <Text>{productDetails.description}</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    margin: 16,
    fontSize: 24,
    textAlign: 'center',
  },
  details: {
    borderWidth: 1,
    padding: 16,
    margin: 8,
  },
  
});
export default ProductDetails;