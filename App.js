import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import MyProfileScreen from './Screens/MyProfileScreen';
import ProjectsScreen from './Screens/ProjectsScreen';
import TicketsScreen from './Screens/TicketsScreen';
import DashboardScreen from './Screens/Dashboard';
import NewProject from './Screens/NewProject';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Projects') {
              iconName = focused
                ? 'file-tray-stacked'
                : 'file-tray-stacked-outline';
            } else if (route.name === 'Tickets') {
              iconName = focused ? 'pricetags' : 'pricetags-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            } else if (route.name === 'Dashboard') {
              iconName = focused ? 'home' : 'home-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Tickets" component={TicketsScreen} />
        <Tab.Screen name="Projects" component={ProjectsScreen} />
        <Tab.Screen name="Profile" component={MyProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
