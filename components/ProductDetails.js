import { View, Text, StyleSheet, Image} from 'react-native';

const ProductDetails = props => { 
  return (
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Image style={styles.cover} source={{uri: `${props.image}`}}/> 
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
  },
  cover:{
    width:345,
    height:400,
    marginVertical:20
  }
})