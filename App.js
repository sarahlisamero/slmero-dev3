import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from './screens/ProductScreen';
import Details from './screens/DetailsScreen';
import Cart from './screens/CartScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="products" component={Products} />
        <Stack.Screen name="details" component={Details} />
        <Stack.Screen name="cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
