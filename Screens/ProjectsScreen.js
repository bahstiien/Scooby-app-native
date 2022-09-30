import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewProject from './NewProject';
import AllProjectsScreen from './AllProjectsScreen';

const Stack = createNativeStackNavigator();

export default function ProjectsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllProjects"
        options={{ headerShown: false }}
        component={AllProjectsScreen}
      />
      <Stack.Screen name="NewProject" component={NewProject} />
    </Stack.Navigator>
  );
}
