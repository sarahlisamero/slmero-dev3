import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList} from 'react-native';
import Review from '../components/Review'

const Reviews = () => {

    const [enteredReview, setEnteredReview] = useState('');
    const [reviews, setReviews] = useState([]);
    const reviewInputHandler = (enteredText) => {
        setEnteredReview(enteredText);
    }

    const addReviewHandler = () => {
        if(enteredReview === ""){
            return(
                alert("Je hebt geen review geschreven")
            )
        }
        else{
            setReviews((currentReview) => [...currentReview, enteredReview]);  //aanpassing op laatste versie in geheugen
        };
    }
    return(
        <View>
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder="Schrijf een review"
                style={styles.input}
                clearButtonMode="always" /*bij ios kruisje*/
                onChangeText={reviewInputHandler}
                />
                <Button style={styles.btn} title="ADD" onPress={addReviewHandler}/>

            </View>
            <FlatList data={reviews} renderItem={(itemData) => (
                <Review reviewInput = {itemData.item} />
            )}/>
        </View>
    )
};

export default Reviews;

const styles = StyleSheet.create ({
  inputContainer: {
    backgroundColor:"#f7f7f7",
  },
  input:{
    paddingBottom:40
  },

})