import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
//dit is een test
const Review = props => {
  return (
    <View style={styles.container}> 
        <Text style={styles.title}>Anoniempje: </Text>
        <Text>{props.reviewInput}</Text>
    </View>
  );
}
 
export default Review;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#add8e6',
        margin: 20,
        padding: 10,
        borderRadius:10
    },
    title:{
        fontWeight:"bold",
        paddingBottom:10
    }
});