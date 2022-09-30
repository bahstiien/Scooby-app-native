import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewProject from './NewProject';
import MyProfile from './MyProfile';
import Team from './Team';

const Stack = createNativeStackNavigator();

export default function MyProfileScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyProfile"
        options={{ headerShown: false }}
        component={MyProfile}
      />
      <Stack.Screen name="Team" component={Team} />
    </Stack.Navigator>
  );
}
