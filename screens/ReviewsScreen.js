import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, FlatList} from 'react-native';
import Review from '../components/Review'

const Reviews = () => {
    //voorbeeldoefening todo
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
            setReviews((currentReview) => [...currentReview, enteredReview]);  //Spreadsheet aanpassing op laatste versie in geheugen & geavanceerder dan push
        };
    }
    return(
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder="Schrijf een review"
                style={styles.input}
                clearButtonMode="always" /*bij ios kruisje*/
                onChangeText={reviewInputHandler}
                />
                <Button style={styles.btn} title="ADD" onPress={addReviewHandler}/>

            </View>
            <FlatList ListFooterComponent={<View style={{ height: 200 }}></View>} style={styles.flatlist} data={reviews} renderItem={(itemData)=> (
                <Review reviewInput = {itemData.item} />
            )}/>
        </View>
    )
};

export default Reviews;

const styles = StyleSheet.create ({
  inputContainer: {
    backgroundColor:"#f7f7f7",
    marginHorizontal:20,
    marginVertical:10,
    borderRadius:5,
  },
  input:{
    paddingBottom:40
  },

})