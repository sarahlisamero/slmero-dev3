import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import products from './screens/ProductScreen';
import details from './screens/DetailsScreen';
import cart from './screens/CartScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="products" component={products} />
        <Stack.Screen name="details" component={details} />
        <Stack.Screen name="cart" component={cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
