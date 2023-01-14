import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, FlatList, TouchableWithoutFeedback, Text} from 'react-native';
import Review from '../components/Review'

//nieuw dat nog niet op andere schermen voorkomt: spread

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
            </View>
            <TouchableWithoutFeedback onPress={addReviewHandler}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>ADD REVIEW</Text>
                </View>
            </TouchableWithoutFeedback>
            <FlatList ListFooterComponent={<View style={{ height: 200 }}></View>} style={styles.flatlist} data={reviews} renderItem={(itemData)=> (
                <Review reviewInput = {itemData.item} />
            )}/>
        </View>
    )
};

export default Reviews;

const styles = StyleSheet.create ({
  inputContainer: {
    backgroundColor:"#ffffff",
    marginHorizontal:20,
    marginVertical:10,
    borderRadius:5,
  },
  input:{
    paddingBottom:70
  },
  btn:{
    backgroundColor: "#00008B",
    width: 150,
    marginLeft:"auto",
    marginRight:"auto",
    padding:10,
    borderRadius:50
  },
  btnText:{
    color:"#f7f7f7",
    fontWeight:"bold",
    marginLeft:"auto",
    marginRight:"auto"
  }
})