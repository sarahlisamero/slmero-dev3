import { View, Text, StyleSheet, Image} from 'react-native';

const ProductItem = props => { 

  return (
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Image style={styles.cover}
        source={{ uri: `${props.image}` }}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  title:{
  fontSize:24,
  fontWeight: "bold",
},
cover:{
  width:324,
  height:300,
  marginVertical:10,
  borderRadius: 10
}
});
export default ProductItem;
