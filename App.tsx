import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserProfile from './src/UserProfile'; // Adjust the path based on where UserProfile.js is located
import DoctorProfile from './src/DoctorProfile';
import FoodPage from './src/FoodPage';
// import PersonImage from './src/PersonImage';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserProfile">
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
        <Stack.Screen name="FoodPage" component={FoodPage} />
        {/* <Stack.Screen name="PersonImage" component={PersonImage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;