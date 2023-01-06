import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from './screens/ProductScreen';
import Details from './screens/DetailsScreen';
import Cart from './screens/CartScreen';
import Terms from './screens/TermsScreen';
import Reviews from './screens/ReviewsScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="Reviews" component={Reviews}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

