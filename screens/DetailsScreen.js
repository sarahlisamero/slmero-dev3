import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet, View, Pressable, Text,Image, FlatList} from 'react-native';
import ProductDetails from '../components/ProductDetails';

const Stack = createNativeStackNavigator();

const Details = ({navigation, route}) =>{

    return (
        <View style={styles.screen}>
            <ProductDetails
            title={route.params.itemTitle}
            description={route.params.itemDesc}
            image={route.params.itemImage}
            />
            <Pressable style={styles.btn} onPress={() => navigation.navigate("Reviews")}> 
                <Text style={styles.btnText}>SCHRIJF REVIEWS</Text>
            </Pressable>
        </View>
    )
}
export default Details;

const styles = StyleSheet.create({
    screen:{
        backgroundColor: '#add8e6',
        paddingBottom: 200
    },
    btn:{
        borderRadius:20,
        backgroundColor:"#00008B",
        paddingVertical: 10,
        marginVertical: 10,
        width:180,
        marginLeft: "auto",
        marginRight: "auto"
    },
    btnText:{
        color: "#f7f7f7",
        marginLeft: "auto",
        marginRight: "auto",
        fontWeight: "bold"
    }
})

