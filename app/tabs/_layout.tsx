import { Tabs } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constanst/constanst';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarStyle: {
            backgroundColor: Colors.primary
        },
        headerShown: false,
        tabBarActiveTintColor: Colors.contrast,
        tabBarLabelStyle: {
            fontFamily: 'SpaceGrotesk-Bold'
        }
        // tabBarActiveBackgroundColor: Colors.foreground // da color al icono activo
        }}>
     <Tabs.Screen
      name="home/index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
      }}
    />
    <Tabs.Screen
      name="(stack)"
      options={{
        title: 'stack',
        tabBarIcon: ({ color }) => <Ionicons size={28} name="file-tray-stacked-outline" color={color} />,
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
