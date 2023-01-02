import { View, Text, StyleSheet, Image} from 'react-native';

const ProductDetails = props => { /*ProductItem*/
  return (
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Image source={{uri: `${props.image}`}}/> 
        <Text>{props.description}</Text>
      </View>
  );
}

export default ProductDetails;
const styles = StyleSheet.create ({
  title:{
    fontSize:24,
    fontWeight: "bold",
  },
  container:{
    margin: 20,
  }
})