import { Tabs } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constanst/constanst';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: Colors.contrast
        }}>
    <Tabs.Screen
      name="home/index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
      }}
    />
    <Tabs.Screen
      name="settings/index"
      options={{
        title: 'Settings',
        tabBarIcon: ({ color }) => <Ionicons size={28} name="settings-outline" color={color} />,
      }}
    />
    <Tabs.Screen
      name="favorites/index"
      options={{
        title: 'Favorites',
        tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
      }}
    />
  </Tabs>

  )
}
export default TabsLayout
