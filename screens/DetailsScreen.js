import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet, View, Image, FlatList} from 'react-native';
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
        </View>
    )
}
export default Details;

const styles = StyleSheet.create({
    screen:{
        backgroundColor: "#ffdfb5"
    }
})

